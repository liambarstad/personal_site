import React, { Component } from 'react'
import ContactFormAttachments from './contact-form-attachments'

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.handleSuccess = this.props.successFunc
    this.handleSubmitException = this.props.exceptionFunc
    this.state = {
      inlineErrs: [],
    }
  }

  submitForm(event) {
    event.preventDefault() 
    const inlineErrs = this.validateSubmission(event)
    if (inlineErrs.length == 0) {
      this.sendForm(event)
    } else {
      this.setState({ inlineErrs })
    }
  }

  validateSubmission(event) {
    const formData = new FormData(event.target)
    return Array.from(formData.entries()).map((field) => {
      if (!field[0].includes('attachments') && field[1].length == 0) {
        return [ field[0], 'Field cannot be blank' ]
      } else if (field[0].includes('email') && !emailRegex.test(field[1])) {
        return [ field[0], 'Email not valid' ]
      }
    }).filter(err => !!err)
  }

  sendForm(event) {
    this.makeFormRequest(event).then((res) => {
      if (!!res.ok) {
        this.handleSuccess(res)
      } else {
        this.handleSubmitException(res)
      }
    }).catch(err => this.handleSubmitException(err))
  }

  makeFormRequest(event) {
    const token = document.querySelector('[name=csrf-token').content
    return fetch(event.target.action, {
      method: event.target.method,
      headers: {
        'X-CSRF-TOKEN': token,
      },
      body: (new FormData(event.target))
    })
  }

  fieldError(name) {
    const err = this.state.inlineErrs.find(err => err[0] == name)
    if (!!err) {
      return <p className='contact-error'>{ err[1] }</p>
    } 
  }

  render() {
    return (
      <form 
        id='contact-form' 
        action='/mail' 
        target='_self' 
        method='post' 
        onSubmit={this.submitForm.bind(this)}
      >
        <h1 id='contact-form-header'>Contact Me</h1>
        <table style={{ textAlign: 'left', width: '100%', paddingBottom: '0.7em' }}>
          <thead><tr><th /><th /></tr></thead>
          <tbody>
            <tr>
              <td className='contact-label'><label htmlFor='name'>Your Name:</label></td>
              <td style={{ lineHeight: '1em' }}>
                <input type='text' name='inquiry[name]' className='contact-input' />
                { this.fieldError('inquiry[name]') }
              </td>
            </tr>
            <tr>
              <td className='contact-label'><label htmlFor='email'>Organization:</label></td>
              <td style={{ lineHeight: '1em' }}>
                <input type='text' name='inquiry[organization]' className='contact-input' />
                { this.fieldError('inquiry[organization]') }
              </td>
            </tr>
            <tr>
              <td className='contact-label'><label htmlFor='email'>Return Email:</label></td>
              <td style={{ lineHeight: '1em' }}>
                <input type='text' name='inquiry[email]' className='contact-input' />
                { this.fieldError('inquiry[email]') }
              </td>
            </tr>
            <tr>
              <td className='contact-label'><label htmlFor='message'>Message:</label></td>
              <td style={{ lineHeight: '1em' }}>
                <div className='contact-message-container'>
                  <textarea name='inquiry[message]' className='contact-input no-border' />
                  <ContactFormAttachments />
                </div>
                { this.fieldError('inquiry[message]') }
              </td>
            </tr>
          </tbody>
        </table>
        <input 
          type='submit' 
          value='Send' 
          id='contact-submit' 
        />
      </form>
    )
  }

}
