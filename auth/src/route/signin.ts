import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    res.send('My Boy Look At Me');
})

export { router as signinRouter };