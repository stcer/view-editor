import {
  ContainerDiv,
  JH1,
  MulCol,
  RichText,
  Tab,
  Card,
  JVideo,
  WechatOfficialAccount,
  JImg,
  PromotionImg, JButton
} from '../component/index'

export default [
  {
    groupName: '布局容器',
    child: [
      {
        ...ContainerDiv,
        name: '一列布局',
      },

      MulCol,
      {
        ...MulCol,
        TYPE: 'mul-col-3',
        name: '三列布局',
        props: {
          cols: [
            { width: 8 },
            { width: 8 },
            { width: 8 },
          ],
          child: []
        }
      },
      Tab,
      Card
    ]
  }, {
    groupName: '内容组件',
    child: [
      JH1,

      {
        ...JH1,
        TYPE: 'h2',
        name: 'H2',
        props: {
          label: 'h2',
          value: 'this is a tag h2 demo value'
        }
      },

      {
        ...JH1,
        TYPE: 'h3',
        name: 'H3',
        props: {
          label: 'h3',
          value: 'this is a tag h3 demo value'
        }
      },

      RichText,
      JVideo,
      JImg,
      JButton,
    ]
  }, {
    groupName: '业务组件',
    child: [
      WechatOfficialAccount,
      PromotionImg,
    ]
  }
]
