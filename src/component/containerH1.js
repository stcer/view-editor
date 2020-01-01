import React from 'react'
import { Form, Input, Select } from 'antd'

const { Option } = Select

export const TYPE = 'h1'
export const icon = 'info-circle'
export const name = 'H1'
export const isContainer = false

export const ViewEditor = ({ value, label, style }) => {
  return (
    React.createElement(label || TYPE, { style }, [value])
  )
}

export const PropEditor = ({ data, saveProp }) => {
  const { props } = data
  const labels = ['h1', 'h2', 'h3', 'h4', 'h5', 'p']
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

const JSelect = ({options, defValue, onChange}) => {
  return (
    <Select defaultValue={defValue} onChange={onChange}>
      {options.map((value, index) => <Option key={index} value={value}>{value}</Option>)}
    </Select>
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
