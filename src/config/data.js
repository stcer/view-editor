export default [
  {
    'id': 1,
    'type': 'div',
    'props': {
      'value': 'this is a demo div',
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
            'value': 'This is a my title',
            'style': {
              'className': 'top-title'
            }
          }
        },

        {
          'id': 3,
          'type': 'div',
          'props': {
            'value': 'this is a demo div2',
            'title': 'div容器的标题',
            'style': {
              'width': '100%',
              'padding': '14px',
              'border': '1px solid #fff'
            },
            'child': [
              {
                'id': 4,
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
        },
      ]
    },

  },

  {
    'id': 5,
    'type': 'h1',
    'props': {
      'value': 'This is a my title',
    }
  },

  {
    'id': 6,
    'type': 'div-col-2',
    'props': {
      col1: {
        width: 12,
        value: 'col1-value',
      },
      col2: {
        width: 12,
        value: 'col1-value',
      },
      child: [
        [{
            'id': 7,
            'type': 'h1',
            'props': {
              'label': 'h2',
              'value': 'This is a my title',
            }
          },
        ],
        []
      ]
    }
  },
]
