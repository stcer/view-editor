import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-react'
import { Form, Button, Modal } from 'antd'
import React, { useState } from 'react'

export default function RichTextPropEditor({ data, saveProp }) {
  const { props } = data
  const [visible, setVisible] = useState(false);
  let newValue = props.value;
  const onOk = () => {
    console.log('newValue', newValue)
    saveProp({ value: newValue })
    setVisible(false)
  }

  return (
    <Form>
      <Button type="primary" onClick={() => setVisible(true)}>
        编辑内容
      </Button>
      <Modal
        title="内容编辑"
        visible={visible}
        width={'80%'}
        onCancel={() => {setVisible(false)}}
        onOk={onOk}
      >
        <CKEditor
          config={{height:'200px'}}
          editor={ ClassicEditor }
          data={props.value}
          onInit={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
            newValue = editor.getData();
          } }
          onBlur={ ( event, editor ) => {
            newValue = editor.getData();
            console.log( 'Blur.', editor );
          } }
          onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
          } }
        />
      </Modal>
    </Form>
  )
}
