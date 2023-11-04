const user = require('../Model/userModel')
const express = require('express')
const routes = express.Router()


//  Create api for Post(create data)
routes.post("/post", async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const userAdded = await user.create({
            name: name,
            email: email,
            age: age
        });
        res.status(201).json(userAdded);
    } catch (error) {
        console.error("Error adding data:", error.message);
        res.status(400).json({ error: error.message });
    }
});

// get method

routes.get("/get", async(req,res)=>{
    try {
        const showall= await user.find();
        res.status(200).json(showall);
    } catch (error) {
        console.error("Error getting data:", error.message);
        res.status(400).json({ error: error.message });
    }
})

// get single user by email
routes.get("/getone/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const singleuser= await user.findById({_id:id});
        res.status(200).json(singleuser);
    } catch (error) {
        console.error("Error getting data:", error.message);
        res.status(400).json({ error: error.message });
    }
})

// delete operation
routes.delete("/delete/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const singleuser= await user.findByIdAndDelete({_id:id});
        res.status(200).json(id);
    } catch (error) {
        console.error("Error getting data:", error.message);
        res.status(400).json({ error: error.message });
    }
})

// updating the data using patch

routes.patch("/patch/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const updateuser= await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updateuser);
    } catch (error) {
        console.error("Error getting data:", error.message);
        res.status(400).json({ error: error.message });
    }
})

module.exports = routes;