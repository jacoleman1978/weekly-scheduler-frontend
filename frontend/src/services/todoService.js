import axios from 'axios';

class TodoDataService {
    getAll = () => {
        return axios.get('http://localhost:3333/schedules')
    }

    getByName = (name) => {
        return axios.get(`http://localhost:3333/schedules/name/${name}`)
    }

    getByDay = (day) => {
        return axios.get(`http://localhost:3333/schedules/day/${day}`)
    }

    createTodo = (data) => {
        return axios.post('http://localhost:3333/schedules/todos/new', data)
    }

    updateTodo = (id, data) => {
        return axios.put(`http://localhost:3333/schedules/todos/${id}`, data)
    }

    deleteTodo = (id) => {
        return axios.delete(`http://localhost:3333/schedules/todos/${id}`)
    }
}

export default new TodoDataService();