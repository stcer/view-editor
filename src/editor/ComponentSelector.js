import React from 'react'
import { addItem } from '../config'

const ComponentSelector = function ({ components, activeComponent }) {

  const newItem = (item) => {
    addItem({
      'type': item.TYPE,
      'props': Object.assign({}, item.DefProps)
    }, activeComponent)
  }

  const child = components.map((item, index) => {
    return (
      <div
        key={item.TYPE}
        className=''
        onClick={() => newItem(item, activeComponent)}
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
