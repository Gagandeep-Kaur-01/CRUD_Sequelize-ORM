import { findOne, findAll, findWithPagination, findById, UpdateOne, UpdateById, UpdateMany, DeleteOne, DeleteById, DeleteMany } from '../../helpers/commonFunctions';
'../../helpers/commonFunctions'
const db = require('../../models');
const Student = db.student;

//************************************************* Creating/ Inserting student data ******************************************************
export const create = async payload =>{    
    let data= await Student.create({
        name: payload.name,
        email: payload.email,
        password: payload.password,
        mobileNo: payload.mobileNo,
        city: payload.city,
        address: payload.address,
        state: payload.state,
        zip: payload.zip,
        Active: payload.Active,
        test: payload.test,
        testing: payload.testing,
        testingColumn1: payload.testingColumn1,
        newColumn: payload.newColumn,
        status: payload.status,
    })
    return data
}

//***************************************************************** Getting one student (findOne) *************************************
// 1 way
// export const oneStu = async payload => {

//     let oneS = await Student.findOne({
//         where: {
//             id: payload.id 
//         }
//     })
//         return oneS;
// } 


/* Another way 2
export const oneStu = async payload => {
    // getting one student record
     return await Student.findOne({
           where: {
               id: payload.id
           }
       }).then(getStu => {
           return getStu;
       });
   }; */
   

// Another way  (common function)
export const oneStu = async (payload) => {
    const condition = {name:payload.name};
    const getOne = await findOne(Student, condition);   
    return getOne;
} 

//***************************************************************** Getting by Id  *************************************
// (common function)
export const StuId = async (payload) => {
    const condition = {id:payload.id};
    const getIdOne = await findById(Student, condition);   
    return getIdOne;
} 


//***************************************************************** Get detail of all the students *************************************
//    export const AllStu = async payload => {
//     return await Student.findAll({
//         attributes: ["name","email", "mobileNo","address"],
//     })
//           .then(data => {
//           return data;
//     })
// }

// Another way  (common function)
export const AllStu = async (payload) => {
    const attributes= ["name","email", "mobileNo","address"];
    const condition = {Active:payload.Active=true};
    const getAll = await findAll(Student, condition, attributes); 
    return getAll;
}    

//************************************************************** Get detail of all the students with count *************************************
// export const AllStu_Count = async payload => {
//     return await Student.findAndCountAll({
//         where: {Active:payload.Active=true},
//         attributes: ["name","email", "mobileNo","address"],
//         limit: 10,
//     })
//           .then(data => {
//           return data;
//     })
// }

// Another way  (common function)

export const AllStu_Count = async (payload) => {
    const condition = {Active:payload.Active=true};
    const getAllCount = await findWithPagination(Student, condition); 
    return getAllCount;
} 


//************************************************************** Updating the student ~ UpdateOne *************************************
// export const edit = async payload => {
//     // Updating the student record
//         let updated = await Student.update(payload, {
//             where: {
//                 id: payload.id
//             }
//         })
//         console.log(updated)
//             return updated;
//     } 
    
// Another way -------------------------------------
// export const edit = async payload => {    
//     // Updating the student record
//     return await Student.update(payload, {
//         where: {
//             id: payload.id
//         }
//     }).then(updated => {
//         return updated;
//     });
// };    


// Another way  (common function)
export const edit = async payload => {
    const condition = {name:payload.name};
    const updateQuery = payload;
    const editOne = await UpdateOne(Student, condition, updateQuery);   
    return editOne;
} 

//**************************************************************  UpdateById *************************************
// common function
export const editById = async (payload) => {
    const condition = {id:payload.id};
    const updateQuery = payload;
    const editData = await UpdateById(Student, condition, updateQuery);
    return editData;
} 

//**************************************************************  UpdateMany *************************************
// common function
export const editMany = async (payload) => {
    let condition = {id:[2,4]};
    //const condition = {id:payload.id};
    const updateQuery = payload;
    const editData = await UpdateMany(Student, condition, updateQuery);
    return editData;
} 

//**************************************************************  DeleteOne ************************************* 
// export const removeOne = async payload => {    
//     // Deleting the student record
//     let deleted = await Student.destroy({
//         where: {
//             id: payload.id
//         }
//     })
//     return deleted;
// }     

// Another way  (common function)
export const removeOne = async payload => {
    const condition = {name:payload.name};
    const deleteOne = await DeleteOne(Student, condition);   
    return deleteOne;
} 

//**************************************************************  DeleteById ************************************* 
export const removeById = async payload => {
    const condition = {id:payload.id};
    const deleteById = await DeleteById(Student, condition);   
    return deleteById;
} 

//**************************************************************  DeleteMany ************************************* 
export const removeMany = async payload => {
    let condition = {id:[1,2]};
    const deleteById = await DeleteMany(Student, condition);   
    return deleteById;
}   
    


