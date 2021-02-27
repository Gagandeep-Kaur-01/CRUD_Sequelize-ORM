import { create } from './service';
const db = require('../../models');
const User = db.user;
const Profile = db.profile;
const Post = db.post;

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
