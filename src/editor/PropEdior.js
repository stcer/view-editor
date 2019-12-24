import React from 'react'
import { useComponentContext, useActiveContext } from '../inc'
import { saveItem } from '../store'
import StyleEditor from './StyleEditor'

const PropEditor = function () {
  const {active} = useActiveContext();
  const {findComponentByType} = useComponentContext();
  const element = []

  if(active) {
    const component = findComponentByType(active.type)
    element.push(React.createElement(component.PropEditor, {
      key: 'props',
      data : active,
      save: saveItem
    }, []))
    element.push(<StyleEditor key={"style"} active={active} onChange={(style) => {
      active.props.style = style;
      saveItem(active)
    }
    }/>)
  }

  return (
    <div className={'propEditor'}>
      <h3>属性编辑</h3>
      {element.map((el) => el)}
    </div>
  )
}

export default PropEditor
