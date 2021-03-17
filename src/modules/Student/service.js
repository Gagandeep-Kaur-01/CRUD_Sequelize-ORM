import { findOne, findAll, findWithPagination, findById, UpdateOne, UpdateById, UpdateMany } from '../../helpers/commonFunctions';
'../../helpers/commonFunctions'
const db = require('../../models');
const Student = db.student;

// Creating the student ####################################
export const create = async payload =>{    
    let data= await Student.create({
        name: payload.name,
        email: payload.email,
        mobileNo: payload.mobileNo,
        city: payload.city,
        address: payload.address,
        state: payload.state,
        zip: payload.zip,
        Active: payload.Active
    })
    return data
}

//******************** Getting one student*******************
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

//******************** Getting by Id (common function)*******************
export const StuId = async (payload) => {
    const condition = {id:payload.id};
    const getIdOne = await findById(Student, condition);   
    return getIdOne;
} 



//******************** Get detail of all the students********************

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

//******************** Get detail of all the students with count********************
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

//******************** Updating the student ~ UpdateOne********************
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

//******************** UpdateById (common function)********************
export const editById = async (payload) => {
    const condition = {id:payload.id};
    const updateQuery = payload;
    const editData = await UpdateById(Student, condition, updateQuery);
    return editData;
} 

//******************** UpdateMany (common function)********************
export const editMany = async (payload) => {
    let condition = {id:[2,4]};
    //const condition = {id:payload.id};
    const updateQuery = payload;
    const editData = await UpdateMany(Student, condition, updateQuery);
    return editData;
} 











// export const StuId = async (payload) => {
//     const condition = {id:payload.id};
//     const getIdOne = await findById(Student, condition);   
//     return getIdOne;





    
//******************** Deleting the student********************
export const remove = async payload => {    
    // Deleting the student record
    let deleted = await Student.destroy({
        where: {
            id: payload.id
        }
    })
    return deleted;
}     
    


// Create common functions for:-
// findOne
// findAll
// findAllAndCount
// findByID
// update one
// Update many
// Update by I'd


//whereQuery = {where: {id: "4444"}}
//    attributes: [name, id, class, address]
//    exclude: [updatedBy, updatedAt,]
//    findOne(Student, whereQuery, attributes, exclude)
//   --> findOne(Student, whereQuery)


