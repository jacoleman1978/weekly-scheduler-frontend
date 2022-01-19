import express from 'express';
import NamesController from './names_controller.js';
import TodosController from './todos_controller.js'

const router = express.Router();

router.route('/').get(NamesController.getNames)

router
    .route('/todos')
    .post(TodosController.PostTodo)
    .put(TodosController.UpdateTodo)
    .delete(TodosController.DeleteTodo)

export default router;