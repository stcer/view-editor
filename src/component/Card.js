import { Card, Form, Input } from 'antd'
import React from 'react'

export const TYPE = 'card'
export const icon = 'plus-circle'
export const name = '卡片'
export const isContainer = true

export const create = (props) => {
  return {
    props: {
      title: 'My Title',
      size: 'small',
      more: {title: 'more', path: '#none'},
      child : [],
      ...props,
    },
  }
}
export const appendChild = (selfData, child) => {
  if(!selfData.props.child){
    selfData.props.child = []
  }
  selfData.props.child.push(child)
}

/**
 *  ViewEditor
 * @constructor
 */
export const ViewEditor = ({ title, size, more, style, child, renderChild }) => {
  let ext = '';
  if (more) {
    ext = <a href={more.path}>{more.title}</a>
  }
  return (
    <Card size={size} title={title} extra={ext} style={{ ...style }}>
      {renderChild(child)}
    </Card>
  )
}

export const PropEditor = ({ data, saveProp }) => {
  const {props} = data;
  const {more} = props;
  const setMore = (key, value) => {
    more[key] = value
    saveProp({ more })
  }
  return (
    <Form>
      <Form.Item label="标题">
        <Input
          onChange={(e) => saveProp({title:e.target.value})}
          value={props.title}
        />
      </Form.Item>
      <Form.Item label="More 标题">
        <Input
          onChange={(e) => setMore('title', e.target.value)}
          value={more.title}
        />
      </Form.Item>
      <Form.Item label="More 地址">
        <Input
          onChange={(e) => setMore('path', e.target.value)}
          value={more.path}
        />
      </Form.Item>
    </Form>
  )
}
