import { Row, Col } from 'antd'
import React, { useState } from 'react'
import { initComponents } from '../component'
import { ComponentsContext, ActiveComponentContext } from '../inc'
import { useData } from '../store'
import ComponentSelector from './ComponentSelector'
import './editor.css'

import PropEditor from './PropEdior'
import ViewEditor from './ViewEditor'

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
