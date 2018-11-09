import express from 'express'
import bcrypt from 'bcrypt';
import validateInput from '../shared/validations/signup'

//import User from '../models/user';

let router = express.Router();

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

  if(isValid) {
    res.status(200).json({ success: true })
  } else {
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