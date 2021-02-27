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

/* Another way
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








