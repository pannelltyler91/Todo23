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
        <Container >
            <Card className='m-4'>
                <AddToDoItem/>
            </Card>
            <Card className='m-4'>
            <Card.Body>
                <Card.Title ><h1>To Do List</h1></Card.Title>
                    {todoItems.map((item) => {
                        return(
                         <Card className='m-4' key={item.id}>
                            <Form   onSubmit={(e) => { e.preventDefault(); dispatch(updateItem({item:e.target[0].value,id:item.id}))}}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control required type='text' placeholder={item.item}   />
                                    <Button className='m-1' variant="primary" type="submit">Update</Button>   
                                    <Button className='m-1'onClick={() => {dispatch(deleteItem({id:item.id}))}}>Delete</Button>
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