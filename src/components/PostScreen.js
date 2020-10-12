import React, {useEffect, useState } from 'react'
import { Container, Button, Modal } from 'react-bootstrap';
import Post from './Post';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function PostScreen() {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [tweet, setTweet] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const postTweet = async () => {
        console.log('trying to post')
        try {
            const rawRes = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({postbody: tweet})
            
        })
        } catch(error) {
            console.log(error);
        }
            
    }

    useEffect(() => {
        fetch('/posts/')
            .then((res) => res.json())
            .then(data => setData(data));
    }, [])

    useEffect(() => {

    })

    return (
        
        <Container>
            <div className="home-link">
                <Link to='/'><h4>Home</h4></Link>
                <Button variant='primary' onClick={handleShow}><FontAwesomeIcon icon= {faPlus}/></Button>
            </div>

            {data.map((post) => 
                <Post key={post._id} id={post._id} post={post.postbody} />
            )}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tweet Something</Modal.Title>
                </Modal.Header>
                <Modal.Body><textarea value = {tweet} onChange={(e) => setTweet(e.target.value)}></textarea></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={postTweet}>
                        Tweet
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default PostScreen

