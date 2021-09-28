import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    res.send('My Boy Look At Me');
})

export { router as currentUserRouter };