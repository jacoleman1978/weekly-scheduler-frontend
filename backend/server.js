import express from 'express';
import cors from 'cors';

import todos from './controllers/todos_controller.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/todos', todos);

app.use('*', (req,res) => {
    res.status(404).json({error: "Page not found"})
})

export default app;