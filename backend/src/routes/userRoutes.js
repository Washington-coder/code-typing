import express from 'express';
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('List of users');
});

router.get('/users/:id', (req, res) => {
    res.send(`Detalhes do usuário ${req.params.id}`);
});

export default router;