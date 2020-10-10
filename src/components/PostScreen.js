import React from 'react'
import { Container } from 'react-bootstrap';
import Post from './Post';
import ReplySection from './ReplySection';
import { Link } from 'react-router-dom';

function PostScreen() {
    return (
        <Container>
            <div className="home-link">
                <Link href='/'><h4>Home</h4></Link>
            </div>
            <Post />  
            <ReplySection />
        </Container>
    )
}

export default PostScreen

