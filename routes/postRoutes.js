import express from 'express';
import { getList, test, getAccommodations, getAccommodationById, createAccommodation, updateAccommodation, deleteAccommodation, searchAccommodation } from '../controller/postController';

const router = express.Router();

router.get('/test', test);

router.get('/getList', getList);

router.get('/accommodations', getAccommodations);

router.get('/accommodations/:id', getAccommodationById);

router.post('/accommodations', createAccommodation);

router.patch('/accommodations/:id', updateAccommodation);

router.delete('/accommodations/:id', deleteAccommodation);

router.get('/accommodationsSearch', searchAccommodation);

module.exports = router;
