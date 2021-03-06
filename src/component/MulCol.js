import { Row, Col, Form, Input, Tag } from 'antd'
import React, { useState } from 'react'
import { fixArrayLength, fixNumberRange } from '../inc'

export const icon = 'plus-circle'
export const TYPE = 'mul-col-2'
export const name = '二列布局'
export const isContainer = false

export const appendChild = (selfData, child) => {
  if (!selfData.props.child) {
    selfData.props.child = []
  }

  if (!selfData.props.child[SelCol]) {
    selfData.props.child[SelCol] = [];
  }
  selfData.props.child[SelCol].push(child)
}

export const create = (props) => {
  return {
    'props': {
      cols: [
        { width: 12 },
        { width: 12 },
      ],
      child: [
        [],
        [],
      ],
      ...props
    }
  }
}

let SelCol = 0

export const ViewEditor = ({ cols, style, child, renderChild, saveProp }) => {
  const [active, setActive] = useState(SelCol)
  const setActiveCol = (index) => {
    SelCol = index
    setActive(index)
    saveProp({index})
  }
  return (
    <Row style={style}>
      {cols.map((col, index) =>
        <Col span={col.width} key={index}>
          <div
            className={active === index ? 'je-col-active' : ''}
            onClick={() => setActiveCol(index)}
          >
            {renderChild(child[index])}
          </div>
        </Col>
      )}
    </Row>
  )
}

export const PropEditor = ({ data, saveProp }) => {
  const { props } = data
  const { cols } = props
  const argvWidth = 24 / cols.length

  const setWidth = (target, width) => {
    cols[target].width = fixNumberRange(width, 1, 23)
    saveProp({ cols })
  }

  const setColN = (n) => {
    saveProp({
      cols: fixArrayLength(cols, fixNumberRange(n, 1, 5), { width: argvWidth }),
    })
  }

  return (
    <Form>
      <Form.Item label="列数">
        <Input
          onChange={(e) => setColN(e.target.value)}
          value={props.cols.length} />
      </Form.Item>
      <Form.Item label="活动列">
        {cols.map((col, index) =>
          <Tag key={index} color={SelCol === index ? 'green' : ''}>{index + 1}</Tag>
        )}
      </Form.Item>
      <Row>
        {cols.map((col, index) =>
          <Col key={index} span={argvWidth}>
            <Form.Item label="列宽">
              <Input
                onChange={(e) => setWidth(index, e.target.value)}
                value={col.width} />
            </Form.Item>
          </Col>
        )}
      </Row>
    </Form>
  )
}

