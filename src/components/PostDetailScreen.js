import React from 'react'
import { Container } from 'react-bootstrap';
import Post from './Post';
import { Link } from 'react-router-dom'

function PostDetailScreen(props) {
    return (
        <Container>

            <div className="home-link">
                <Link to='/post'><h4>Back</h4></Link>
            </div>
            
            <Post />

        </Container>
    )
}

export default PostDetailScreen
