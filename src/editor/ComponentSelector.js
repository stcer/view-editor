import { Icon, Collapse } from 'antd'

import React from 'react'
import { useDrag } from 'react-dnd'
import { useComponentContext, useActiveContext, DNDItem } from '../inc'

const { Panel } = Collapse

const ComponentSelector = function () {
  const { active } = useActiveContext()
  const { addChildFromComponent, components } = useComponentContext()

  return (
    <div className={'je-component-selector'}>
      <Collapse
        defaultActiveKey={['0', '1', '2']}
        bordered={false}
        expandIcon={
          ({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />
        }
      >
        {components.map((group, index) =>
          <Panel header={group.groupName} key={index}>
            {group.child.map((component) =>
              <div key={component.TYPE} className='je-com-item'>
                <MenuItem component={component} onClick={() => addChildFromComponent(active, component)} />
              </div>
            )}
          </Panel>
        )}
      </Collapse>
    </div>
  )
}

const MenuItem = ({ component, onClick }) => {
  const [, drag] = useDrag({
    item: { type: DNDItem.type, item: { component } },
  })
  return (
    <div ref={drag} onClick={onClick}>
      <Icon type={component.icon} theme="filled" /> &nbsp;
      {component.name}
    </div>
  )
}

export default ComponentSelector
