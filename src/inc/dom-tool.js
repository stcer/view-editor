import React from 'react'
import NativeListener from 'react-native-listener'

export const getDOMPosition = (target, topDomClassName) => {
  let current = target.offsetParent
  let actualLeft = target.offsetLeft
  let actualTop = target.offsetTop

  while (current !== null) {
    actualLeft += current.offsetLeft
    actualTop += current.offsetTop

    if (topDomClassName
      && current.className
      && topDomClassName === current.className
    ) {
      break;
    }

    current = current.offsetParent
  }

  return {
    left: actualLeft,
    top: actualTop,
    width: target.offsetWidth,
    height: target.offsetHeight,
  }
}


/**
 * render component
 * @param item
 * @param componentFactory
 * @param editHandler
 * @param activeComponent
 * @returns {*}
 */
export const renderComponentView = (item, componentFactory, editHandler, activeComponent) => {
  if (!item) {
    return
  }

  const props = Object.assign({}, item.props)
  let child = []
  if (item.child) {
    child = item.child.map((item) => {
      return renderComponentView(item, componentFactory, editHandler, activeComponent)
    })
  }

  const outerProps = {}
  outerProps.onMouseOver = editHandler.handleMouseOver
  outerProps.onMouseLeave = editHandler.handleMouseOut
  outerProps.onClick = (e) => {
    e.stopPropagation()
    editHandler.handleClick(item, e)
  }

  const component = componentFactory(item.type)
  const isActive = activeComponent && item.id === activeComponent.id
  return (
    <div key={item.id} className={isActive ? 'activeComponent' : ''}>
      <NativeListener {...outerProps}>
        {React.createElement(component.ViewEditor, props, child)}
      </NativeListener>
    </div>
  )
}
