import React from 'react'
import { Card } from 'react-bootstrap'
import PostHeader from './PostHeader';

function Post() {
    return (
        <>
            <Card style={{ }}>
                <PostHeader />
                <Card.Body>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card> 
        </>
    )
}

export default Post
