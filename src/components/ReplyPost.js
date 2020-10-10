import React from 'react'
import { Card } from 'react-bootstrap'
import PostHeader from './PostHeader'

function ReplyPost() {
    return (
        <>
            <Card className='post'>
                <PostHeader />
                
                <Card.Body>
                    <Card.Text>Replying to @cool_guy_jas</Card.Text>
                    <Card.Text>
                    Rule #1: Anime profile pics are not allowed on this site. 
                    </Card.Text>
                    <Card.Text>
                        {new Date(Date.now()).toDateString()}
                    </Card.Text>
            
                </Card.Body>
            </Card> 
        </>
    )
}

export default ReplyPost
