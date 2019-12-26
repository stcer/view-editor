export default [
  {
    'id': 1,
    'type': 'div',
    'props': {
      'title': 'div容器的标题',
      'style': {
        'width': '100%',
        'padding': '4px',
        'border': '2px solid #fff'
      },
      'child': [
        {
          'id': 2,
          'type': 'h1',
          'props': {
            'value': 'This is a my title H1',
          }
        },

        {
          'id': 3,
          'type': 'div',
          'props': {
            'title': 'div容器的标题',
            'style': {
              'width': '100%',
              'padding': '14px',
              'border': '1px solid #fff'
            },
            'child': [
              {
                'id': 4,
                'type': 'h2',
                'props': {
                  label : 'h2',
                  'value': 'This is a my title h2',
                }
              },
            ]
          },
        },
      ]
    },

  },

  {
    'id': 5,
    'type': 'div',
    'props': {

    }
  },

  {
    'id': 6,
    'type': 'mul-col-2',
    'props': {
      cols: [
        {width: 12},
        {width: 12},
      ],
      child: [
        [],
        [
          {
            'id': 7,
            'type': 'tab',
            props: {
              panes: [
                {'title':  'Tab 1', 'key': 1},
                {'title':  'Tab 2', 'key': 2},
                {'title':  'Tab 3', 'key': 3},
              ],
              child: [
                [],
                [],
                [],
                [],
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
    props: {
      cols : [
        {width: 8},
        {width: 8},
        {width: 8},
      ],
      child: [
        [],
        [{
          'id': 9,
          'type': 'tab',
          props: {
            panes: [
              {'title':  'Tab 1', 'key': 1},
              {'title':  'Tab 2', 'key': 2},
              {'title':  'Tab 3', 'key': 3},
            ],
            child: [
              [],
              [],
              [],
              [],
              []
            ]
          }
        }],
        [],
      ]
    }
  }
]
