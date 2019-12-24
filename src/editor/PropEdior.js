import React from 'react'
import { useComponents, useActiveComponent } from '../inc'
import { saveItem } from '../store'

const PropEditor = function () {
  const {active} = useActiveComponent();
  const {findComponentByType} = useComponents();
  const component = active ? findComponentByType(active.type) : null

  return (
    <div className={'propEditor'}>
      <h2>属性编辑</h2>
      {component
        ? React.createElement(component.PropEditor, {
          data : active,
          save: saveItem
        }, [])
        : ''
      }
    </div>
  )
}

export default PropEditor
