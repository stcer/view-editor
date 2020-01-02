

export const usePageData = () => {

}

const LocalStorageKey = '_je_data'
export const saveData = () => {
  localStorage.setItem(LocalStorageKey, )
}

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
            'value': '九正建材网页面编辑器',
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
                  label: 'h2',
                  value: '使用说明',
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
      child: [
        {
          id: 61, type: 'richText',
          props: {
            value: `Tourists frequently admit that Taj Mahal "simply cannot be described with words". And that’s probably true. The more you try the more speechless you become. Words give only a semblance of truth. The real truth about its beauty is revealed when you adore different shades of “Taj” depending on the time of the day or when you admire the exquisite inlay work in different corners of the façade.`
          }
        },
        {
          id: 62, type: 'richText',
          props: {
            value: 'demo rich text2'
          }
        }
      ]
    }
  },

  {
    'id': 6,
    'type': 'mul-col-2',
    'props': {
      cols: [
        { width: 12 },
        { width: 12 },
      ],
      child: [
        [
          {
            'id': 9,
            'type': 'tab',
            props: {
              panes: [
                { 'title': 'Tab 1', 'key': 1 },
                { 'title': 'Tab 2', 'key': 2 },
                { 'title': 'Tab 3', 'key': 3 },
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
        ],
        [
          {
            'id': 7,
            'type': 'tab',
            props: {
              panes: [
                { 'title': 'Tab 1222', 'key': 1 },
                { 'title': 'Tab 2', 'key': 2 },
                { 'title': 'Tab 3', 'key': 3 },
              ],
              child: [
                [],
                [],
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
      cols: [
        { width: 8 },
        { width: 8 },
        { width: 8 },
      ],
      child: [
        [],
        [],
        [],
      ]
    }
  }
]
