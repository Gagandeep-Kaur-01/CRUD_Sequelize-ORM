//import { create } from './service';
const db = require('../../models');
const User = db.user;
const Profile = db.profile;

/*export const createProfile = async(req,res)=>{

    try{
        let ProfileData =await create(req.body);

       return res.status(200).json({
           profile:ProfileData
           message:"successfully added"});
           console.log("-------after response-----");
    }catch(err){
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    }
    
}*/


export const createProfile = async(req,res)=>{
    Profile.create({
        name: req.body.name,
        userId: req.body.userId
    }).then(newProfile => {res.send(newProfile); })
    .catch(err => {
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    });
}    


