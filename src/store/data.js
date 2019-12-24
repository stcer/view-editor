import { Store } from 'laco'
import { useStore } from 'laco-react'
import { useState, useEffect } from 'react'

let maxId = 0
const initMaxId = (data) => {
  const findMaxId = (data) => {
    data.forEach((item) => {
      if (item.id > maxId) {
        maxId = item.id
      }
      if (item.child) {
        findMaxId(item.child)
      }
    })
  }
  findMaxId(data)
}

const getNextId = () => {
  return ++maxId
}

let store = new Store({data: []})

/**
 * json数据
 * @param initData
 * @returns {any}
 */
export const useData = (initData) => {
  const {data} = useStore(store);
  const [isInit, setInit] = useState(false)
  useEffect(() => {
    if(isInit && !initData) {
      return
    }
    setInit(true);
    resetData(initData)
  }, [initData])
  return data;
}


/**
 * @param item
 */
export const saveItem = (item) => {
  store.set((state) => {
    const replaceItem = (items) => {
      items.forEach((com, index) => {
        if(com.id === item.id) {
          items[index] = item;
        } else if(com.child) {
          replaceItem(com.child)
        }
      })
    }

    replaceItem(state.data)
    return { ...state }
  })
}

export const addItem = (item, activeComponent) => {
  store.set((state) => {
    item.id = getNextId()
    if(activeComponent) {
      if(!activeComponent.child) {
        activeComponent.child = []
      }
      activeComponent.child.push(item)
      saveItem(activeComponent)
    } else {
      state.data.push(item)
      return { ...state }
    }
  })
}

export const resetData = (data) => {
  initMaxId(data)
  store.set(() => {
    return {data};
  });
}
