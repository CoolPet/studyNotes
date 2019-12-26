import React from "react"
import { 
  Card, 
  Button,
  Modal
} from "antd"
import { EditorState, convertToRaw } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

class Rich extends React.Component{
  state = {
    editorState: EditorState.createEmpty(),
    codeContent: '',
    visible: false
  }

  render(){
    const { editorState } = this.state
    return(
      <div>
        <Card title="富文本编辑器" 
          extra={this.cardRight()}
        >
          <Editor 
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </Card>
        <Modal 
          title="富文本"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          {this.state.codeContent}
        </Modal>
      </div>
    )
  }

  cardRight = () => {
    return (
      <div>
        <Button 
          type="primary" 
          style={{marginBottom: 0}}
          onClick={this.empty}
        >
          清空内容
        </Button>
        <Button 
          type="primary" 
          style={{marginBottom: 0}}
          onClick={this.gain}
        >
          获取HTML文本
        </Button>
      </div>
    )
  }

  onEditorStateChange = (editorState) => {
    const codeContent = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    this.setState({
      editorState,
      codeContent
    })
  }

  empty = () => {
    this.setState({
      editorState: EditorState.createEmpty()
    })
  }

  gain = () => {
    this.setState({
      visible: true
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
}

export default Rich