import { Form, Input } from 'antd'
import React from 'react'

export const ViewEditor = ({ value, style }) => {
  return (
    <div style={{ ...style }}>
      {value}
    </div>
  )
}

export const PropEditor = ({ data, saveProp }) => {
  const { props } = data
  return (
    <Form>
      <Form.Item label="富文本内容">
        <Input
          onChange={(e) => saveProp({ value: e.target.value })}
          value={props.value} />
      </Form.Item>
    </Form>
  )
}

export const create = (props) => {
  return {
    props: {
      value: 'this is a demo rich text',
      ...props
    },
  }
}

export const TYPE = 'richText'
export const icon = 'info-circle'
export const name = '富文本'
export const isContainer = true
