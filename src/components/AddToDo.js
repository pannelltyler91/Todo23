import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import { useDispatch,useSelector } from 'react-redux';
import { addItem } from '../features/item';
import '../styles/addItem.css'

function AddToDoItem(){
  const dispatch = useDispatch();
  const count = useSelector((state) => state.item.count)
  const items = useSelector((state) => state.item.value)
  const submitForm = (e) => {
    e.preventDefault();
    items.find((element)=> element.item === e.target[0].value)? alert("Item already exists") :
    dispatch(addItem({item:e.target[0].value,id:count+1}));
    e.target[0].value = '';
    
  }
    return(
          <Card className='header-footer-bg' >
            <Form onSubmit={submitForm}>
              <Form.Group  controlId="formBasicEmail">
                <Form.Control required type='text' placeholder="Enter Todo Item" />
              </Form.Group>
              <Button  className='add-button' type="submit" >Add Item</Button>
            </Form>
          </Card>
    )
}

export default AddToDoItem;