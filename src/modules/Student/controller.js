import { create } from './service';
const db = require('../../models');
const Student = db.student;

export const createStudent = async(req,res)=>{

    try{
        let studentData =await create(req.body);

       return res.status(200).json({student:studentData,message:"successfully added"});
        console.log("-------after response-----");
    }catch(err){
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    }
    
}

