import { Store } from 'laco'
import { useStore } from 'laco-react'
import { useState, useEffect } from 'react'

let maxId = 0
const initMaxId = (data) => {
  traversal(data, (item) => {
    if (item.id > maxId) {
      maxId = item.id
    }
  })
  console.log("DATA:MaxId:", maxId)
}

export const traversal = (data, callback) => {
  const cursor = (items) => {
    items.forEach((item, index) => {
      if(item instanceof Array) {
        cursor(item)
      } else {
        callback(item, items, index)
        if (item.props.child) {
          cursor(item.props.child)
        }
      }
    })
  }
  cursor(data, callback)
}

export const getNextId = () => {
  return ++maxId
}

let store = new Store({ data: [] })
const historyStore = {
  index: -1,
  data: []
}

/**
 * 数据
 * @param initData
 * @returns {{data: any, history: {add: history.add, undo: history.undo, redo: history.redo}}}
 */
export const useData = (initData) => {
  const { data } = useStore(store)
  const [isInit, setInit] = useState(false)
  useEffect(() => {
    if (isInit && !initData) {
      return
    }
    setInit(true)
    resetData(initData)
  }, [initData])
  return {data, history}
}

/**
 * @param item
 */
export const saveItem = (item) => {
  store.set((state) => {
    history.add(state.data)
    traversal(state.data, (node, parent, index) => {
      if (node.id === item.id) {
        parent[index] = item
      }
    })
    return { ...state }
  })
}

export const addTopItem = (item) => {
  store.set((state) => {
    history.add(state.data)
    state.data.push(item)
    return { ...state }
  })
}

const findParent = (data, item) => {
  let itemParent, itemIndex
  traversal(data, (node, parent, index) => {
    if (node.id === item.id) {
      itemParent = parent;
      itemIndex = index;
    }
  })
  return [itemParent, itemIndex]
}

export const moveUp = (item) => {
  store.set((state) => {
    const [itemParent, itemIndex] = findParent(state.data, item)
    if(!itemParent || itemIndex === 0) {
      return state;
    }
    const targetIndex = itemIndex - 1;
    itemParent[itemIndex] = itemParent[targetIndex]
    itemParent[targetIndex] = item
    return { ...state }
  })
}

export const moveDown = (item) => {
  store.set((state) => {
    const [itemParent, itemIndex] = findParent(state.data, item)
    if(!itemParent || itemIndex === itemParent.length - 1) {
      return state;
    }

    const targetIndex = itemIndex + 1;
    itemParent[itemIndex] = itemParent[targetIndex]
    itemParent[targetIndex] = item
    return { ...state }
  })
}

export const removeItem = (item) => {
  store.set((state) => {
    history.add(state.data)
    const [parent, index] = findParent(state.data, item)
    if(!parent) {
      return state;
    }
    parent.splice(index, 1); // 删除元素
    return { ...state }
  })
}

export const resetData = (data) => {
  initMaxId(data)
  store.set(() => {
    return { data }
  })
}

export const history = {
  add : (data) => {
    if(historyStore.index === -1) {
      historyStore.data = []
    } else if(historyStore.index !== historyStore.data.length - 1) {
      historyStore.data = historyStore.data.slice(0, historyStore.index)
    }

    historyStore.index = historyStore.data.length
    historyStore.data.push([...data]);
    console.log('H:add:', historyStore);
  },

  undo : () => {
    console.log('H:undo:', historyStore);
    if (historyStore.index < 0){
      return;
    }

    const data = historyStore.data[historyStore.index--];
    resetData(data)
  },

  redo : () => {
    console.log('H:redo:', historyStore);
    if (historyStore.index >= historyStore.data.length - 1){
      return;
    }
    const data = historyStore.data[++historyStore.index];
    resetData(data)
  }
}
