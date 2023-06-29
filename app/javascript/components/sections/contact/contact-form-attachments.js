import React, { Component } from 'react'
import ContactFormAttachment from './contact-form-attachment'

export default class ContactFormAttachments extends Component {
  state = {
    attachments: [],
  }

  componentDidMount() {
    this.addNewAttachment()
  }

  newAttachment() {
    return <ContactFormAttachment
      key={this.state.attachments.length}
      index={this.state.attachments.length}
      onChangeFunc={this.addNewAttachment.bind(this)}
      onDeleteFunc={this.deleteAttachment.bind(this)}
    />
  }

  addNewAttachment() {
    if (this.state.attachments.length < 4) {
      let attachments = this.state.attachments
      attachments.push(this.newAttachment())
      this.setState({ attachments })
    } else {
      attachments.push(<div></div>)
    }
  }

  deleteAttachment(index) {
    let attachments = this.state.attachments
    attachments[index] = undefined
    //attachments.splice(index, 1)
    //debugger
    this.setState({ attachments })
  }

  render() {
    return (
      <div id='attachments'>
        { this.state.attachments }
      </div>
    )
  }
}
