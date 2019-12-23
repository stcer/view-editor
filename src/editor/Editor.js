import React, { useState } from 'react'
import { Row, Col } from 'antd'

import ComponentSelector from './ComponentSelector'
import PropEditor from './PropEdior'
import ViewEditor from './ViewEditor'

const useActiveComponent = () => {
  return useState(null)
}

const Editor = function ({ components, data, saveItem }) {
  const stateActiveComponent = useActiveComponent();
  const [activeComponent] = stateActiveComponent
  const component = activeComponent ? components.findComponentByType(activeComponent.type) : null

  return (
    <div className={'j-editor'}>
      <Row>
        <Col span={4}><ComponentSelector
          activeComponent={activeComponent}
          components={components} /></Col>
        <Col span={16}><ViewEditor
          data={data}
          components={components}
          stateActiveComponent={stateActiveComponent} />
        </Col>
        <Col span={4}><PropEditor
          component={component}
          data={activeComponent}
          saveHandle={saveItem}
        /></Col>
      </Row>
    </div>
  )
}

export default Editor
