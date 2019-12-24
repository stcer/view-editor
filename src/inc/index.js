import React, { useContext, useState } from 'react'

export * from './dom-tool'

export const ComponentsContext = React.createContext({
  components: [],
  map : (item, index) => {},
  findComponentByType: (type) => {},
});


export const useComponentsContextValue = (components) => {
  const map = (callback) => {
    return components.map(callback)
  }

  const findComponentByType = (type) => {
    return components.find((item) => item.TYPE === type)
  }

  return {
    map, findComponentByType, components
  }
}

export const useComponents = () => {
  return useContext(ComponentsContext)
}

/**
 * Active Component data
 * @type {React.Context<{setActive: ActiveComponentContext.setActive, active: null}>}
 */
export const ActiveComponentContext = React.createContext({
  active: null,
  setActive: (item) => {}
})

export const useActiveComponent = () => {
  return useContext(ActiveComponentContext)
}

export const useActiveComponentContextValue = () => {
  const [active, setActive] = useState(null);
  return {active, setActive}
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

export const useData = () => {
  return useContext(DataContext)
}
