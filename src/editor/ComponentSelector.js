import { Icon, Collapse } from 'antd'

import React from 'react'
import { useComponentContext, useActiveContext, addNewComponent } from '../inc'

const { Panel } = Collapse;

const ComponentSelector = function () {
  const {active} = useActiveContext()
  const {findComponentByType, components} = useComponentContext()

  const add = (component) => {
    addNewComponent(component, active, findComponentByType)
  }

  return (
    <div className={'componentSelector'}>
    <Collapse
      defaultActiveKey={['0', '1']}
      bordered={false}
      expandIcon={
        ({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />
      }
    >
      {components.map((group, index) =>
          <Panel header={group.groupName} key={index}>
            {group.child.map((component) =>
              <div key={component.TYPE}
                   className='comItem'
                   onClick={() => add(component)}
              >
                <Icon type={component.icon} theme="filled" /> &nbsp;
                {component.name}
              </div>
            )}
          </Panel>
      )}
    </Collapse>
    </div>
  )
}

export default ComponentSelector
