import express from 'express';
import NamesController from './names_controller';

const router = express.Router();

router.route('/').get(NamesController.getNames)

export default router;