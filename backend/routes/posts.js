const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

router.get('/', async (req, res) => {               
    try {
        const foundPosts = await Post.find().exec();
        //const resPosts = await foundPosts.json();
        res.send(foundPosts);
        
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
    
})

router.post('/add', async (req, res) => {               
    try {
        const addedPost = await Post.create(req.body.postbody);
        console.log('added new post to db ' + addedPost)
    } catch(error) {
        console.log('error adding post to db: ' + error);
    }
    
})

module.exports = router;