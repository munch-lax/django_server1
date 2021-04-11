import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartactions'
import CheckoutSteps from '../components/CheckoutScreen'
import FormContainer from './FormContainer'

const ShippingScreen = ({history}) => {

    const dispatch = useDispatch()
    const cart =useSelector(state=>state.cart)
    const {shippingAddress}=cart

    const[address,setaddress]=useState(shippingAddress.address)
    const[city,setcity]=useState(shippingAddress.city)
    const[code,setcode]=useState(shippingAddress.code)
    const[country,setcountry]=useState(shippingAddress.country)
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveShippingAddress({address,city,code,country}))
        history.push('/payment')
    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                    required
                    type='Text'
                    placeholder="Enter Address"   
                    value={address?address:""}  
                    onChange={(e)=>setaddress(e.target.value)}               
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                    required
                    type='Text'
                    placeholder="Enter City"   
                    value={city?city:""}  
                    onChange={(e)=>setcity(e.target.value)}               
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='code'>
                    <Form.Label>Postal code</Form.Label>
                    <Form.Control
                    required
                    type='Text'
                    placeholder="Enter Postal code"   
                    value={code?code:""}  
                    onChange={(e)=>setcode(e.target.value)}               
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label>country</Form.Label>
                    <Form.Control
                    required
                    type='Text'
                    placeholder="Enter country"   
                    value={country?country:""}  
                    onChange={(e)=>setcountry(e.target.value)}               
                    >

                    </Form.Control>
                </Form.Group>


                <Button type='submit' variant='primary'>
                    Continue
                </Button>

            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
