import express from 'express';
import TodosController from './todos_controller.js'

const router = express.Router();

router.route('/').get(TodosController.getTodos)

router
    .route('/todos')
    .post(TodosController.PostTodo)
    .put(TodosController.UpdateTodo)
    .delete(TodosController.DeleteTodo)

export default router;