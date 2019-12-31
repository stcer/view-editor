import React, { useContext, useState } from 'react'

export * from './dom-tool'
export * from './tool'

export const ComponentsContext = React.createContext({
  components: [],
  map : (item, index) => {},
  findComponentByType: (type) => {},
});


export const useComponentsContextValue = (components) => {
  const map = (callback) => {
    return components.forEach((item, index) => {
      item.child.forEach(callback)
    })
  }

  const componentRow = [];
  map((item) => componentRow.push(item))
  const findComponentByType = (type) => {
    return componentRow.find((item) => item.TYPE === type)
  }

  return {
    map, findComponentByType, components
  }
}

export const useComponentContext = () => {
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

export const useActiveContext = () => {
  return useContext(ActiveComponentContext)
}

export const useActiveContextValue = () => {
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

export const useDataContext = () => {
  return useContext(DataContext)
}
