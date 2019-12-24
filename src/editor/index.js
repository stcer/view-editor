import { Row, Col } from 'antd'
import React from 'react'
import {
  ComponentsContext,
  ActiveComponentContext,
  useActiveComponentContextValue,
  useComponentsContextValue
} from '../inc'
import { useData } from '../store'
import ComponentSelector from './ComponentSelector'
import './editor.css'

import PropEditor from './PropEdior'
import ViewEditor from './ViewEditor'

const Editor = function ({ components, initData }) {
  const data = useData(initData)
  const activeContextValue = useActiveComponentContextValue()
  const componentContextValue = useComponentsContextValue(components)
  return (
    <ComponentsContext.Provider value={componentContextValue}>
      <ActiveComponentContext.Provider value={activeContextValue}>
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
