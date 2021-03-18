const db = require("../models")

exports.findOne = (tableName, condition) => {
    try {
       return tableName.findOne({
           where: 
             condition
                  
        }).then(getdata => {
            return getdata
        })
    } 
    catch(err) {
        throw new Error(err);
    } 
}

exports.findById = (tableName, condition) => {
    try {
       return tableName.findOne({
           where: 
             condition
                  
        }).then(getdata => {
            return getdata
        })
    } 
    catch(err) {
        throw new Error(err);
    } 
}

exports.findAll = (tableName, condition) => {
    try {
        return tableName.findAll({
            where: condition
                   
         }).then(getdata => {
             return getdata
         })
     } 
     catch(err) {
         throw new Error(err);
     }
}

exports.findWithPagination = (tableName, condition) => {

    let limit = 5;   // number of records per page
    let offset = 0;
    try {
        return tableName.findAndCountAll({
            where: condition,
            limit: limit,
            offset: offset
                   
         }).then(getdata => {
             return getdata
         })
     } 
     catch(err) {
         throw new Error(err);
     }
}


exports.UpdateOne = (tableName, condition, query) => {
    try {
       return tableName.update(query,{
           where: 
             condition                  
        }).then(getdata => {
            console.log(tableName, condition)
            return tableName.findOne({
                where: condition
            }).then(data => {
                return data;
            })
        })
    } 
    catch(err) {
        console.log(err)
        throw new Error(err);        
    } 
}

exports.UpdateById = (tableName, condition, query) => {
    try {
       return tableName.update(
           query,{
           where: condition ,           
           returning: true, 
           plain: false               
        }).then(getdata => {
            console.log(tableName, condition)
            //return getdata
            console.log(query);
            console.log(getdata);
        return (getdata); 
          })   
    } 
    catch(err) {
        console.log(err)
        throw new Error(err);        
    } 
}


exports.UpdateMany = (tableName, condition, query) => {
    try {
      return tableName.update(query,
        {
           where: condition,           
           returning: true, 
           plain: false
        }).then(function (result) {
            console.log(result);
            return result;  
          });        
    } 
    catch(err) {
        console.log(err)
        throw new Error(err);        
    } 
}

exports.DeleteOne = (tableName, condition) => {
    try {
       return tableName.destroy({
           where: 
             condition                  
        }).then(getdata => {
            console.log(tableName, condition, getdata)
            return getdata;
        })
    } 
    catch(err) {
        console.log(err)
        throw new Error(err);        
    } 
}

exports.DeleteById = (tableName, condition) => {
    try {
       return tableName.destroy({
           where: 
             condition                  
        }).then(getdata => {
            console.log(tableName, condition, getdata)
            return getdata;
        })
    } 
    catch(err) {
        console.log(err)
        throw new Error(err);        
    } 
}

exports.DeleteMany = (tableName, condition) => {
    try {
       return tableName.destroy({
           where: 
             condition                  
        }).then(getdata => {
            console.log(tableName, condition, getdata)
            return getdata;
        })
    } 
    catch(err) {
        console.log(err)
        throw new Error(err);        
    } 
}
