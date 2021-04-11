import React, { useEffect } from 'react'
import { Col, Image, ListGroup, Row,Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addtocart,removeFromCart } from '../actions/cartactions'
import Message from '../components/Message'

const CartScreen = (match,Location,History) => {


    

   
    const productid=match.match.params.id
    const qty=Location.search?Number(Location.search.split('=')[1]):1

    const dispatch=useDispatch()

    const cart = useSelector(state=>state.cart)
    const {cartItems} =cart
    console.log(cart)
    useEffect(()=>{
        if(productid){
            dispatch(addtocart(productid,qty))
        }


    },[dispatch,productid,qty])

    const removefromcart=(id)=>{
        dispatch(removeFromCart(id))
    }

    


    return (
        <Row>
            <Col md={8}>
                <h3>Shopping Cart</h3>
                { cartItems.length===0?(
                    <Message variant='info'>Your cart is empty</Message>
                ) :(
                    <ListGroup >
                            {cartItems.map(item=>(
                                    <ListGroup.Item key={item.productid}>
                                        <Row>
                                            <Col md={2}  className='mg-3'>
                                                <Image src={item.image} fluid rounded/>
                                            </Col>
                                            <Col md={3}  className='mg-3'>
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            
                                            </Col>
                                            <Col md={3}  className='mg-3'>
                                              <div> <h6>{item.price}</h6></div>
                                            
                                            </Col>
                                            <Col md={2}   className='mg-3'>
                                            <Form.Control as='select' value={item.qty} onChange={(e)=>dispatch(addtocart(item.product,Number(e.target.value)))}>
                                                <option key={1} value={1}>1</option>
                                                <option key={2} value={2}>2</option>
                                                <option key={3} value={3}>3</option>
                                                <option key={4} value={4}>4</option>
                                            </Form.Control>
                                            </Col>
                                            <Col md={0.5} >
                                                <Button
                                                 type='button'
                                                 variant='light'
                                                 onClick={()=>removefromcart(item.product)}
                                                >
                                                    <i className='fas fa-trash'></i>


                                                </Button>

                                            
                                            
                                            </Col>
                                        </Row>

                                    </ListGroup.Item>
                            
                            
                            ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4} style={{padding:35,paddingLeft:50}}>
                <Card>
                    <ListGroup>
                        <ListGroup.Item>
                            <h5>Total Items : {cartItems.reduce((acc,item)=> acc+Number(item.qty),0)}</h5>
                            
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Total Price: {cartItems.reduce((acc,item)=> acc+Number(item.qty)*item.price,0)}</h5>
                            
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to='/shipping'>
                            <Button 
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length===0}
                            
                            >


                            <h5>Checkout</h5>
                            </Button>
                            </Link>
                            
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen
