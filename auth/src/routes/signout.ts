import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    res.send('My Boy Look At Me');
})

export { router as signoutRouter };