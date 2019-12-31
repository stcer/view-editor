import React from 'react'

export const ViewEditor = ({ value, style, child, childRender }) => {
  return (
    <div style={{ ...style }}>
      {childRender(child)}
    </div>
  )
}

export const PropEditor = ({ data, saveProp }) => {
  return (
    <span />
  )
}

export const create = (props) => {
  return {
    props: {
      value: 'this is a demo div',
      ...props,
      child : []
    },
  }
}

export const appendChild = (selfData, child) => {
  selfData.props.child.push(child)
}

export const TYPE = 'div'
export const icon = 'plus-circle'
export const name = 'div容器'
export const isContainer = true
