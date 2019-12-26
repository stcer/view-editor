import { Row, Col, Form, Input } from 'antd'
import React from 'react'

let SelCol = null;

export const ViewEditor = ({ col1, col2, col3, style, child, renderNodes }) => {
  return (
    <Row style={style}>
      <Col span={col1.width}>
        <div onClick={() => SelCol = 1}>
          {col1.value}
          {renderNodes(child[0])}
        </div>
      </Col>
      <Col span={col2.width}>
        <div onClick={() => SelCol = 2}>
          {col2.value}
          {renderNodes(child[1])}
        </div>
      </Col>
      <Col span={col3.width}>
        <div onClick={() => SelCol = 3}>
          {col3.value}
          {renderNodes(child[2])}
        </div>
      </Col>
    </Row>
  )
}

export const PropEditor = ({data, saveProp}) => {
  const {props} = data
  const {col1, col2, col3} = props
  const setWidth = (target, width) => {
    if(width > 22) {
      width = 22;
    }
    saveProp({[target]: {...props[target], width}})
  }
  return (
    <Form>
      <Row>
        <Col span={8}>
          <Form.Item label="列宽">
            <Input
              onChange={(e) => setWidth('col1', e.target.value)}
              value={col1.width} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="列宽">
            <Input
              onChange={(e) => setWidth('col2', e.target.value)}
              value={col2.width} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="列宽">
            <Input
              onChange={(e) => setWidth('col3', e.target.value)}
              value={col3.width} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export const icon = 'plus-circle'
export const TYPE = 'div-col-3'
export const name = '三列布局'
export const isContainer = false;

export const appendChild = (selfData, child) => {
  selfData.props.child[SelCol - 1].push(child)
}

export const create = (props) => {
  return {
    'props': {
      col1 : {
        width: 8,
        value: 'col1-value',
      },
      col2 : {
        width: 8,
        value: 'col2-value',
      },
      col3 : {
        width: 8,
        value: 'col3-value',
      },
      child: [
        [],
        [],
        [],
      ]
    }
  }
}
