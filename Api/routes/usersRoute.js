
import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controller/userController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const router = express.Router()

// // Authorized Checking
// router.get("/checkauthentication",verifyToken,(req,res,next) => {
//     res.send("Hello user, You are Loged in")
// })

// // Check User

// router.get("/checkuser/:id",verifyUser,(req,res,next) => {
//     res.send("Hello user, You are Logged in You can delete your account")
// })

// // Check Admin
// router.get("/chechadmin/:id",verifyAdmin,(req,res,next) => {
//     res.send("Hello Admin, You are Logged in You can delete All account")
// })

// UPDATE
router.put("/:id",verifyUser,updateUser)
// DELETE
router.delete("/:id",verifyUser,deleteUser)
//GET
router.get("/:id",verifyUser,getUser)
//GET ALL
router.get("/",verifyAdmin,getUsers)


export default router