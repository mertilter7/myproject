const { PrismaClient } = require('@prisma/client');
const { response } = require('express');
const prisma = new PrismaClient()


const getContact = async ( req , res ) => {
    try {
        let Contact = await prisma.contacts.findMany();
        res.json(Contact)
    } catch (error) {
        console.log(error)
    }
}

const getContactById = async ( req , res ) => {
    try {
        let { id } = req.params
        let ContactId = await prisma.contacts.findFirst({
            where : { Id : parseInt(id)},
        })
        res.json(ContactId)
    } catch (error) {
        console.log(error)
    }
} 

const updateContact = async ( req , res ) => {
    try {
        let { id } = req.params
        let { description } = req.body
        let contacts = await prisma.contacts.update({
            where : { Id : parseInt(id) },
            data : {
               description
            }
        })
        res.json(contacts)
    } catch (error) {
        console.log(error)
    }
}

const createContact = async ( req , res ) => {
    try {
        let { description } = req.body
        let contacts = await prisma.contacts.create({
            data : {
                description
            }
        })
        res.json(contacts)
    } catch (error) {
        console.log(error)
    }
}

const deleteContact = async ( req , res ) => {
    try {
        let { id } = req.params
        let checkContacts = await prisma.contacts.findFirst({
            where : { Id : parseInt(id) }
        })
        if (checkContacts) {
            await prisma.contacts.delete({
                where : { Id : parseInt(id) }
            })
            res.json({msg: 'İletişim Bilgileri Silindi..'})
        } else {
            res.json({msg: 'İletişim Bilgileri Bulunamadi..'})
        }
    } catch (error) {
            console.log(error)
    }
}

module.exports = {
    deleteContact,
    createContact,
    updateContact,
    getContactById,
    getContact
}