const db = require('../../models');
const User = db.user;
const Post = db.post;

export const createPost = async(req,res)=>{
    Post.create({
        text: req.body.text,
        userId: req.body.userId
    })
    .then(newPost => {res.send(newPost); })
    .catch(err => {
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    });
}  