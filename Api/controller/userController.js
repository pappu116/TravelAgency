import User from "../models/User.js"


// Update Hotel Controller
export const updateUser = async (req,res,next) =>{
    try {
        const updateUser = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateUser)
    } catch (error) {
        next(error)
        
    }
}

// Delete Hotel Controller
export const deleteUser = async (req,res,next) =>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User Has Been Delete")
    } catch (error) {
        next(error)
        
    }
}

// Get a Hotels Controller
export const getUser = async (req,res,next) =>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
        
    }
}

// Get All Hotels Controller
export const getUsers = async (req,res,next) =>{
    try {
        const users = await User.find(req.params.id)
        res.status(200).json(users)
    } catch (error) {
        next(error)
        
    }
}
