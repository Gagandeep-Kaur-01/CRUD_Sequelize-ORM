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

export const getAllStudents = async (req, res) => {
	Student.findAll({})
		.then(data => {
            res.send(data);
			//return res.status(200).json({message:"Received data"});
		})
		.catch(err => {
			//return res.status(400).json({message:"failed"});
	      res.status(500).send({
              message: 
                err.message || "Some error occured while retrieving tutorials."
          });
        });
};

export const updateStudent = async (req, res) => {
    try {
        let payload= req.body;
      let student =  await Student.update(payload,{
            where:{
                id:payload.id
            }
        });

        console.log(req.body)
        return res.status(200).json({student:student,message:"updated successfully"})
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

