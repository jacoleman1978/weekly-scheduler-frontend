import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let todos;

export default class TodosDAO {
    static async injectDB(conn) {
        if (todos) {
            return
        }
        try {
            todos = await conn.db(process.env.DBNAME).collection('todos')
        }
        catch(err) {
            console.error(`Unable to establish connection handle in todosDAO: ${err}`);
        }
    }

    static async addTodo(nameId, dayOfWeek, todo) {
        try {
            const todoDoc = {
                nameId: ObjectId(nameId),
                dayOfWeek: dayOfWeek,
                todo: todo
            }

            return await todos.insertOne(todoDoc)
        } 
        catch (err) {
            console.error(`Unable to post todo: ${err}`);
            return {error: err}
        }
    }

    static async updateTodo(todoId, todo) {
        try {
            const updateResponse = await todos.updateOne(
                {todoId: ObjectId(todoId)}, 
                {$set: {todo: todo}}
            )   
            return updateResponse
        } 
        catch (err) {
            console.error(`Unable to update todo: ${err}`);
            return {error: err}
        }
    }

    static async deleteTodo(todoId) {
        try {
            const deleteResponse = await todos.deleteOne({_id: ObjectId(todoId)})
            return deleteResponse
        } 
        catch (err) {
            console.error(`Unable to delete todo: ${err}`);
            return {error: err}
        }
    }
}