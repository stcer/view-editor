import 'antd/dist/antd.css'
import React from 'react'
import './App.css'
import components from './config'
import initData from './config/data'

import Editor from './editor'

function App() {
  return (
    <div className="App">
      <Editor components={components} initData={initData} />
    </div>
  );
}

export default App;
