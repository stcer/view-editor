import { Form, Input } from 'antd'
import React from 'react'

export const ViewEditor = ({value, props, style}) => {
  return (
    <h1 style={{...style}}>{value}</h1>
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
        <Form.Item label="文本" {...formItemLayout}>
          <Input onChange={handleChange} placeholder="Basic usage" value={props.value} />
        </Form.Item>
      </Form>
    </div>
  )
}

export const ICON = 'info-circle';
export const TYPE = 'h1';
export const NAME = 'H1';
export const DefProps = {
  value : 'this is a demo h1'
};
export const IsContainer = false;
