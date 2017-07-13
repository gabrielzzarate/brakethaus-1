import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('app', { title: 'Express' });
});

export default router;
