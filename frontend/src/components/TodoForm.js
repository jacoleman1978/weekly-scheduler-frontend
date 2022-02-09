import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoDataService from '../services/todoService';

function TodoForm(props) {
    let [formDay, setFormDay] = useState("");
    let [formName, setFormName] = useState("");
    let [formTodo, setFormTodo] = useState("");
    let [formData, setFormData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {day: formDay, name: formName, todo: formTodo}
        // setFormData(data)
        console.log(data)
        TodoDataService.createTodo(data)
    }

    const newTodoFormStyle = {
        marginTop: "1rem"
    }

    return (
        <Container style={newTodoFormStyle}>
            <h1>New Todo</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs="auto">
                        <Form.Group className="mb-3" controlId="formDay">
                            <Form.Select aria-label="Default select example" required onChange={(e) => setFormDay(e.target.value)}>
                                <option >Select a day</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs="auto">
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Select aria-label="Default select example" required onChange={(e) => setFormName(e.target.value)}>
                                <option >Select a name</option>
                                <option value="Annora">Annora</option>
                                <option value="Anders">Anders</option>
                                <option value="Lainey">Lainey</option>
                                <option value="Cadigan">Cadigan</option>
                                <option value="Emily">Emily</option>
                                <option value="Adele">Adele</option>
                                <option value="Jamie">Jamie</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formTodo">
                            <Form.Control
                                type="text"
                                aria-describedby="Enter todo"
                                placeholder="Enter todo"
                                onChange={(e) => setFormTodo(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs="auto">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default TodoForm;