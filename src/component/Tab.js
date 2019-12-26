import { Tabs } from 'antd'
import React from 'react'

const { TabPane } = Tabs;
let SelCol = null;

export const ViewEditor = ({ n, names, style, child, renderNodes }) => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  )
}

export const PropEditor = ({data, saveProp}) => {
  return (
    <div>Todo</div>
  )
}

export const icon = 'plus-circle'
export const TYPE = 'tab'
export const name = 'tab标签'
export const isContainer = false;

export const appendChild = (selfData, child) => {
  selfData.props.child[SelCol - 1].push(child)
}

export const create = (props) => {
  return {
    'props': {
      n: 3,
      names: [

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
