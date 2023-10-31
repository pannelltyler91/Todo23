import Card from 'react-bootstrap/Card';
import Container from'react-bootstrap/Container';
import AddToDoItem from './AddToDo';
import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { deleteItem, updateItem } from '../features/item';
import '../styles/addItem.css'

function ToDoList(){
    const todoItems = useSelector((state) => state.item.value)
    const dispatch = useDispatch();
    return(
        <Container fluid className='primary1-bg' >
            <AddToDoItem />
            <Card className='header-footer-bg'>
            <Card.Body >
                <Card.Title ><h1>To Do List</h1></Card.Title>
                    {todoItems.map((item) => {
                        return(
                         <Card  key={item.id} className='task-item-two'>
                            <Form className='task-item'  onSubmit={(e) => { e.preventDefault(); dispatch(updateItem({item:e.target[0].value,id:item.id}))}}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control required type='text' placeholder={item.item}   />  
                                </Form.Group>
                                <Form.Group >
                                <Button className='edit-button' variant="primary" type="submit">Update</Button>
                                <Button className='delete-button'onClick={() => {dispatch(deleteItem({id:item.id}))}}>Delete</Button>
                                <Form.Check className='m-3' reverse  type="checkbox" id="task-complete" label="Task Complete" onClick={(e) => {e.target.checked ? e.target.parentElement.parentElement.parentElement.className = 'completed-task-item': e.target.parentElement.parentElement.parentElement.className = 'task-item' }} />
                                </Form.Group>
                            </Form>
                         </Card>
                        )
                        
                    })}
                
                
            </Card.Body>
        </Card>
    </Container>
    )
}

export default ToDoList;