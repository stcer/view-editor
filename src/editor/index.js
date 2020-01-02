import { Row, Col } from 'antd'
import React from 'react'
import { ComponentsContext, ActiveComponentContext, useActiveContextValue, useComponentsContextValue } from '../inc'
import { useData } from '../store'

import PropEditor from './PropEdior'
import ToolBar from './ToolBar'
import ViewEditor from './ViewEditor'
import ComponentSelector from './ComponentSelector'
import './editor.css'

const Editor = function ({ components, initData, onSave, onClear, onReset }) {
  const { data, history } = useData(initData)
  const activeContextValue = useActiveContextValue()
  const componentContextValue = useComponentsContextValue(components)

  return (
    <ComponentsContext.Provider value={componentContextValue}>
      <ActiveComponentContext.Provider value={activeContextValue}>
        <div className={'je-editor'}>
          <ToolBar
            history={history}
            onClear={onClear}
            onReset={onReset}
            onSave={() => onSave(data)}
          />
          <Row>
            <Col span={3}><ComponentSelector /></Col>
            <Col span={15}>
              <ViewEditor data={data} />
            </Col>
            <Col span={6}><PropEditor /></Col>
          </Row>
        </div>
      </ActiveComponentContext.Provider>
    </ComponentsContext.Provider>
  )
}

export default Editor
