import BalloonEditor from '@ckeditor/ckeditor5-build-balloon-block'
import CKEditor from '@ckeditor/ckeditor5-react'
import React from 'react'

export const ViewEditor = ({ value, style, saveProp }) => {
  let newValue = value;
  const save = () => {
    console.log('newValue', newValue)
    saveProp({ value: newValue })
  }
  return (
    <div style={{ ...style }}>
      <CKEditor
        config={{height:'200px'}}
        editor={ BalloonEditor }
        data={newValue}
        onInit={ editor => {
          // You can store the "editor" and use when it is needed.
          console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
          // newValue = editor.getData();
          // save()
        } }
        onBlur={ ( event, editor ) => {
          newValue = editor.getData();
          console.log( 'Blur.', editor );
          save()
        } }
      />
    </div>
  )
}

export const create = (props) => {
  return {
    props: {
      value: 'this is a demo rich text',
      ...props
    },
  }
}

export const TYPE = 'richText'
export const icon = 'info-circle'
export const name = '富文本'
export const isContainer = true
