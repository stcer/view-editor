import React, { useState } from 'react'
// import NativeListener from 'react-native-listener'

export const renderComponents = (data, comMaker, mouseHandler, active) => {
  const render = (item) => {
    if (!item) {
      return
    }


    let child = []
    if (item.child) {
      child = item.child.map((com) => render(com))
    }

    const mouseHandles = { ...mouseHandler }
    mouseHandles.onClick = (e) => {
      e.stopPropagation()
      mouseHandler.onClick(item, e)
    }
    const props = Object.assign({render, renders}, item.props)
    const component = comMaker(item.type)
    const isActive = active && item.id === active.id
    return (
      <div {...mouseHandles} key={item.id} className={isActive ? 'activeComponent' : ''}>
        {React.createElement(component.ViewEditor, props, child)}
      </div>
    )
  }

  const renders = (data) => data.map((item) => render(item))
  return renders(data)
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
