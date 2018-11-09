import React from 'react'
import PropTypes from 'prop-types'
import timezones from '../../data/timezones'
import map from 'lodash/map'
import validateInput from '../../../server/shared/validations/signup'
import TextFieldGroup from '../common/TextFieldGroup'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'

class SignUpForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timeZone: '',
            errors: {},
            isLoading: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state)

        if(!isValid) {
            this.setState({ errors })
        }

        return isValid
    }

    onSubmit(e) {
        e.preventDefault()
        console.log('state here', this.state)
        if(this.isValid()) {
            this.setState({ errors: {}, isLoading: true })
            this.props.userSignupRequest(this.state)
            .then(() => { this.props.history.push('/')})
            .catch(data => { console.log(data); this.setState({ errors: data.response.data, isLoading: false}) })
        }
    }

    render() {
        const options = map(timezones, (val, key) => 
            <option key={val} value={val}>{key}</option>
        )

        const { errors } = this.state

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community!</h1>
                
                <TextFieldGroup
                    error={errors.username}
                    label="Username"
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    value={this.state.username}
                    field="username"
                />

                <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    value={this.state.email}
                    field="email"
                />

                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    type="password"
                />

                <TextFieldGroup
                    error={errors.passwordConfirmation}
                    label="Password Confirmation"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                    type="password"
                />

                <div className={classnames('form-group', { 'has-error': errors.timeZone }) }>
                    <label className="control-label">Timezone</label>
                    <select 
                        onChange={this.onChange}
                        name="timeZone"
                        className="form-control"
                        value={this.state.timeZone}
                    >
                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>
                    { errors.timeZone && <span className="help-block">{ errors.timeZone }</span> }
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                        Sign Up
                    </button>
                </div>
            </form>
        )
    }
}

SignUpForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default withRouter(SignUpForm);