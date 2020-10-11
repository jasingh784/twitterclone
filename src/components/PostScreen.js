import React, {useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Post from './Post';
import ReplySection from './ReplySection';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostScreen() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/posts/')
            .then((res) => res.json())
            .then(data => setData(data));
    }, [])

    return (
        
        <Container>
            <div className="home-link">
                <Link to='/'><h4>Home</h4></Link>
            </div>
            {data.map((post) => 
                <Post key={post.id} id={post._id} post={post.postbody} />
            )}
            
            <ReplySection />
        </Container>
    )
}

export default PostScreen

