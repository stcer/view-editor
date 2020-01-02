import React from 'react'

export const TYPE = 'wechatOfficialAccount'
export const icon = 'plus-circle'
export const name = '关注公众号'

export const create = (props) => {
  return {
    props: {
      title: '关注我们的公众号',
      src: 'http://static-card.jiuzheng.com//image/admin/workbench/officalaccount.png',
      style: {
        maxWidth: '100%'
      },
      ...props,
    },
  }
}

/**
 *  ViewEditor
 * @constructor
 */
export const ViewEditor = ({ src, title, style }) => {
  return (
    <img src={src} alt={title} style={style}/>
  )
}
