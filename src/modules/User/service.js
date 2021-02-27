const db = require('../../models');
const User = db.user;

export const create = async payload =>{

let data= await User.create({
      username: payload.username
    })
    return data

}








