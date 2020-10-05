import React from 'react';
import {Button, Container,} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function LoginSignUp() {
    return (
        <>
            <Container>
                <div className="this-div"></div>
                
                <h3 className="login-button">See what's happening in the world right now</h3>
                <br></br>
                <br></br>
                <h4 className="login-button">Join Today</h4>
                <br></br>
                <LinkContainer to='/signup'>
                    <Button variant='outline-primary' className='login-button' block>Sign Up</Button>
                </LinkContainer>
                <LinkContainer to='/login'>
                    <Button variant='primary' className='login-button' block >Login</Button>
                </LinkContainer>
            </Container>
        </>
    );
}

export default LoginSignUp;
