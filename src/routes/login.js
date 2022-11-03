import express from 'express';
import {selectSql} from '../database/sql';

const router = express.Router();

router.get('/', async (_req, res) => {
    res.render('login');
});

module.exports = router;