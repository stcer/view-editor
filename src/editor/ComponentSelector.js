import { Icon } from 'antd'
import React from 'react'
import { useComponentContext, useActiveContext } from '../inc'
import { addItem, saveItem } from '../store'

const ComponentSelector = function () {
  const {active} = useActiveContext()
  const {map, findComponentByType} = useComponentContext()

  /**
   * 向容器增加新组件
   * @param component
   */
  const newItem = (component) => {
    const props = Object.assign({}, component.props);
    const newComponent = {
      ...component.create(props),
      type: component.TYPE
    }
    if(active) {
      const parent = findComponentByType(active.type)
      if(parent.appendChild){
        parent.appendChild(active, newComponent);
        saveItem(active, newComponent)
      }
    } else {
      addItem(newComponent)
    }
  }

  const child = map((component, index) => {
    return (
      <div
        key={component.TYPE}
        className='comItem'
        onClick={() => newItem(component)}
      >
        <Icon type={component.icon} theme="filled" />
        &nbsp;{component.name}
      </div>
    )
  })

  return (
    <div className={'componentSelector'}>{child}</div>
  )
}

export default ComponentSelector
