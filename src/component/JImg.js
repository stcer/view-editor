import { Form, Input } from 'antd'
import React from 'react'

export const TYPE = 'JImg'
export const icon = 'plus-circle'
export const name = '图片'

export const create = (props) => {
  return {
    props: {
      title: '图像说明',
      src: 'http://static-card.jiuzheng.com/image/admin/workbench/imgw.png',
      style: {
        maxWidth: '100%'
      },
      ...props,
    },
  }
}

/**
 *  ViewEditor
 * @constructor
 */
export const ViewEditor = ({ src, title, style }) => {
  return (
    <img src={src} alt={title} style={style}/>
  )
}

export const PropEditor = ({ data, saveProp }) => {
  const {props} = data;
  return (
    <Form>
      <Form.Item label="图像说明">
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
    </Form>
  )
}
