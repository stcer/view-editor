
import * as ContainerDiv from './containerDiv.js'
import * as containerH1 from './containerH1.js'

export {
  ContainerDiv,
  containerH1,
}

export const initComponents = (components) => {
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
