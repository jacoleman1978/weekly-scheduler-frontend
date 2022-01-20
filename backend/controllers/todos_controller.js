import TodosDAO from '../dao/todosDAO.js';

export default class TodosController {
    static async PostTodo(req,res,next) {
        try {
            const name = req.body.id;
            const day = req.body.day;
            const todo = req.body.todo;

            const TodosResponse = await TodosDAO.addTodo(name, day, todo);
            res.json({status: "success"});
        }
        catch(err) {
            res.status(500).json({error: err.message});
        }
    }

    static async UpdateTodo(req,res,next) {
        try {
            const todoId = req.body.todoId;
            const name = req.body.id;
            const day = req.body.day;
            const todo = req.body.todo;

            const TodoResponse = await TodosDAO.updateTodo(todoId, name, day, todo);

            res.json({status: "success"});
        }
        catch(err) {
            res.status(500).json({error: err.message});
        }
    }

    static async DeleteTodo(req,res,next) {
        try {
            const todoId = req.body.todoId;
            const TodoResponse = await TodosDAO.deleteTodo(todoId);

            res.json({status: "success"});
        }
        catch(err) {
            res.status(500).json({error: err.message});
        }
    }

    static async getTodos(req,res,next) {
        let name = req.query.name;
        let day = req.query.day;
        const todosList = await TodosDAO.getTodos(name, day);

        let response = {todos: todosList};
        res.json(response);
    }
}