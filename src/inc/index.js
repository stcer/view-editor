import React, { useContext, useState } from 'react'
import { useDrop } from 'react-dnd'
import { saveItem, addTopItem, getNextId, removeItem } from '../store'

export * from './dom-tool'
export * from './tool'

export const ComponentsContext = React.createContext({
  components: [],
  map: (item, index) => {},
  findComponentByType: (type) => {},
  addChild: (parent, newItem) => {},
  addChildFromProps: (parent, type, props) => {},
  addChildFromComponent: (parent, component, props) => {},
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

  return {
    map,
    components,
    findComponentByType,
    addChild,
    addChildFromProps,
    addChildFromComponent
  }
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

export const DNDItem = {
  type: 'comBox'
}

export const useComponentDrop = (item) => {
  const { addChild, addChildFromComponent } = useComponentContext()
  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: DNDItem.type,
    drop (dragInfo, monitor) {
      const { item: target } = dragInfo
      const didDrop = monitor.didDrop()
      if (didDrop) {
        return
      }

      console.log('DROP', target, 'to', item)


      if(target.id && item.id !== target.id) {
        removeItem(target)
        addChild(item, target)
      } else if(target.component) {
        addChildFromComponent(item, target.component)
      }
    },

    collect: monitor => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    })
  })
  return [{isOver, isOverCurrent}, drop];
}
