import Card from 'react-bootstrap/Card';
import AddToDoItem from './AddToDo';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ToDoList(){
    const todoItems = useSelector((state) => state.item.value)
    return(
        <Card>
            <Card.Body>
                <AddToDoItem/>
                <Card.Title>
                    <h1>To Do List</h1>
                    {todoItems.map((item) => {
                        return(
                         <Card key={item.id}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type='text' placeholder={item.item} />
                                </Form.Group>
                                <Form.Group>
                                <Button className='m-1' variant="primary" type="submit">Update</Button>   
                                 <Button className='m-1'>Delete</Button>
                                </Form.Group>
                            </Form>
                         </Card>
                        )
                        
                    })}
                </Card.Title>
                
            </Card.Body>
        </Card>
    )
}

export default ToDoList;