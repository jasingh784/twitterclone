import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';


function LoginPage() {
    return (
        <>
            <Container>
                <div className="this-div"></div>
                
                <Form className='login-button'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    
                    <Button variant='primary' className='login-button' block>Login</Button>
                </Form>
                
            </Container>
        </>
    );
}

export default LoginPage;
