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
            data={data}
            onClear={onClear}
            onReset={onReset}
            onSave={() => onSave(data)}
          />
          <Row>
            <div className={'je-editor-left'}>
              <ComponentSelector />
            </div>
            <div className={'je-editor-center'}>
              <ViewEditor data={data} />
            </div>
            <div className={'je-editor-right'}>
              <PropEditor />
            </div>
          </Row>
        </div>
      </ActiveComponentContext.Provider>
    </ComponentsContext.Provider>
  )
}

export default Editor
