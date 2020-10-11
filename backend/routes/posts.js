const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

router.get('/', async (req, res) => {     
    console.log('getting posts...')          
    try {
        const foundPosts = await Post.find().exec();
        //const resPosts = await foundPosts.json();
        res.send(foundPosts);
        
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
    
})

router.post('/', async (req, res) => {
    const postToAdd = req.body.postbody;
    //console.log(req)
    console.log(postToAdd);         
    try {
        const addedPost = await Post.create({postbody: postToAdd});
        console.log('added new post to db ' + addedPost)
    } catch(error) {
        console.log('error adding post to db: ' + error);
    }
    
})

module.exports = router;