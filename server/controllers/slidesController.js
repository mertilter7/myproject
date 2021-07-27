const { PrismaClient } = require('@prisma/client');
const { response } = require('express');
const prisma = new PrismaClient()


const getSlides = async ( req , res ) => {
    try {
        let Slides = await prisma.slides.findMany({include : { Images : true }})
        res.json(Slides)
    } catch (error) {
        console.log(error)
    }
}
const getSlidesById = async ( req , res ) => {
    try {
        let { id } = req.params.id
        let Slides = await prisma.slides.findFirst({
            where : { id : parseInt(id)}
        })
        res.json(Slides)
    } catch (error) {
        console.log(error)
    }
}
const createSlides = async ( req , res ) => {
    try {
        var uploads = [];
        var images = [];
        if("files" in req && "files" in req.files) {
               for (const file of req.files.files) {
                   const fileName = file.name;
                  let promise = new Promise(function(resolve, reject) {
                        file.mv(`${__dirname}/../store/${fileName}`, function(err){
                      if (err) {
                             reject(err);       
                         } else {
                             images.push({path: `store/${fileName}`})
                                resolve();
                            }
                        })
                    });
                    uploads.push(promise);
               }
            }
            Promise.all(uploads).then(async function() {
                let slides = await prisma.slides.create({
                    data : {
                        Images : {
                            create : images
                        }
                    }
               })
                res.json(slides)
            }).catch(function(err) {
                res.send(err);
            })
        } catch (error) {
            console.log(error)
      } 
}

const deleteSlides = async ( req , res ) => {
    try {
        let { id } = req.params.id
        let checkSlides = await prisma.slides.findFirst({
            where : {id : parseInt(id)}
        })
        if (checkSlides) {
            await prisma.slides.delete({
                where : { id : parseInt(id) }
            })
            res.json({msg: 'Slayt Silindi'})
        } else {
            res.json({msg: 'Slayt bulunamadı'})
        }

    } catch (error) {
        console.log(error)
    }
}
const updateSlides = async ( req , res) => {
    try {
        var uploads = []
        var images = []
        if("files" in req && "files" in req.files) {
            for (const file of req.files.files){ 
                const fileName = file.name
                let promise = new Promise(function(resolve, reject) {
                    file.mv(`${__dirname}/../store/${fileName}`, function(err){
                        if (err) {
                            reject(err)
                        } else {
                            images.push({path: `store/${fileName}`})
                            resolve();
                        }
                    })
                })
                uploads.push(promise)
            }
        }
        promise.all(uploads).then(async function() {
            let { id } = req.params
            let updateSlides = await prisma.slides.update({
                where : { id : parseInt(id) },
                data : {
                    Images : {
                        create : images
                    }
                }
            })
            res.json(updateSlides)
        }).catch(function(err) {
            res.send(err)
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getSlides,
    getSlidesById,
    deleteSlides,
    createSlides,
    updateSlides,
}