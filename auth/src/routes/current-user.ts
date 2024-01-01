import express from 'express'

const router = express.Router();
//The express.Router() function is used to create a new router object. 
router.get('/api/users/currentuser',(req,res)=>{
res.send("hi there!")
})

export {router as currentUserRouter}