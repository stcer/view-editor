import React, { useContext } from 'react'
import { saveItem, addTopItem, getNextId, removeItem } from '../store'

export const ComponentsContext = React.createContext({
  components: [],
  map: (item, index) => {},
  findComponentByType: (type) => {},
  addChild: (parent, newItem) => {},
  addChildFromProps: (parent, type, props) => {},
  addChildFromComponent: (parent, component, props) => {},
  changeParent: (parent, component) => {},
})

export const useComponentContext = () => {
  return useContext(ComponentsContext)
}

export const useComponentsContextValue = (components) => {
  const map = (callback) => {
    return components.forEach((item, index) => {
      item.child.forEach(callback)
    })
  }

  const componentRow = []
  map((item) => componentRow.push(item))

  /**
   * @param type
   * @returns {*}
   */
  const findComponentByType = (type) => {
    return componentRow.find((item) => item.TYPE === type)
  }

  /**
   * 向容器增加新组件
   * @param parentData
   * @param newComponentData
   */
  const addChild = (parentData, newComponentData) => {

    if (parentData) {
      const parentComDefine = findComponentByType(parentData.type)
      if(parentComDefine.appendChild) {
        parentComDefine.appendChild(parentData, newComponentData)
        saveItem(parentData)
      }
    } else {
      addTopItem(newComponentData)
    }
  }

  const addChildFromComponent = (parentData, componentDefine, props) => {
    const newComponent = {
      ...componentDefine.create(Object.assign({}, componentDefine.props, props)),
      type: componentDefine.TYPE,
      id: getNextId()
    }
    return addChild(parentData, newComponent)
  }

  const addChildFromProps = (parentData, type, props) => {
    return addChildFromProps(parentData, findComponentByType(type), props)
  }

  const changeParent = (parentData, componentData) => {
    removeItem(componentData)
    addChild(parentData, componentData)
  }

  return {
    map,
    components,
    findComponentByType,
    addChild,
    addChildFromProps,
    addChildFromComponent,
    changeParent,
  }
}
