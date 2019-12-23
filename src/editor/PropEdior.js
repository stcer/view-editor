import React from 'react'

const PropEditor = function ({ component, data, saveHandle  }) {

  return (
    <div className={'propEditor'}>
      <h2>属性编辑</h2>
      {component
        ? React.createElement(component.PropEditor, {
          data : data,
          save: saveHandle
        }, [])
        : ''
      }
    </div>
  )
}

export default PropEditor
