import React from 'react'

export default function ViewEditLayer ({isShow, position, activeCom}) {
  return (
    <div className="edit_layer" style={{
      zIndex: (isShow ? 1000 : -10),
      display: (isShow ? 'block' : 'none'),
      ...position
    }}>
      <div color="#f50" style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '3px 10px',
        backgroundColor: '#999',
        color: '#fff'
      }}>{activeCom ? activeCom.title : ''}</div>
    </div>
  )
}
