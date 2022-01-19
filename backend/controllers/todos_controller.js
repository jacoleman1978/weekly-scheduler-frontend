import TodosDAO from '../dao/todosDAO.js';

export default class TodosController {
    static async PostTodo(req,res,next) {
        try {
            const nameId = req.body.name_id;
            const dayOfWeek = req.body.dayOfWeek;
            const todo = req.body.todo;

            const TodosResponse = await TodosDAO.addTodo(
                nameId,
                dayOfWeek,
                todo
            )
            res.json({status: "success"});
        }
        catch(err) {
            res.status(500).json({error: err.message});
        }
    }

    static async UpdateTodo(req,res,next) {
        try {
            const todoId = req.body.todo_id;
            const todo = req.body.todo;

            const TodoResponse = await TodosDAO.updateTodo(
                todoId,
                todo
            )

            // let {error} = TodoResponse;
            // if (error) {
            //     res.status.json({error});
            // }

            res.json({status: "success"});
        }
        catch(err) {
            res.status(500).json({error: err.message});
        }
    }

    static async DeleteTodo(req,res,next) {
        try {
            const todoId = req.body.todo_id;
            const TodoResponse = await TodosDAO.deleteTodo(todoId);

            res.json({status: "success"});
        }
        catch(err) {
            res.status(500).json({error: err.message});
        }
    }
}