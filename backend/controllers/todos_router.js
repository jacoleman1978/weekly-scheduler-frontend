import express from 'express';
import TodosController from './todos_controller.js'

const router = express.Router();

router.route('/').get(TodosController.getTodos);

router.route('/byPerson/:name').get(TodosController.getTodos);

router.route('/byDay/:day').get(TodosController.getTodos);

router.route('/todos/new').post(TodosController.PostTodo);
router.route('/todos/:id')
    .put(TodosController.UpdateTodo)
    .delete(TodosController.DeleteTodo)

export default router;