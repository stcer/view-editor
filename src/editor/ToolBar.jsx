import { Button } from 'antd'
import React, { useState } from 'react'
import { useActiveContext } from '../inc'
import ShowCode from './ShowCode'

export default function ToolBar ({ history, onSave, onClear, onReset, data }) {
  const { setActive } = useActiveContext()
  const visibleState = useState(false)
  const [, setVisible] = visibleState
  return (
    <div className={'je-toolBar'}>
      <Button type="primary" shape="circle" icon="undo" onClick={e => history.undo()} /> &nbsp;
      <Button type="primary" shape="circle" icon="redo" onClick={e => history.redo()} /> &nbsp;&nbsp;
      <Button type="danger" onClick={onClear}>清空</Button> &nbsp;
      <Button onClick={onReset}>还原</Button> &nbsp;
      <Button onClick={onSave}>暂存</Button> &nbsp;
      <Button onClick={e => setActive(null)}>清除选择</Button> &nbsp;

      <Button onClick={e => setVisible(true)}>查看JSON</Button> &nbsp;
      <ShowCode data={data} visibleState={visibleState} />
    </div>
  )
}
