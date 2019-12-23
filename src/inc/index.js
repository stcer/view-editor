import { useStore } from 'laco-react'
export * from './dom-tool'

export const makeStore = function(defStore) {
  return (store = defStore, normalizer) => {
    return useStore(store)
  }
};
