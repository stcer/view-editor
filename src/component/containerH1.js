import { Form, Input } from 'antd'
import React from 'react'
import JSelect from './JSelect'

export const TYPE = 'h1'
export const icon = 'info-circle'
export const name = 'H1'
export const isContainer = false

export const ViewEditor = ({ value, label, style }) => {
  return (
    React.createElement(label || TYPE, { style }, [value])
  )
}

const labels = ['h1', 'h2', 'h3', 'h4', 'h5', 'p']
export const PropEditor = ({ data, saveProp }) => {
  const { props } = data
  const { label = TYPE } = data.props
  return (
    <Form>
      <Form.Item label="类型">
        <JSelect
          options={labels}
          defValue={label}
          onChange={(e) => saveProp({label: e})} />
      </Form.Item>
      <Form.Item label="文本">
        <Input
          onChange={(e) => saveProp({value: e.target.value})}
          value={props.value} />
      </Form.Item>
    </Form>
  )
}

export const create = (props) => {
  return {
    'props': {
      value: 'this is a demo h1',
      ...props
    }
  }
}
