import React from 'react'
import NativeListener from 'react-native-listener'

export const getDOMPosition = (target, topDomClassName) => {
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
