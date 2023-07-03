const User = require('../models/User');

const getUsers = async (req, res) => {
  try{
    const users = await User.find();
    res.status(200).json({
      message:"Get users Success",
      data:users
    })
  }catch(error){
    res.status(500).json({
      message:"Get users failed",
      data:error
    })
  }
};

const saveUser = async (req, res) => {
  try{
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json({
      message:"Save user success",
      data:savedUser
    })
  } catch(error){
    res.status(500).json({
      message:"Get users failed",
      data:error
    })
  }
};
const deleteUser = async (req, res) => {
  const usertId = req.params.id;
  try{
    const deleteUser = await User.findByIdAndDelete(userId, req.body)

    res.status(200).json({
      message:"Delete user success",
    })
  } catch(error){

  }
};


module.exports = {
  getUsers,
  saveUser,
  deleteUser
}