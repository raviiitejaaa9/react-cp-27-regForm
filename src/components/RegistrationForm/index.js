// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    onSubmitSuccess: false,
    firstName: '',
    lastName: '',
    isFirstNamePresent: true,
    isLastNamePresent: true,
  }

  onRequireNewResponse = event => {
    event.preventDefault()
    this.setState({onSubmitSuccess: false})
  }

  onSubmitResponse = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '') {
      this.setState({isFirstNamePresent: false})
    }
    if (lastName === '') {
      this.setState({isLastNamePresent: false})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({onSubmitSuccess: true})
    }
  }

  onBlurFirstName = event => {
    console.log(event.target.value)
    this.setState({firstName: event.target.value})
    if (event.target.value === '') {
      this.setState({isFirstNamePresent: false, firstName: event.target.value})
    } else {
      this.setState({isFirstNamePresent: true, firstName: event.target.value})
    }
  }

  onBlurLastName = event => {
    console.log(event.target.value)
    this.setState({lastName: event.target.value})
    if (event.target.value === '') {
      this.setState({isLastNamePresent: false, lastName: event.target.value})
    } else {
      this.setState({isLastNamePresent: true, lastName: event.target.value})
    }
  }

  regForm = () => {
    const {isFirstNamePresent, isLastNamePresent} = this.state

    return (
      <form className="form-sec" onSubmit={this.onSubmitResponse}>
        <div className="label-container">
          <label htmlFor="firstname" className="label-el">
            {' '}
            FIRST NAME{' '}
          </label>
          <input
            className="input-el"
            type="input"
            placeholder="First name"
            id="firstname"
            onBlur={this.onBlurFirstName}
          />
          {isFirstNamePresent ? null : <p className="error-el"> Required </p>}
        </div>

        <div className="label-container">
          <label htmlFor="lastname" className="label-el">
            {' '}
            LAST NAME{' '}
          </label>
          <input
            className="input-el"
            type="input"
            placeholder="Last name"
            id="lastname"
            onBlur={this.onBlurLastName}
          />
          {isLastNamePresent ? null : <p> Required </p>}
        </div>

        <button className="submit-btn" type="submit">
          {' '}
          Submit{' '}
        </button>
      </form>
    )
  }

  responseForm = () => (
    <form onSubmit={this.onRequireNewResponse} className="form-sec">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="img"
      />
      <p> Submitted Successfully</p>
      <button className="submit-another-response-btn" type="submit">
        {' '}
        Submit Another Response{' '}
      </button>
    </form>
  )

  render() {
    const {onSubmitSuccess} = this.state

    const requiredForm = onSubmitSuccess ? this.responseForm() : this.regForm()

    return (
      <div className="app-container">
        <h1 className="app-head"> Registration </h1>
        {requiredForm}
      </div>
    )
  }
}

export default RegistrationForm
