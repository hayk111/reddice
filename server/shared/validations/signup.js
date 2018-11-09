import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {
    let errors = {};
  
    if (isEmpty(data.username)) {
      errors.username = 'This field is required';
    }
  
    if (isEmpty(data.email)) {
      errors.email = 'This field is required';
    }
  
    if (!Validator.isEmail(data.email)) {
      errors.email = 'Email is invalid';
    }
  
    if (isEmpty(data.password)) {
      errors.password = 'This field is required';
    }
  
    if (isEmpty(data.passwordConfirmation)) {
      errors.passwordConfirmation = 'This field is required';
    }
  
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
      errors.passwordConfirmation = 'Passwords must match';
    }
  
    if (isEmpty(data.timezone)) {
      errors.timezone = 'This field is required';
    }
    
  
    return {
        errors,
        isValid: isEmpty(errors)
    }
  
    /*return User.query({
      where: { email: data.email },
      orWhere: { username: data.username }
    }).fetch().then(user => {
      if (user) {
        if (user.get('username') === data.username) {
          errors.username = 'There is user with such username';
        }
        if (user.get('email') === data.email) {
          errors.email = 'There is user with such email';
        }
      }
  
      return {
        errors
      };
    })*/
  
}