import { Icon } from 'antd'
import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useActiveContext, useMouseLayerPosition, useComponentContext } from '../inc'
import { moveUp, moveDown, removeItem, saveItem } from '../store'
import ViewEditLayer from './ViewEditLayer'

const TopContainerClassName = 'j-components'
const ContainerClassName = 'j-component-container'
const ComClassName = 'j-component'
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
  const { isOnLayer, position, handler } = useMouseLayerPosition(TopContainerClassName, ComClassName)
  mouseChangeHandler = handler

  return (
    <div className={'viewEditor'}>
      <div className={TopContainerClassName} style={{ position: 'relative' }}>
        {renderChild(data)}
      </div>
      <ViewEditLayer
        onDelete={() => alert('delete')}
        isShow={isOnLayer}
        position={position}
        activeCom={active} />
    </div>
  )
}

const renderChild = (child) => {
  let el;
  if(!(child instanceof Array) || child.length === 0) {
    el = <EmptyContainer />;
  } else {
    el = child.map((item) => <ComponentRender key={item.id} item={item} />)
  }

  return (
    <div className={ContainerClassName}>
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

  const handleActive = (e) => {
    e.stopPropagation()
    setActive(item)
  }

  const props = Object.assign({ renderChild }, item.props)
  const component = findComponentByType(item.type)
  const isActive = active && item.id === active.id


  // 使用 useDrag
  const [, drag] = useDrag({
    item: { item, type: 'Box' },
    // canDrag() {
    //   return false;
    // }
  })
  const [, drop] = useDrop({
    accept: 'Box',

    drop(dragInfo) {
      const {item:target} = dragInfo
      removeItem(target)

      const parent = findComponentByType(item.type)
      parent.appendChild(item, target);
      saveItem(parent)
      console.log('DROP', target, item)
    }
  })

  const topBarStyle = {
    padding: '3px 10px',
    backgroundColor: '#999',
    display: isActive ? 'inline-block' : 'none',
    color: '#fff',
  };

  return (
    <div {...mouseChangeHandler}
         onClick={handleActive}
         className={isActive ? 'activeComponent' : ''}>
      <div ref={drag} style={topBarStyle}>
        <Icon type="caret-up" onClick={() => moveUp(active)} theme="filled" /> &nbsp;
        <Icon type="caret-down" onClick={() => moveDown(active)} theme="filled" /> &nbsp;
        <Icon type="close" onClick={() => removeItem(active)} /> &nbsp;
      </div>
      <div ref={drop} className={ComClassName}>
        {React.createElement(component.ViewEditor, props)}
      </div>
    </div>
  )
}

export const EmptyContainer = () => {
  return (
    <div className={'emptyContainer'}>请插入内容</div>
  )
}

