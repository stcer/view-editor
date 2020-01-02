import { Button, Modal, Input } from 'antd'
import React, { useState } from 'react'
import { useActiveContext } from '../inc'

const { TextArea } = Input;

export default function ToolBar ({ history, onSave, onClear, onReset, data }) {
  const { setActive } = useActiveContext()
  const [visible, setVisible] = useState(false)
  const dataString = JSON.stringify(data, null, 2)
  return (
    <div className={'je-toolBar'}>
      <Button type="primary" shape="circle" icon="undo" onClick={e => history.undo()} /> &nbsp;
      <Button type="primary" shape="circle" icon="redo" onClick={e => history.redo()} /> &nbsp;&nbsp;
      <Button type="danger" onClick={onClear}>清空</Button> &nbsp;
      <Button onClick={onReset}>还原</Button> &nbsp;
      <Button onClick={onSave}>暂存</Button> &nbsp;
      <Button onClick={e => setActive(null)}>清除选择</Button> &nbsp;

      <Button onClick={e => setVisible(true)}>查看JSON</Button> &nbsp;
      <Modal
        title="JSON Data"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <TextArea rows={20} value={dataString} />
      </Modal>
    </div>
  )
}
