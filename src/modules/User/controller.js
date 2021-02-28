import { create } from './service';
const db = require('../../models');
const User = db.user;
const Profile = db.profile;
const Post = db.post;

// Add/ insert the user(s)
export const newUser = async(req,res)=>{

    try{
        let userData =await create(req.body);

       return res.status(200).json({user:userData,message:"successfully added"});
        console.log("-------after response-----");
    }
    catch(err){
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    }
    
}

// Get the details of all the users
export const getAllUsers = async (req, res) => {
	User.findAll({})
		.then(data => {
            res.send(data);
		})
		.catch(err => {
	      res.status(500).send({
              message: 
                err.message || "Some error occured while retrieving users."
          });
        });
};

// Get the details of all the users including their profile ans posts
export const allWith_Profile_Post = async (req, res) => {
	User.findAll({
        include: [Profile, Post]
    })
		.then(allUsers => {
            res.send(allUsers);
        })
		.catch(err => {
	      res.status(500).send({
              message: 
                err.message || "Some error occured while retrieving all users."
          });
        });
};
