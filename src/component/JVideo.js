import { Form, Input } from 'antd'
import React from 'react'

export const TYPE = 'video'
export const icon = 'plus-circle'
export const name = '视频'
export const isContainer = true

export const create = (props) => {
  return {
    props: {
      image: 'http://static-card.jiuzheng.com//bigcbd/image/admin/view/videowidget.png',
      src: 'http://9z-video-in.oss-cn-hangzhou.aliyuncs.com/uploads/19917/ca0330bc87cb37a71cb0dde5b864dc32.mp4',
      width: '100%',
      height: '300px',
      ...props,
    },
  }
}

/**
 *  ViewEditor
 * @constructor
 */
export const ViewEditor = ({ image, src, height, width, style }) => {
  return (
    <div style={style}>
      <video
        poster={image}
        src={src}
        width={width}
        height={height}
        preload="auto"
        controls="controls"
        x5-video-player-type="h5"
      />
    </div>
  )
}

export const PropEditor = ({ data, saveProp }) => {
  const {props} = data;
  return (
    <Form>
      <Form.Item label="image">
        <Input
          onChange={ (e) => saveProp({image:e.target.value}) }
          value={props.image}
        />
      </Form.Item>
      <Form.Item label="src">
        <Input
          onChange={(e) => saveProp({src:e.target.value}) }
          value={props.src}
        />
      </Form.Item>
      <Form.Item label="width">
        <Input
          onChange={(e) => saveProp({width:e.target.value}) }
          value={props.width}
        />
      </Form.Item>
      <Form.Item label="height">
        <Input
          onChange={(e) => saveProp({height:e.target.value}) }
          value={props.height}
        />
      </Form.Item>
    </Form>
  )
}
