import { Icon } from 'antd'
import React from 'react'
import { useComponentContext, useActiveContext } from '../inc'
import { addItem } from '../store'

const ComponentSelector = function () {
  const {active} = useActiveContext()
  const {map} = useComponentContext()

  const newItem = (item) => {
    addItem({
      'type': item.TYPE,
      'props': Object.assign({}, item.DefProps)
    }, active)
  }

  const child = map((item, index) => {
    return (
      <div
        key={item.TYPE}
        className='comItem'
        onClick={() => newItem(item)}
      >
        <Icon type={item.ICON} theme="filled" />
        &nbsp;{item.NAME}
      </div>
    )
  })

  return (
    <div className={'componentSelector'}>{child}</div>
  )
}

export default ComponentSelector
