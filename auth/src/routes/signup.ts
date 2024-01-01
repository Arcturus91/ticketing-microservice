import express, { Request, Response } from 'express'
import { body, validationResult } from 'express-validator';

const router = express.Router();
//The express.Router() function is used to create a new router object. 
router.post('/api/users/signup', [
    body('email')
        .isEmail().withMessage('email must be valid'),
    body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must containe between 4 to 20 characteres')
], (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array())
    }

    const { email, password } = req.body;

console.log('creating a user:', errors.array())
res.send('hi')

})

export { router as signupRouter }