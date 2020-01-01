import React, { useContext, useState } from 'react'

export * from './dom-tool'
export * from './tool'
export * from './use-dnd'
export * from './use-component-context'

/**
 * Active Component data
 * @type {React.Context<{setActive: ActiveComponentContext.setActive, active: null}>}
 */
export const ActiveComponentContext = React.createContext({
  active: null,
  setActive: (item) => {}
})

export const useActiveContext = () => {
  return useContext(ActiveComponentContext)
}

export const useActiveContextValue = () => {
  const [active, setActive] = useState(null)
  return { active, setActive }
}

/**
 *
 * @type {React.Context<{resetData: DataContext.resetData, saveItem: DataContext.saveItem, addItem: DataContext.addItem, data: [], active: []}>}
 */
export const DataContext = React.createContext({
  data: [],
  active: [],
  saveItem: (item) => {},
  addItem: (item, activeComponent) => {},
  resetData: (data) => {},
})

export const useDataContext = () => {
  return useContext(DataContext)
}
