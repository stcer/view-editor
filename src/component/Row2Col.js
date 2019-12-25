import { Row, Col } from 'antd';
import React from 'react'

let SelCol = null;

export const ViewEditor = ({ col1, col2, style, children, renders }) => {
  return (
    <Row style={style}>
      <Col span={col1.width}>
        <div onClick={() => SelCol = 1}>
          {col1.value}
        </div>
        {renders(col1.child)}
      </Col>
      <Col span={col2.width}>
        <div onClick={() => SelCol = 2}>
          {col2.value}
        </div>
        {renders(col2.child)}
      </Col>
    </Row>
  )
}

export const PropEditor = ({data, save}) => {
  return (
    <div>tmp div-col-2</div>
  )
}

export const icon = 'plus-circle'
export const TYPE = 'div-col-2'
export const name = 'div-col-2'
export const isContainer = false;

export const appendChild = (selfData, child) => {
  selfData.props['col' + SelCol].child.push(child)
}

export const create = (props) => {
  return {
    'props': {
      col1 : {
        width: 12,
        value: 'col1-value',
        child: []
      },
      col2 : {
        width: 12,
        value: 'col1-value',
        child: []
      },
    }
  }
}
