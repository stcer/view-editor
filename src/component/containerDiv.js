import { Form, Input } from 'antd'
import React from 'react'

export const ViewEditor = ({ value, style, child, renderNodes }) => {
  return (
    <div style={{ ...style }}>{value}{renderNodes(child || [])}</div>
  )
}

export const PropEditor = ({ data, saveProp }) => {
  const { props } = data
  return (
    <Form>
      <Form.Item label="富文本内容">
        <Input
          onChange={(e) => saveProp({value: e.target.value})}
         value={props.value} />
      </Form.Item>
    </Form>
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
