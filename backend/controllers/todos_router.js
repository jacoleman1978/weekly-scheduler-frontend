import express from 'express';
import TodosController from './todos_controller.js'

const router = express.Router();

router.route('/').get(TodosController.GetTodos);

router.route('/name/:name').get(TodosController.GetTodos);

router.route('/day/:day').get(TodosController.GetTodos);

router.route('/name/:name/day/:day').get(TodosController.GetTodos);

router.route('/day/:day/name/:name').get(TodosController.GetTodos);

router.route('/todos/new').post(TodosController.PostTodo);
router.route('/todos/:id')
    .put(TodosController.UpdateTodo)
    .delete(TodosController.DeleteTodo)

export default router;