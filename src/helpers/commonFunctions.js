const db = require("../models")



exports.create = (req,res)=>{    
    let modelName= req.body.modelName;
    console.log("---modelName--",modelName);
    db[modelName].create(req.body.createObj)
        .then((data)=>{
            res.json({value:true,data:"created successfully"})
        })
        .catch((err)=>{
            let exc;
            err.errors[0].message?exc=err.errors[0].message:exc=err
            res.json({value:false,error:exc})
        }) 
}

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
//     db[req.body.modelName].findAndCountAll({where:whereObj})
//     .then((data) => {
//       let page = req.body.page;      // page number
//       let pages = Math.ceil(data.count / limit);
//           offset = limit * (page - 1);
//           db[req.body.modelName].findAll({
//               where:whereObj,
//         attributes: req.body.attributes,
//         limit: limit,
//         offset: offset,
//         $sort: { id: 1 }
//       })
//       .then((result) => {
//         res.status(200).json({'result': result, 'count': data.count, 'pages': pages});
//       });
//     })
//     .catch(function (error) {
//           res.status(500).send('Internal Server Error');
//       });
// }

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

// exports.UpdateMany = (tableName, ids, query) => {
//     try {
//       return tableName.update({query},
//         {
//            where: 
//              {id: ids} }            
//         ).then(getdata => {
//             console.log(tableName, ids)
//             return query
//          })
//          .then(([affectedCount, affectedRows]) => {
//             // Notice that affectedRows will only be defined in dialects which support returning: true
          
//             // affectedCount will be 2
//             return tableName.findAll();
//           }).then(data => {
//             console.log(data) // the 'programming' tasks will both have a status of 'inactive'
//           });          
//     } 
//     catch(err) {
//         console.log(err)
//         throw new Error(err);        
//     } 
// }

// FindbyId then update
//exports.UpdateById = (tableName, condition, query) => {
//     try {
//          return tableName.findOne({
//             where: condition
//          }).then(updata => {
//             console.log(tableName, condition)
//             return tableName.update(query,{
//                 where: 
//                   condition                  
//              })
//           }).then(getdata => {
//                 console.log(tableName, condition)
//                 return tableName.findOne({
//                     where: condition
//                 }).then(data => {
//                     return data;
//                 })
//             })        
//         }
//         catch(err) {
//             console.log(err)
//             throw new Error(err);        
//         } 
//     }
//       

exports.update = (req,res)=>{
    /**
     * req:{
     *    modelname: 'user',
     *    updateObj:{
     *                 x:"sds",
     *                 y:"sdfd"
     *               },
     *    whereObj:{
     *          id:1
     *             }
     *      }
     * 
     */
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
