import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import { useDispatch,useSelector } from 'react-redux';
import { addItem } from '../features/item';

function AddToDoItem(){
  const dispatch = useDispatch();
  const count = useSelector((state) => state.item.count)
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addItem({item:e.target[0].value,id:count+1}));
    e.target[0].value = '';
    
  }
    return(
        <Card variant="primary">
          <Form onSubmit={submitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type='text' placeholder="Enter Todo Item" />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Add Item
      </Button>
    </Form>
    </Card>
    )
}

export default AddToDoItem;