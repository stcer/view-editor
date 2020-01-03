import { Select } from 'antd'
import React from 'react'
const { Option } = Select

const JSelect = ({options, defValue, onChange}) => {
  return (
    <Select defaultValue={defValue} onChange={onChange}>
      {options.map((value, index) => <Option key={index} value={value}>{value}</Option>)}
    </Select>
  )
}

export default JSelect
