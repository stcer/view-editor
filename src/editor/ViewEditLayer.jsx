import React from 'react'

export default function ViewEditLayer ({ isShow, position }) {
  return (
    <div className="je-edit-mask" style={{
      zIndex: (isShow ? 1000 : -10),
      display: (isShow ? 'block' : 'none'),
      ...position
    }}>
    </div>
  )
}
