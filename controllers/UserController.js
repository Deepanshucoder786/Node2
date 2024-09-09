const users= require('../users.json')
const { json } = require("express");

function getuser(req,res) {
   
    try {
        res.json(users)
    } catch (error) {
        
    }

    
}

function getParticularUser(req,res) {
    try {
        let id=parseInt(req.params.id)
        let user= users.find((user)=>user.id===id)
        res.json(user)
    } catch (error) {
      console.log(error)
    }
    
}

module.exports={
    getuser,getParticularUser
}

