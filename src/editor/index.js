import { Row, Col } from 'antd'
import React, { useState } from 'react'
import NativeListener from 'react-native-listener'
import { initComponents } from '../component'
import { ComponentsContext, ActiveComponentContext } from '../inc'
import { useData } from '../store'
import ComponentSelector from './ComponentSelector'
import './editor.css'

import PropEditor from './PropEdior'
import ViewEditor from './ViewEditor'

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

const Editor = function ({ components, initData }) {
  const data = useData(initData)
  const [active, setActive] = useState(null);
  return (
    <ComponentsContext.Provider value={initComponents(components)}>
    <ActiveComponentContext.Provider value={{active, setActive}}>
      <div className={'j-editor'}>
        <Row>
          <Col span={4}><ComponentSelector /></Col>
          <Col span={16}><ViewEditor data={data} /></Col>
          <Col span={4}><PropEditor /></Col>
        </Row>
      </div>
    </ActiveComponentContext.Provider>
    </ComponentsContext.Provider>
  )
}

export default Editor

export {
  Editor,
  renderComponentView
}
