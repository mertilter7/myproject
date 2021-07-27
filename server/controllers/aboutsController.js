const { PrismaClient } = require('@prisma/client');
const { response } = require('express');
const prisma = new PrismaClient()


const getAbouts = async ( req , res ) => {
    try {
        let abouts = await prisma.abouts.findMany();
        res.json(abouts)
    } catch (error) {
        console.log(error)
    }
}

const getAboutById = async ( req , res ) => {
    try {
        let { id } = req.params
        let aboutId = await prisma.abouts.findFirst({
            where : {Id : parseInt(id)}
        })
        res.json(aboutId)
    } catch (error) {
        console.log(error)
    }
}

const deleteAbouts = async ( req , res ) => {
     try {
         let { id } = req.params
         let checkAbouts = await prisma.abouts.findFirst({
             where : { Id : parseInt(id)}
         })
         if (checkAbouts) {
             await prisma.abouts.delete({
                 where : {Id : parseInt(id)}
             })
             res.send({msg : "Hakkimizda Sayfası İçeriği Temizlendi.."})
         } else {
             res.send({msg: "Hakkimizda Sayfasında İçerik Bulunamadı.."})
         }
     } catch (error) {
         console.log(error)
     }
}

const createAbouts = async ( req , res ) => {
    try {
        let { title , description } = req.body
        let abouts = await prisma.abouts.create({
            data : {
                title,
                description
            }
        })
        res.json(abouts)
    } catch (error) {
        console.log(error)
    }
}

const updateAbouts = async ( req , res ) => {
    try {
        let { id } = req.params
        let { title , description } = req.body
        let abouts = await prisma.abouts.update({
            where : {Id: parseInt(id)},
            data : {
                title,
                description
            }
        })
        res.json(abouts)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAbouts,
    getAboutById,
    updateAbouts,
    createAbouts,
    deleteAbouts
}