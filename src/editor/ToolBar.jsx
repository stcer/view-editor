import { Button } from 'antd'
import React from 'react'
import { useActiveContext } from '../inc'

export default function ToolBar ({history}) {
  const {setActive} = useActiveContext()
  return (
    <div className={"toolBar"}>
      <Button type="primary" shape="circle" icon="undo" onClick={e => history.undo()} /> &nbsp;
      <Button type="primary" shape="circle" icon="redo" onClick={e => history.redo()} /> &nbsp;
      <Button shape="circle" icon="close" onClick={e => setActive(null)} />
    </div>
  )
}
