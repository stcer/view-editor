import 'antd/dist/antd.css'
import { message } from 'antd'
import React from 'react'
import './App.css'
import components from './config'
import initData from './config/data'

import Editor from './editor'
import { resetData } from './store'

const CacheData = {
  cacheKey: '_je_data',
  load () {
    const cacheData = localStorage.getItem(this.cacheKey)
    if (!cacheData) {
      return false
    }
    return JSON.parse(cacheData)
  },
  set (data) {
    return localStorage.setItem(this.cacheKey, JSON.stringify(data))
  }
}

function App () {
  let cacheData = CacheData.load()
  if (!cacheData) {
    cacheData = initData
  }

  const onSave = (data) => {
    console.log('DATA:SAVE', data)
    message.info('保存成功')
    return CacheData.set(data)
  }

  const onClear = () => {
    if(window.confirm('确认清空操作?')) {
      resetData([{id:1, type:'div', props : {}}])
    }
  }

  const onReset = () => {
    if(window.confirm('确认操作?')) {
      resetData(initData)
    }
  }

  return (
    <div className="App">
      <Editor
        components={components}
        initData={cacheData}
        onSave={onSave}
        onClear={onClear}
        onReset={onReset}
      />
    </div>
  )
}

export default App
