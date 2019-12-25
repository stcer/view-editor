
import {ContainerDiv, containerH1, Row2Col} from "../component/index"

export default [
  {
    ...ContainerDiv,
    name : 'div容器1',
  },

  containerH1,

  {
    ...containerH1,
    TYPE: 'H2',
    name: 'H2',
    props: {
      label: 'h2',
      value : 'this is a tag h2 demo value'
    }
  },

  Row2Col
]
