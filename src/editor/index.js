import React from 'react'
import Editor from "./Editor"
import NativeListener from 'react-native-listener'
import './editor.css'

/**
 * render component
 * @param item
 * @param componentFactory
 * @param editHandler
 * @param activeComponent
 * @returns {*}
 */
const renderComponentView = (item, componentFactory, editHandler, activeComponent) => {
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

export {
  Editor,
  renderComponentView
}
