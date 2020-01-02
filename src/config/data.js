export default [
  {
    'id': 1,
    'type': 'div',
    'props': {
      'child': [
        {
          'id': 2,
          'type': 'h1',
          'props': {
            'value': '九正建材网页面编辑器'
          }
        },
        {
          'id': 3,
          'type': 'div',
          'props': {
            'child': [
              {
                'id': 4,
                'type': 'h2',
                'props': {
                  'label': 'h2',
                  'value': '使用说明'
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    'id': 5,
    'type': 'div',
    'props': {
      'child': [
        {
          'id': 61,
          'type': 'richText',
          'props': {
            'value': '<p>Tourists frequently admit that Taj Mahal "simply cannot be described with words". And that’s probably true. The more you try the more speechless you become. Words give only a semblance of truth. The real truth about its beauty is revealed when you adore different shades of “Taj” depending on the time of the day or when you admire the exquisite inlay work in different corners of the façade.</p>'
          }
        }
      ]
    }
  },
  {
    'id': 6,
    'type': 'mul-col-2',
    'props': {
      'cols': [
        {
          'width': 12
        },
        {
          'width': 12
        }
      ],
      'child': [
        [
          {
            'id': 9,
            'type': 'tab',
            'props': {
              'panes': [
                {
                  'title': 'Tab 1',
                  'key': 1
                },
                {
                  'title': 'Tab 2',
                  'key': 2
                },
                {
                  'title': 'Tab 3',
                  'key': 3
                }
              ],
              'child': [
                [
                  {
                    'props': {
                      'image': 'http://static-card.jiuzheng.com//bigcbd/image/admin/view/videowidget.png',
                      'src': 'http://9z-video-in.oss-cn-hangzhou.aliyuncs.com/uploads/19917/ca0330bc87cb37a71cb0dde5b864dc32.mp4',
                      'width': '100%',
                      'height': '300px'
                    },
                    'type': 'video',
                    'id': 71
                  }
                ],
                [],
                []
              ]
            }
          }
        ],
        [
          {
            'id': 7,
            'type': 'tab',
            'props': {
              'panes': [
                {
                  'title': '热门产品',
                  'key': 1
                },
                {
                  'title': '最新产品',
                  'key': 2
                },
                {
                  'title': '推荐产品',
                  'key': 3
                }
              ],
              'child': [
                [
                  {
                    'id': 62,
                    'type': 'richText',
                    'props': {
                      'value': '<p>demo rich text2<br>this is a demo</p>',
                      'index': 1
                    }
                  }
                ],
                []
              ]
            }
          }
        ]
      ]
    }
  },
  {
    'id': 8,
    'type': 'mul-col-3',
    'props': {
      'cols': [
        {
          'width': 8
        },
        {
          'width': 8
        },
        {
          'width': 8
        }
      ],
      'child': [
        [
          {
            'props': {
              'title': 'My Title',
              'size': 'small',
              'more': {
                'title': 'more',
                'path': '#none'
              },
              'child': [
                {
                  'props': {
                    'value': '<p>my title</p><p>my goods</p><p>my news</p>'
                  },
                  'type': 'richText',
                  'id': 64
                }
              ],
              'index': 1
            },
            'type': 'card',
            'id': 63
          }
        ],
        [
          {
            'props': {
              'title': 'My Title',
              'size': 'small',
              'more': {
                'title': 'more',
                'path': '#none'
              },
              'child': [
                {
                  'props': {
                    'value': '<p>my title</p><p>my goods</p><p>my news</p>'
                  },
                  'type': 'richText',
                  'id': 66
                }
              ],
              'index': 2
            },
            'type': 'card',
            'id': 67
          }
        ],
        [
          {
            'props': {
              'title': 'My Title',
              'size': 'small',
              'more': {
                'title': 'more',
                'path': '#none'
              },
              'child': [
                {
                  'props': {
                    'title': '关注我们的公众号',
                    'src': 'http://static-card.jiuzheng.com//image/admin/workbench/officalaccount.png',
                    'style': {
                      'maxWidth': '100%'
                    }
                  },
                  'type': 'wechatOfficialAccount',
                  'id': 72
                }
              ]
            },
            'type': 'card',
            'id': 70
          }
        ]
      ],
      'index': 2
    }
  }
]
