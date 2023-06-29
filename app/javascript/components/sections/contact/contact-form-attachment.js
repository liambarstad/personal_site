import React, { Component } from 'react'

export default class ContactFormAttachment extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.state = {
      filename: '',
    }
  }

  clickAttachment() {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.click()
    }
  }

  changeAttachment() {
    if (this.inputRef && this.inputRef.current && this.validateFileInput()) {
      const nameParts = this.inputRef.current.value.split('\\')
      const filename = nameParts[nameParts.length - 1]
      this.setState({ filename })
      this.props.onChangeFunc()
    }
  }

  validateFileInput() {
    return (
      this.inputRef.current.files.length == 1 &&
      this.inputRef.current.files[0].size < 50000000
    )
  }

  render() {
    return (
      <div className='attachment-container'>
        <img className='attachment-icon' src='/api/v1/images/attachment.png' onClick={this.clickAttachment.bind(this)}/>
        <div className='attachment-info'>
          <span className='attachment-name'>{this.state.filename}</span>
          <span 
            className='attachment-delete' 
            onClick={() => { this.props.onDeleteFunc(this.props.index) }}
          >X</span>
        </div>

        <input 
          className='attachment-input' 
          type='file' 
          name={`inquiry[attachments][${this.props.index}]`}
          accept='application/pdf, application/csv, image/png, image/jpg, image/jpeg, image/gif' 
          onChange={this.changeAttachment.bind(this)}
          ref={this.inputRef}
        /> 
      </div>
    )
  }

}
