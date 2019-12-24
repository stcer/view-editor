import React from 'react'
import { useComponentContext, useActiveContext } from '../inc'
import { addItem } from '../store'

const ComponentSelector = function () {
  const {active} = useActiveContext()
  const {components} = useComponentContext()

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
