import React from 'react'
import { useComponentContext, useActiveContext, useMouseLayerPosition } from '../inc'
import ViewEditLayer from './ViewEditLayer'

const topDomClassName = 'components'
let mouseChangeHandler = null

/**
 * show all component
 * @returns {*}
 * @constructor
 */
export default function ViewEditor ({ data }) {
  // active component
  const { active } = useActiveContext()

  // edit layer
  const { isOnLayer, position, handler } = useMouseLayerPosition(topDomClassName)
  mouseChangeHandler = handler

  return (
    <div className={'viewEditor'}>
      <div className={topDomClassName} style={{ position: 'relative' }}>
        {childRender(data)}
      </div>

      <ViewEditLayer
        isShow={isOnLayer}
        position={position}
        activeCom={active} />
    </div>
  )
}

const childRender = (child) => {
  if (!(child instanceof Array) || child.length === 0) {
    return (<EmptyContainer />)
  }
  return child.map((item) => <ComponentRender key={item.id} item={item} />)
}

/**
 * @param item
 * @returns {*}
 * @constructor
 */
export function ComponentRender ({ item }) {
  const { findComponentByType } = useComponentContext()
  const { active, setActive } = useActiveContext()

  const handleActive = (e) => {
    e.stopPropagation()
    setActive(item)
  }

  const props = Object.assign({childRender}, item.props)
  const component = findComponentByType(item.type)
  const isActive = active && item.id === active.id

  return (
    <div {...mouseChangeHandler}
         onClick={handleActive}
         id={'com-' + item.id}
         key={item.id}
         className={isActive ? 'activeComponent' : ''}>
      {React.createElement(component.ViewEditor, props)}
    </div>
  )
}

export const EmptyContainer = () => {
  return (
    <div className={'emptyContainer'}>请插入内容</div>
  )
}

