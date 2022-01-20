import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let todos;

export default class TodosDAO {
    static async injectDB(conn) {
        if (todos) {
            return
        }
        try {
            todos = await conn.db(process.env.DB_NAME).collection(DB_COLLECTION)
        }
        catch(err) {
            console.error(`Unable to establish connection handle in todosDAO: ${err}`);
        }
    }

    static async addTodo(name, day, todo) {
        try {
            const todoDoc = {name, day, todo}

            return await todos.insertOne(todoDoc)
        } 
        catch (err) {
            console.error(`Unable to post todo: ${err}`);
            return {error: err}
        }
    }

    static async updateTodo(todoId, name, day, todo) {
        try {
            const updateResponse = await todos.updateOne(
                {todoId: ObjectId(todoId)}, 
                {$set: {todo: todo, name: name, day: day}}
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
            const deleteResponse = await todos.deleteOne({_id: ObjectId(todoId)});
            return deleteResponse
        } 
        catch (err) {
            console.error(`Unable to delete todo: ${err}`);
            return {error: err}
        }
    }

    static async getTodos(name = "", day = "") {
        let query ={};

        if(name && day) {
            query = {$and: [
                {name: name},
                {day: day}
            ]};
        } else if (name) {
            query = {name: name};
        } else if (day) {
            query = {day: day};
        }

        let cursor;
        try{
            cursor = await todos.find(query);
            const todosList = await cursor.toArray();
            return todosList
        }
        catch(err) {
            console.error(`Unable to issue find command, ${err}`);
            let todosList = [];
            return todosList
        }
    }
}