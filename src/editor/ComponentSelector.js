import { Icon, Collapse } from 'antd'

import React from 'react'
import { useComponentContext, useActiveContext } from '../inc'
import { addTopItem, saveItem, getNextId } from '../store'

const { Panel } = Collapse;

const ComponentSelector = function () {
  const {active} = useActiveContext()
  const {findComponentByType, components} = useComponentContext()

  /**
   * 向容器增加新组件
   * @param component
   */
  const newItem = (component) => {
    const props = Object.assign({}, component.props);
    const newComponent = {
      ...component.create(props),
      type: component.TYPE,
      id: getNextId()
    }

    if(active) {
      const parentComponent = findComponentByType(active.type)
      if(parentComponent.appendChild){
        parentComponent.appendChild(active, newComponent);
        saveItem(active)
      }
    } else {
      addTopItem(newComponent)
    }
  }


  return (
    <div className={'componentSelector'}>
    <Collapse
      defaultActiveKey={['0']}
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
                   onClick={() => newItem(component)}
              >
                <Icon type={component.icon} theme="filled" />
                &nbsp;{component.name}
              </div>
            )}
          </Panel>
      )}
    </Collapse>
    </div>
  )
}

export default ComponentSelector
