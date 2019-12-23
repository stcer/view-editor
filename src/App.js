import React from 'react';
import { initComponents } from './component'
import {Editor} from './editor'
import './App.css';
import components, { useDataStore, saveItem } from './config'
import 'antd/dist/antd.css'

function App() {
  const Components = initComponents(components);
  const { data } = useDataStore()
  return (
    <div className="App">
      <Editor components={Components} data={data} saveItem={saveItem} />
    </div>
  );
}

export default App;
