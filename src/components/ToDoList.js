import Card from 'react-bootstrap/Card';
import AddToDoItem from './AddToDo';
import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { deleteItem, updateItem } from '../features/item';

function ToDoList(){
    const todoItems = useSelector((state) => state.item.value)
    const dispatch = useDispatch();
    return(
        <Card>
            <Card.Body>
                <AddToDoItem/>
                <Card.Title>
                    <h1>To Do List</h1>
                    {todoItems.map((item) => {
                        return(
                         <Card key={item.id}>
                            <Form   onSubmit={(e) => { e.preventDefault(); dispatch(updateItem({item:e.target[0].value,id:item.id}))}}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type='text' placeholder={item.item}   />
                                    <Button className='m-1' variant="primary" type="submit">Update</Button>   
                                    <Button className='m-1'onClick={() => {dispatch(deleteItem({id:item.id}))}}>Delete</Button>
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