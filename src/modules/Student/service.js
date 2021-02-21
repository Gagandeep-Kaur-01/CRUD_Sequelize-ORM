const db = require('../../models');
const Student = db.student;

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








