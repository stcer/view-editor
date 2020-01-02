import { Col, Row, Form, Input } from 'antd'
import React from 'react'

export const TYPE = 'PromotionImg'
export const icon = 'plus-circle'
export const name = '我的推广码'

export const create = (props) => {
  return {
    props: {
      title: '我的推广码',
      desc: '点击识别小程序码获取更多不一样',
      src: 'http://static-card.jiuzheng.com//image/admin/workbench/qrcw01.png',
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
export const ViewEditor = ({ src, desc, title, style }) => {
  return (
    <Row align={"middle"} type={'flex'}>
      <Col span={8}><img src={src} alt={title} style={style}/></Col>
      <Col span={16}>{desc}</Col>
    </Row>
  )
}

export const PropEditor = ({ data, saveProp }) => {
  const {props} = data;
  return (
    <Form>
      <Form.Item label="描述文字">
        <Input
          onChange={(e) => saveProp({desc:e.target.value}) }
          value={props.desc}
        />
      </Form.Item>
    </Form>
  )
}
