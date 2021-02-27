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

export const getAllPost = async (req, res) => {
	Post.findAll({})
		.then(post => {
            res.send(post);
		})
		.catch(err => {
	      res.status(500).send({
              message: 
                err.message || "Some error occured while retrieving posts."
          });
        });
};

export const getPost  = async (req, res) => {
	Post.findAll({
        where: { userId: req.params.id },
        include: [User]
    })
		.then(post => {
            res.send(post);
		})
		.catch(err => {
	      res.status(500).send({
              message: 
                err.message || "Some error occured while retrieving post."
          });
        });
};