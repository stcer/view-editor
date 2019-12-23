import { Form, Input } from 'antd'
import React from 'react'

export const ViewEditor = ({ value, style, children }) => {
  return (
    <div style={{ ...style }}>{value}{children}</div>
  )
}

export const PropEditor = ({data, save}) => {
  const handleChange = (e) => {
    console.log(e.target.value)
    data.props = {...data.props, value: e.target.value}
    save(data)
  }

  const {props} = data
  const formItemLayout = null;
  return (
    <div>
      <Form>
        <Form.Item label="富文本内容" {...formItemLayout}>
          <Input onChange={handleChange} placeholder="Basic usage" value={props.value} />
        </Form.Item>
      </Form>
    </div>
  )
}

export const TYPE = 'div'
export const NAME = 'div容器'
export const DefProps = {
  value : 'this is a demo div'
};
