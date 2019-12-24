import React, { useState } from 'react'
import NativeListener from 'react-native-listener'

/**
 * render component
 * @param item
 * @param comMaker
 * @param mouseHandler
 * @param active
 * @returns {*}
 */
export const renderComponentView = (item, comMaker, mouseHandler, active) => {
  if (!item) {
    return
  }

  const props = Object.assign({}, item.props)
  let child = []
  if (item.child) {
    child = item.child.map((item) => {
      return renderComponentView(item, comMaker, mouseHandler, active)
    })
  }

  const mouseHandles = { ...mouseHandler }
  mouseHandles.onClick = (e) => {
    e.stopPropagation()
    mouseHandler.onClick(item, e)
  }

  const component = comMaker(item.type)
  const isActive = active && item.id === active.id
  return (
    <div key={item.id} className={isActive ? 'activeComponent' : ''}>
      <NativeListener {...mouseHandles}>
        {React.createElement(component.ViewEditor, props, child)}
      </NativeListener>
    </div>
  )
}

const getDOMPosition = (target, topDomClassName) => {
  let left = 0
  let top = 0
  let current = target
  do {
    left += current.offsetLeft
    top += current.offsetTop

    if (topDomClassName
      && current.className
      && topDomClassName === current.className
    ) {
      break
    }
    current = current.offsetParent
  } while (current)

  return {
    left: left,
    top: top,
    width: target.offsetWidth,
    height: target.offsetHeight,
  }
}

export const useMouseLayerPosition = function(topDomClassName) {
  const [isOnLayer, setOnLayer] = useState(false)
  const [position, setPosition] = useState({left: 0, top:0, width: 0, height:0});

  const onMouseOver = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setOnLayer(true)
    setPosition(getDOMPosition(e.target, topDomClassName))
  }

  const onMouseOut = (e) => {
    e.stopPropagation()
    setOnLayer(false)
  }

  return {
    isOnLayer,
    position,
    handler : {
      onMouseOver,
      onMouseOut,
    }
  }
}
