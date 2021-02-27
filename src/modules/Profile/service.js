const db = require('../../models');
const Profile = db.profile;
const Client = db.client;

export const create = async payload =>{

let data= await Profile.create({
        name: payload.name,
        userId: payload.userId
    })
    return data

}








