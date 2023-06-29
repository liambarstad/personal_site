import React, { Component } from 'react'
import ContactForm from './contact-form'

export default class ContactInterace extends Component{
  state = {
    display: 0,
    submitErr: 'An unexpected error has occurred, please email me at liambarstad@gmail.com. I apologize for the inconvenience, and look forward to making your acquaintance!',
  }

  displayContact() {
    this.setState({ display: 1 })
  }

  handleSuccess(response) {
    this.setState({ display: 2 })
  }

  handleSubmitException(response) {
    if (response.status < 500) {
      response.json()
        .then((error) => {
          this.setState({ submitErr: error.message })
        })
    }
    this.setState({ display: 3 })
  }

  contactButton() {
    return (
      <button 
        id='contact-button'
        onClick={this.displayContact.bind(this)}
      >Contact me!</button>
    )
  }

  contactSuccess() {
    return (
      <div className='contact-message'>
        <h1 id='contact-form-header' style={{ top: '-1.2em' }}>Success!</h1>
        I look forward to making your acquaintance!
      </div>
    )
  }

  contactFailure() {
    return (
      <div className='contact-message'>
        <h1 id='contact-form-header' style={{ top: '-1.2em' }}>Crap!</h1>
        {this.state.submitErr}
      </div>
    )
  }

  render() {
    switch (this.state.display) {
      case 0: 
        return this.contactButton(); break
      case 1:
        return <ContactForm
          successFunc={this.handleSuccess.bind(this)}
          exceptionFunc={this.handleSubmitException.bind(this)}
        />
        break
      case 2:
        return this.contactSuccess(); break
      case 3:
        return this.contactFailure(); break
    }
  }
}
