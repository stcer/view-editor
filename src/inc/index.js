import React, { useContext } from 'react'

export * from './dom-tool'

export const ComponentsContext = React.createContext({
  components: [],
  map : (item, index) => {},
  findComponentByType: (type) => {},
});

export const DataContext = React.createContext({
  data: [],
  active: [],
  saveItem: (item) => {},
  addItem: (item, activeComponent) => {},
  resetData: (data) => {},
})

export const ActiveComponentContext = React.createContext({
  active: null,
  setActive: (item) => {}
})

export const useComponents = () => {
  return useContext(ComponentsContext)
}

export const useData = () => {
  return useContext(DataContext)
}

export const useActiveComponent = () => {
  return useContext(ActiveComponentContext)
}
