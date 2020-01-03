import { Form, Input, Button } from 'antd'
import React from 'react'
import JSelect from './JSelect'

export const TYPE = 'j-button'
export const icon = 'plus-circle'
export const name = '按钮'

export const create = (props) => {
  return {
    props: {
      title: '按钮',
      src: 'http://www.jc001.cn',
      type: 'primary',
      ...props,
    },
  }
}

/**
 *  ViewEditor
 * @constructor
 */
export const ViewEditor = ({ type, src, title, style }) => {
  let value = ''
  if(src) {
    value = <a href={src}>{title}</a>
  } else {
    value = title;
  }
  return (
    <Button type={type} style={style}>{value}</Button>
  )
}

const types = ['primary', 'dashed', 'Default', 'danger', 'link']

export const PropEditor = ({ data, type, saveProp }) => {
  const {props} = data;
  return (
    <Form>
      <Form.Item label="title">
        <Input
          onChange={ (e) => saveProp({title:e.target.value}) }
          value={props.title}
        />
      </Form.Item>
      <Form.Item label="src">
        <Input
          onChange={(e) => saveProp({src:e.target.value}) }
          value={props.src}
        />
      </Form.Item>
      <Form.Item label="type">
        <JSelect
          options={types}
          defValue={type}
          onChange={(e) => saveProp({type: e})} />
      </Form.Item>
    </Form>
  )
}
