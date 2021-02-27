const db = require('../../models');
const Student = db.student;

// Creating the student ###########################
export const create = async payload =>{

let data= await Student.create({
        name: payload.name,
        emailOrNumber: payload.emailOrNumber,
        mobileNo: payload.mobileNo,
        city: payload.city,
        address: payload.address,
        state: payload.state,
        zip: payload.zip
    })
    return data
}

// Getting one student  ##############################   
export const oneStu = async payload => {

    let oneS = await Student.findOne({
        where: {
            id: payload.id 
        }
    })
        return oneS;
} 

/* Another way for getting the student
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

// Updating the student   ###########################
export const edit = async payload => {
    // Updating the student record
        let updated = await Student.update(payload, {
            where: {
                id: payload.id
            }
        })
            return updated;
    } 
    
    /* Another way for updating the details
    export const edit = async payload => {
    
     // Updating the student record
      return await Student.update(payload, {
            where: {
                id: payload.id
            }
        }).then(updated => {
            return updated;
        });
    }; */

 // Deleting the student  ##############################
export const remove = async payload => {

    // Deleting the student record
        let deleted = await Student.destroy({
            where: {
                id: payload.id
            }
        })
            return deleted;
} 






