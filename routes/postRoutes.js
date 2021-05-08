import express from 'express';
import { getList, test, getAccommodation } from '../controller/postController';

const router = express.Router();

router.get('/test', test);

router.get('/getList', getList);

router.get('/getAccommodation', getAccommodation);
// router.post("/register", register);

module.exports = router;
