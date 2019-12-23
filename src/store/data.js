import { Store } from 'laco'
import { makeStore } from '../inc'

const data = [
  {
    'id': 1,
    'type': 'div',
    'props': {
      'value': 'this is a demo div',
      'title': 'div容器的标题',
      'style': {
        'width': '100%',
        'padding': '4px',
        'background': '#f7f7f7',
        'border': '2px solid #fff'
      }
    },
    'child': [
      {
        'id': 2,
        'type': 'h1',
        'props': {
          'value': 'This is a my title',
          'style': {
            'className': 'top-title'
          }
        }
      },

      {
        'id': 4,
        'type': 'div',
        'props': {
          'value': 'this is a demo div2',
          'title': 'div容器的标题',
          'style': {
            'width': '100%',
            'padding': '14px',
            'background': '#f7f7f7',
            'border': '1px solid #fff'
          }
        },
        'child': [
          {
            'id': 5,
            'type': 'h1',
            'props': {
              'value': 'This is a my title2',
              'style': {
                'className': 'top-title'
              }
            }
          },
        ]
      },
    ]
  },

  {
    'id': 3,
    'type': 'h1',
    'props': {
      'value': 'This is a my title',
      'style': {
        'className': 'top-title'
      }
    }
  },
]

let maxId = 0
const initMaxId = (reload) => {
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
initMaxId()

const getNextId = () => {
  return ++maxId
}

const store = new Store({data})
export const useDataStore = makeStore(store)

/**
 *
 * @param item
 * @param parent
 */
export const saveItem = (item, parent) => {
  store.set((state) => {
    const replaceItem = (items, index) => {
      items.forEach((com, index) => {
        if(com.id === item.id) {
          items[index] = item;
        } else if(com.child) {
          replaceItem(com.child, index)
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
    const parent = activeComponent ? activeComponent : state.data
    if(!parent.child) {
      parent.child = []
    }
    parent.child.push(item)
    return saveItem(parent)
  })
}

