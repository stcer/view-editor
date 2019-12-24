
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
