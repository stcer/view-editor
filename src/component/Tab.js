import { Tabs, Form, Input } from 'antd'
import React from 'react'
import { fixArrayLength, fixNumberRange } from '../inc'

const { TabPane } = Tabs
let SelCol = 0

export const ViewEditor = ({ panes, style, child, renderChild }) => {
  return (
    <Tabs
      defaultActiveKey="1"
      onChange={
        (key) => {
          SelCol = panes.findIndex((item) => item.key == key)
          if(SelCol === -1) {
            SelCol = 0;
          }
        }
      }>
      {panes.map((item, index) =>
        <TabPane tab={item.title} key={item.key}>
          {renderChild(child[index])}
        </TabPane>
      )}
    </Tabs>
  )
}

export const PropEditor = ({ data, saveProp }) => {
  const {props} = data;
  const {panes} = props;
  const setTabN = (n) => {
    saveProp({
      panes: fixArrayLength(panes, fixNumberRange(n, 1, 5), (i) => {
        return {title: ('Tab ' + (i + 1)), 'key': i + 1}
      })
    })
  }
  return (
    <Form>
      <Form.Item label="Tab数">
        <Input
          onChange={(e) => setTabN(e.target.value)}
          value={panes.length}
        />
      </Form.Item>
    </Form>
  )
}

export const icon = 'plus-circle'
export const TYPE = 'tab'
export const name = 'tab标签'
export const isContainer = false

export const appendChild = (selfData, child) => {
  selfData.props.child[SelCol].push(child)
}

export const create = (props) => {
  return {
    props: {
      panes: [
        {'title':  'Tab 1', 'key': 1},
        {'title':  'Tab 2', 'key': 2},
        {'title':  'Tab 3', 'key': 3},
      ],
      child: [
        [],
        [],
        [],
        [],
        []
      ]
    }
  }
}
