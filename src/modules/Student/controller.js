import { create, oneStu, edit, remove } from './service';
const db = require('../../models');
const Student = db.student;

// Insert the details of student(s)
export const createStudent = async(req,res)=>{

    try{
        console.log("Create")
        let studentData =await create(req.body);

       return res.status(200).json({student:studentData,message:"successfully added"});
        console.log("-------after response-----");
    }catch(err){
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    }
    
}

// Get the details of all the students
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
                err.message || "Some error occured while retrieving the details of students."
          });
        });
};

// Get the detail of a student
/*export const getOneStudent = async (req, res) => {
	Student.findOne({
        where: {id: req.params.id }
    })
		.then(data => {
            res.send(data);
		})
		.catch(err => {
	      res.status(500).send({
              message: 
                err.message || "Some error occured while retrieving the detail of student."
          });
        });
};*/

// Another way
export const getOneStudent = async(req,res)=>{
    try{
        //let payload = req.body
        let payload= req.params;
        let studentsData =await oneStu(payload);

       return res.status(200).json({student:studentsData,message:"successfully getting"});
    }
    catch(err){
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    }    
}

// Update the detail of students
/*export const updateStudent = async (req, res) => {
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
}; */

// Another way
export const updateStudent = async (req, res) => {
    try {
        let payload= req.body;

        let editData = await edit(payload);        
        console.log(req.body)
        return res.status(200).json({student:editData,message:"updated successfully"})
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

// Delete the student
/*export const deleteStudent  = async (req, res) => {
    try {
        let payload= req.body;
      let student=  await Student.destroy({
            where:{
                id:payload.id
            }
        });
        return res.status(200).json({student:student,message:"deleted successfully"})
    } 
    catch (error) {
        console.log("err-------",err);
        res.status(400).json({error:error.message});
    }
};*/

// Another way
export const deleteStudent = async (req, res) => {
    try {
        let payload= req.body;

        let deleteData = await remove(payload); 
        return res.status(200).json({student:deleteData,message:"Deleted successfully"})
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

