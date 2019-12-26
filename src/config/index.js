
import {ContainerDiv, containerH1, RowCol2, RowCol3, Tab} from "../component/index"

export default [
  {
    groupName : '容器',
    child: [
      {
        ...ContainerDiv,
        name : '一列布局',
      },

      RowCol2,
      RowCol3,
      Tab
    ]
  }, {
    groupName : '文本内容',
    child : [
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

      {
        ...containerH1,
        TYPE: 'H3',
        name: 'H3',
        props: {
          label: 'h3',
          value : 'this is a tag h3 demo value'
        }
      },

      {
        ...containerH1,
        TYPE: 'p',
        name: '段落',
        props: {
          label: 'p',
          value : '默认的段落内容'
        }
      },
    ]
  }
]
