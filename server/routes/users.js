import express from 'express'
import bcrypt from 'bcrypt';
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

//import User from '../models/user';

let router = express.Router();

function validateInput(data) {
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

router.get('/:identifier', (req, res) => {
  /*User.query({
    select: [ 'username', 'email' ],
    where: { email: req.params.identifier },
    orWhere: { username: req.params.identifier }
  }).fetch().then(user => {
    res.json({ user });
  });*/
});


router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body)

  if(!isValid) {
      res.status(400).json(errors)
  }

  /*validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (isValid) {
      const { username, password, timezone, email } = req.body;
      const password_digest = bcrypt.hashSync(password, 10);

      User.forge({
        username, timezone, email, password_digest
      }, { hasTimestamps: true }).save()
        .then(user => res.json({ success: true }))
        .catch(err => res.status(500).json({ error: err }));

    } else {
      res.status(400).json(errors);
    }
  });*/

});

export default router;