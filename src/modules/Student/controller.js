import { create, edit, remove, oneStu, AllStu, AllStu_Count, StuId, editById, editMany } from './service';
const db = require('../../models');
const Student = db.student;

//************************** Create/ Insert details of student(s) *********************************
// => service.js
export const createStudent = async(req,res)=>{

    console.log("student data")
    try{
        console.log("Create Request")
        let studentData =await create(req.body);

       return res.status(200).json({student:studentData,message:"successfully added"});
        console.log("-------after response-----");
    }catch(err){
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    }
    
}

//************************* Get detail of one student ****************************

/*export const getOneStudent = async (req, res) => {
	Student.findOne({
        where: { id: req.params.id },
        include: [College]
    })
		.then(data => {
            res.json(data);
		})
		.catch(err => {
	      res.status(500).send({
              message: 
                err.message || "Some error occured while retrieving students."
          });
        });
};*/

// Getdetail of one student ~ Another way
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

//************************* Get detail of one student by Id ****************************
export const OneById = async(req,res)=>{
    try{
        //let payload = req.body
        let payload= req.params;
        let studentsData =await StuId(payload);

       return res.status(200).json({student:studentsData,message:"successfully getting"});
    }
    catch(err){
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    }    
}

//******************** Get detail of all the students********************

// export const getAllStudents = async (req, res) => {
// 	Student.findAll({})
// 		.then(data => {
//             res.json(data);
// 		})
// 		.catch(err => {
// 	      res.status(500).send({
//               message: 
//                 err.message || "Some error occured while retrieving students."
//           });
//         });
// };

// Get detail of all the students ~ Another way ********************
// => service.js
export const getAllStudents = async(req,res)=>{
    try{
        let payload= req.params;
        let studentsData =await AllStu(payload);
        console.log("Data")

       return res.status(200).json({students:studentsData,message:"successfully getting"});
    }
    catch(err){
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    }    
}

//******************** Get detail of all the students with count********************
// => service.js
export const getAllCount = async(req,res)=>{
    try{
        let payload= req.params;
        let studentsData =await AllStu_Count(payload);
        console.log("Data")
       return res.status(200).json({students:studentsData,message:"successfully getting"});
    }
    catch(err){
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    }    
}

//*************************** Update the detail of student *****************************
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

// Update the detail of student ~ Another way
export const updateStudent = async (req, res) => {
    try {
        let payload= req.body;
        let editData = await edit(payload);        
        console.log(req.body)

        return res.status(200).json({Updated_Student:editData,message:"updated successfully"})       
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

export const updateById = async(req,res)=>{
    try{
        let payload = req.body;
        let updatedData =await editById(payload);

       return res.status(200).json({Updated_Student:updatedData,message:"successfully getting"});      
    }
    catch(err){
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    }    
}

export const updateMany = async(req,res)=>{
    try{
        let payload = req.body;
        let updatedData =await editMany(payload);

       return res.status(200).json({Updated_Student:updatedData,message:"successfully getting"});
    }
    catch(err){
        console.log("err-------",err);
        res.status(400).json({error:err.message})
    }    
}

//**************************** Delete the student *****************************

/*export const deleteStudent  = async (req, res) => {
    try {
        console.log('Delete method')
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
}; */

// Delete the student ~ Another way
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






