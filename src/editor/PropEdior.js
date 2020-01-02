import { Tabs } from 'antd'
import React from 'react'
import { useComponentContext, useActiveContext } from '../inc'
import { saveItem } from '../store'
import StyleEditor from './StyleEditor'

const { TabPane } = Tabs

const PropEditor = function () {
  const {active} = useActiveContext();
  const {findComponentByType} = useComponentContext();
  const element = []

  const saveProp = (value) => {
    active.props = { ...active.props, ...value }
    saveItem(active)
  }

  if(active) {
    const component = findComponentByType(active.type)
    if(component.PropEditor) {
      element.push({
        title: '属性编辑',
        el: React.createElement(component.PropEditor, {
          key: 'props',
          data : active,
          saveHandle: saveItem,
          saveProp
        }, [])
      })
    }
    element.push({
      title : '样式编辑',
      el: <StyleEditor key={"style"} active={active} onChange={(style) => {
        active.props.style = style;
        saveItem(active)
      }
      }/>
    })
  }

  return (
    <div className={'je-prop-editor'}>
      {element &&
      <Tabs defaultActiveKey="0">
        {element.map((item, index) =>
          <TabPane tab={item.title} key={index}>
            {item.el}
          </TabPane>
        )}
      </Tabs>
      }
    </div>
  )
}

export default PropEditor
