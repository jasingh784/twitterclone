import React from 'react'
import { Card } from 'react-bootstrap'
import PostHeader from './PostHeader';

function Post() {
    return (
        <>
            <Card className='post'>
                <PostHeader />
                <Card.Body>
                    <Card.Text>
                    Rule #1: Anime profile pics are not allowed on this site. 
                    </Card.Text>
                    <Card.Text>
                        {new Date(Date.now()).toDateString()}
                    </Card.Text>
                    <hr></hr>
                    <Card.Text className='likes-sec'>
                        <span>Retweets</span> <span>Likes</span>
                    </Card.Text>
                </Card.Body>
            </Card> 
        </>
    )
}

export default Post
