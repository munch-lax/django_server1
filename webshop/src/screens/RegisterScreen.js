
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FormContainer from './FormContainer'
import {useDispatch} from 'react-redux'
import { login, register } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/loader'

function RegisterScreen({location,history}) {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setpassword]=useState('')
    const [confirmpassword,setConfirmPassword]=useState('')
    const [message,setmessage]=useState('')

    const dispatch = useDispatch()
    const redirect=location.search ? location.search.split('=')[1]:'/'
    const userRegister=useSelector(state=>state.userRegister)
    const {error,loading,userInfo}=userRegister

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect])


    function xyz() {
        
        history.push('/login')
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        if (password!=confirmpassword){
            setmessage('Passwords do not match')
        }
        else{

        }
        dispatch(register(name,email,password))

    setTimeout(xyz,3000)
        
    }

    return (
        <FormContainer>
            <h1>Register</h1>
            {message && <Message >{message}</Message>}
            {error && <Message >{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>

            <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    required
                    type='Name'
                    placeholder="Enter Name"   
                    value={name}  
                    onChange={(e)=>setName(e.target.value)}               
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    required
                    type='email'
                    placeholder="Enter Email"   
                    value={email}  
                    onChange={(e)=>setEmail(e.target.value)}               
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    required
                    type='password'
                    placeholder="Enter Password"   
                    value={password}  
                    onChange={(e)=>setpassword(e.target.value)}               
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmpassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    required
                    type='password'
                    placeholder="Confirm Password"   
                    value={confirmpassword}  
                    onChange={(e)=>setConfirmPassword(e.target.value)}               
                    >

                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Submit</Button>



            </Form>
            <Row className='py-3'>
                <Col>
                    Have an Account? <Link to={redirect?`/login?redirect=${redirect}`:'/login'}>Sign In</Link>
                </Col>
            </Row>
            
        </FormContainer>
    )
}

export default RegisterScreen
