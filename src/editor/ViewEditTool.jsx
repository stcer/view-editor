import { Icon } from 'antd'
import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import { DNDItem, useComponentContext } from '../inc'
import { moveUp, moveDown, removeItem, traversal, getNextId } from '../store'
import ShowCode from './ShowCode'

let Clipboard = null;
let isCopy = false;

export default function ViewEditTool({item, active}) {
  const { addChildFromComponent, changeParent, findComponentByType } = useComponentContext()
  const isActive = active && item.id === active.id
  const topBarStyle = {
    padding: '3px 10px',
    backgroundColor: '#999',
    display: isActive ? 'inline-block' : 'none',
    color: '#fff',
  }

  // 使用 useDrag
  const [, drag] = useDrag({
    item: { item, type: DNDItem.type },
  })

  const handleScissor = () => {
    Clipboard = item;
    isCopy = false;
  }

  const handleCopy = () => {
    const data = [JSON.parse(JSON.stringify(item))]
    traversal(data, (item, parent, index) => {
      if(item.id) {
        item.id = getNextId();
        parent[index] = item;
      }
    })
    Clipboard = data[0];
    isCopy = true;
  }

  const handlePaste = () => {
    if(!Clipboard) {
      return;
    }
    if(!isCopy) {
      changeParent(active, Clipboard)
    } else {
      const component = findComponentByType(Clipboard.type)
      addChildFromComponent(active, component, Clipboard.props)
    }
    Clipboard = null;
  }

  const handleDelete = () => {
    if(window.confirm('Delete ?')) {
      removeItem(active)
    }
  }


  const visibleState = useState(false)
  const [, setVisible] = visibleState

  const menus = [
    {title: 'up', type: 'caret-up',  onClick: () => moveUp(active)},
    {title: 'down', type: 'caret-down',  onClick: () => moveDown(active)},
    {title: 'JSON data', type: 'code',  onClick: () => setVisible(true)},
    {title: 'copy', type: 'copy',  onClick: handleCopy},
    {title: '剪切', type: 'scissor',  onClick: handleScissor},
  ]

  const com = findComponentByType(item.type);
  if(com && com.appendChild) {
    menus.push({title: '粘贴', type: 'snippets',  onClick: handlePaste})
  }

  menus.push({title: '删除', type: 'delete',  onClick: handleDelete })

  return (
    <div style={topBarStyle}>
      {menus.map((options, index) =>
        <React.Fragment key={index}>
          <Icon {...options} /> &nbsp;
        </React.Fragment>
      )}
      <div ref={drag}  style={{display: 'inline-block'}}>
        <Icon type="arrows-alt" />
      </div>

      <ShowCode data={item} visibleState={visibleState} />
    </div>
  )
}
