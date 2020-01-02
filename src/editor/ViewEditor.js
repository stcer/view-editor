import React from 'react'

import { useActiveContext, useMouseLayerPosition, useComponentContext, useComponentDrop } from '../inc'
import { saveItem } from '../store'
import ViewEditLayer from './ViewEditLayer'
import ViewEditTool from './ViewEditTool'

const TopCntClassName = 'j-components'
const ComClassName = 'j-component'
let MouseChangeHandler = null

/**
 * show all component
 * @returns {*}
 * @constructor
 */
export default function ViewEditor ({ data }) {
  // edit layer
  const { isOnLayer, position, handler } = useMouseLayerPosition(TopCntClassName, ComClassName)
  MouseChangeHandler = handler

  return (
    <div className={'je-view-editor'}>
      <div className={TopCntClassName} style={{ position: 'relative' }}>
        {renderChild(data)}
      </div>
      <ViewEditLayer isShow={isOnLayer} position={position} />
    </div>
  )
}

const renderChild = (child) => {
  let el
  if (!(child instanceof Array) || child.length === 0) {
    el = <div className={'je-empty-container'}>请插入内容</div>
  } else {
    el = child.map((item) => <ComponentRender key={item.id} item={item} />)
  }

  return (
    <div className={'je-component-container'}>
      {el}
    </div>
  )
}

/**
 * @param item
 * @returns {*}
 * @constructor
 */
export function ComponentRender ({ item }) {
  const { findComponentByType } = useComponentContext()
  const { active, setActive } = useActiveContext()


  const saveProp = (value) => {
    active.props = { ...active.props, ...value }
    saveItem(active)
  }

  const props = Object.assign({ renderChild, saveProp, saveItem}, item.props)
  const component = findComponentByType(item.type)
  const isActive = active && item.id === active.id

  const [{isOver, isOverCurrent}, drop] = useComponentDrop(item)

  const comDomProps = {
    ...MouseChangeHandler,
    className: ComClassName,
    ref: component.appendChild ? drop : null,
    style: getStyle(isOverCurrent || isOver ?　'rgba(128, 128, 128, .1)' : '')
  }

  const onClick = (e) => {
    e.stopPropagation()
    setActive(item)
  }


  return (
    <div onClick={onClick} className={isActive ? 'je-active-component' : ''}>
      <ViewEditTool item={item} active={active} />
      <div {...comDomProps}>
        {React.createElement(component.ViewEditor, props)}
      </div>
    </div>
  )
}

function getStyle (backgroundColor) {
  return {
    backgroundColor,
  }
}
