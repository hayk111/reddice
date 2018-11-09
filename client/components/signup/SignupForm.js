import React from 'react'
import PropTypes from 'prop-types'
import timezones from '../../data/timezones'
import map from 'lodash/map'
import classnames from 'classnames'

class SignUpForm extends React.Component {

    constructor(props) {
        console.log('props', props.userSignupRequest)
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

    onSubmit(e) {
        this.setState({ errors: {}, isLoading: true })
        e.preventDefault()
        this.props.userSignupRequest(this.state)
        .then(data => {})
        .catch(data => { this.setState({ errors: data.response.data, isLoading: false}) })
    }

    render() {
        const options = map(timezones, (val, key) => 
            <option key={val} value={val}>{key}</option>
        )

        const { errors } = this.state

        console.log(errors)
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community!</h1>
                
                <div className={classnames('form-group', { 'has-error': errors.username }) }>
                    <label className="control-label">Username</label>
                    <input 
                        type="text"
                        onChange={this.onChange}
                        name="username"
                        className="form-control"
                    />

                    { errors.username && <span className="help-block">{ errors.username }</span> }
                </div>

                <div className={classnames('form-group', { 'has-error': errors.email }) }>
                    <label className="control-label">Email</label>
                    <input 
                        type="text"
                        onChange={this.onChange}
                        name="email"
                        className="form-control"
                    />
                    { errors.email && <span className="help-block">{ errors.email }</span> }
                </div>

                <div className={classnames('form-group', { 'has-error': errors.password }) }>
                    <label className="control-label">Password</label>
                    <input 
                        type="password"
                        onChange={this.onChange}
                        name="password"
                        className="form-control"
                    />
                    { errors.password && <span className="help-block">{ errors.password }</span> }
                </div>

                <div className={classnames('form-group', { 'has-error': errors.passwordConfirmation }) }>
                    <label className="control-label">Password confirm</label>
                    <input 
                        type="password"
                        onChange={this.onChange}
                        name="passwordConfirmation"
                        className="form-control"
                    />
                    { errors.passwordConfirmation && <span className="help-block">{ errors.passwordConfirmation }</span> }
                </div>

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

export default SignUpForm;