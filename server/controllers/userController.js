const { PrismaClient } = require('@prisma/client');
const { response } = require('express');
const prisma = new PrismaClient()



// get all users
const getUsers = async (request, response) => {
 try {
  const allUsers = await prisma.user.findMany()
  response.json(allUsers);
 } catch (error) {
   console.log(error)
 }
};
// get one users
const getUserById = async (request, response) => {
  // object destructing
    try {
      let { id } = request.params;
      let userId = await prisma.user.findFirst({
    where: { id: parseInt(id) },
  })
      response.json(userId)
    } catch (error) {
      console.log(error)
  }
};
// create users
const createUser = async (req,res, next) => {
  try {
    const { email , password , name } = req.body
    let user = await prisma.user.create({
      data : {
        email : email,
        name: name,
        password: password
      }
    })
    res.json(user);
  } catch (error) {
    console.log(error) 
  }
}
const updateUser = async (req,res) =>{
  try {
    let { id } = req.params
    let { email , password , name } = req.body;
    let updateUser = await prisma.user.update({
      where : { id: parseInt(id)},
      data : {
        email: email,
        name: name,
        password : password,
      }
    })
    res.json(updateUser)
  } catch (error) {
    console.log(error)
  }
}
const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    let checkUser = await prisma.user.findFirst({
      where : { id : parseInt(id) }
    })
   if (checkUser) {
      await prisma.user.delete({
      where : { id: parseInt(id)}
    })
    res.json({msg: 'Kullanici silindi'})
  } else {
    res.json({msg: 'Kullanici Bulunamadi'})
  }
    
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
};
