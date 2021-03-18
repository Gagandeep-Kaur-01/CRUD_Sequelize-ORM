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

exports.update = (req,res)=>{
    let modelName= req.body.modelName;
    console.log("---modelName--",modelName);
    db[modelName].update(req.body.updateObj,{where:whereObj})
            .then((data)=>{
                res.json({value:true,data:"updated successfully"})
            })
            .catch((err)=>{
                console.log("--err---",err);
                res.json({value:true,data:"error while updating"})
            })
}

exports.deleteModel = (req,res)=>{
    let modelName= req.body.modelName;
    console.log("---modelName--",modelName);
    db[modelName].destroy({where:whereObj})
            .then((data)=>{
                res.json({value:true,data:"deleted successfully"})
            })
            .catch((err)=>{
                console.log("--err---",err);
                res.json({value:true,data:err})
            })

}
