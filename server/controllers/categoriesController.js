 const { PrismaClient } = require('@prisma/client');
 const { response } = require('express');
 const prisma = new PrismaClient()


 const getCategories = async ( req , res ) => {
     try {
         let categories = await prisma.categories.findMany()
         res.json(categories)
     } catch (error) {
         console.log(error)
     }
 }

 const getCategoriesById = async ( req ,res ) => {
     try {
         let { id } = req.params.id
         let CategoriesById = await prisma.categories.findFirst({
             where : { id : parseInt(id)}
         })
         res.json(CategoriesById)
     } catch (error) {
         console.log(error)
     }
 }

 const createCategories = async ( req , res ) => {
     try {
        let { name , title , parent } = req.body
        const parentObj = parent ? {connect: {Id: parseInt(parent)}} : {};
       let categories = await prisma.categories.create({
            data : {
                name: name ,
                title: title,
                parent: parentObj,
             }
        })
       res.json(categories)
     } catch (error) {
         console.log(error)
     }
 }

 const deleteCategories = async ( req , res ) => {
     try {
         let { id } = req.params
         let checkCategories = await prisma.categories.findFirst({
             where : { Id : parseInt(id)}
         })
         if ( checkCategories ) {
             await prisma.categories.delete({
                 where : { Id : parseInt(id)}
             })
             res.json({msg : ' Kategori Silindi'})
         } else {
             res.json ({msg : 'Kategori Bulunamadi'})
         }
     } catch (error) {
         console.log(error)
     }
 }

 const updateCategories = async ( req , res ) => {
     try {
         let { id } = req.params
         let { name , parent } = req.body
         const parentObj = parent ? {connect: {Id: parseInt(parent)}} : {};
         let updateCategories = await prisma.categories.update({
             where : {Id : parseInt(id)},
             data : {
                 name,
                 parent: parentObj
             }
         })
         res.json(updateCategories)
     } catch (error) {
         console.log(error)
     }
 }

 module.exports = {
     getCategories,
     getCategoriesById,
     deleteCategories,
     createCategories,
     updateCategories
 }