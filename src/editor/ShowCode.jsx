import { Modal, Input } from 'antd'
import React from 'react'

const { TextArea } = Input;

export default function ({data, visibleState}) {
  const dataString = JSON.stringify(data, null, 2)
  const [visible, setVisible] = visibleState
  return (
    <Modal
      title="JSON Data"
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
    >
      <TextArea rows={20} value={dataString} />
    </Modal>
  )
}
