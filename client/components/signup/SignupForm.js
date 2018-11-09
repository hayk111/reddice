import React from 'react'
import PropTypes from 'prop-types'
import timezones from '../../data/timezones'
import map from 'lodash/map'

class SignUpForm extends React.Component {

    constructor(props) {
        console.log('props', props.userSignupRequest)
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timeZone: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.userSignupRequest(this.state)
    }

    render() {
        const options = map(timezones, (val, key) => 
            <option key={val} value={val}>{key}</option>
        )

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community!</h1>
                
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input 
                        type="text"
                        onChange={this.onChange}
                        name="username"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input 
                        type="text"
                        onChange={this.onChange}
                        name="email"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input 
                        type="password"
                        onChange={this.onChange}
                        name="password"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password repeat</label>
                    <input 
                        type="password"
                        onChange={this.onChange}
                        name="passwordConfirmation"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
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
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
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