import React from 'react'
import { useComponents, useActiveComponent } from '../inc'
import { addItem } from '../store'

const ComponentSelector = function () {
  const {active} = useActiveComponent()
  const {components} = useComponents()

  const newItem = (item) => {
    addItem({
      'type': item.TYPE,
      'props': Object.assign({}, item.DefProps)
    }, active)
  }

  const child = components.map((item, index) => {
    return (
      <div
        key={item.TYPE}
        className=''
        onClick={() => newItem(item)}
      >
        {item.NAME}
      </div>
    )
  })

  return (
    <div className={'componentSelector'}>{child}</div>
  )
}

export default ComponentSelector
