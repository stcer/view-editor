import { Input, Button } from 'antd'
import React, { useState, useEffect } from 'react'

const { TextArea } = Input

const map2css = (mapObj) => {
  let buf = ''
  Object.keys(mapObj).forEach((key) => {
    buf += key + ':' + mapObj[key] + ';\n'
  })
  return buf
}

const css2Map = (cssTxt) => {
  const map = {}
  cssTxt
    .replace(/[\{\}\r\n\"]+/g, '')
    .split(';')
    .map((line) => {
      return line.split(':').map((t) => t.trim())
    })
    .filter((row) => row.length === 2)
    .map((row) => {
      const [key, value] = row
      return { [key]: value }
    })
    .forEach((value) => {
      Object.assign(map, value)
    })
  return map
}

function parseCssFile (res) {
  if (typeof res == 'string')
    return css2Map(res)
  if (typeof res == 'object')
    return map2css(res)
}

const useInput = (active) => {
  const [style, setStyle] = useState('')
  useEffect(() => {
    const styles = Object.assign({}, active.props.style)
    setStyle(parseCssFile(styles))
  }, [active])
  return [style, setStyle]
}

export default ({ active, onChange }) => {
  const [style, setStyle] = useInput(active)
  const handleSave = (e) => {
    onChange(parseCssFile(style))
  }

  return (
    <div>
      Style editor
      <TextArea
        rows={15}
        value={style}
        onChange={(e) => setStyle(e.target.value)} />
      <Button type="primary" onClick={handleSave}>Save</Button>
    </div>
  )
}
