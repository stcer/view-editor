import { Icon } from 'antd'
import React from 'react'
import { useDrag } from 'react-dnd'

import { useActiveContext, useMouseLayerPosition, useComponentContext, useComponentDrop, DNDItem } from '../inc'
import { moveUp, moveDown, removeItem } from '../store'
import ViewEditLayer from './ViewEditLayer'

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
    <div className={'viewEditor'}>
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
    el = <div className={'emptyContainer'}>请插入内容</div>
  } else {
    el = child.map((item) => <ComponentRender key={item.id} item={item} />)
  }

  return (
    <div className={'j-component-container'}>
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

  const props = Object.assign({ renderChild }, item.props)
  const component = findComponentByType(item.type)
  const isActive = active && item.id === active.id

  // 使用 useDrag
  const [, drag] = useDrag({
    item: { item, type: DNDItem.type },
    })
  const [{isOver, isOverCurrent}, drop] = useComponentDrop(item)

  const topBarStyle = {
    padding: '3px 10px',
    backgroundColor: '#999',
    display: isActive ? 'inline-block' : 'none',
    color: '#fff',
  }

  const comDomProps = {
    ...MouseChangeHandler,
    className: ComClassName,
    ref: component.appendChild ? drop : null,
    style: getStyle(isOverCurrent || isOver ?　'rgba(128, 128, 128, .1)' : '')
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        setActive(item)
      }}
      className={isActive ? 'activeComponent' : ''}
    >
      <div ref={drag} style={topBarStyle}>
        <Icon type="caret-up" onClick={() => moveUp(active)} theme="filled" /> &nbsp;
        <Icon type="caret-down" onClick={() => moveDown(active)} theme="filled" /> &nbsp;
        <Icon type="close" onClick={() => removeItem(active)} /> &nbsp;
      </div>

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
