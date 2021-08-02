const { PrismaClient } = require('@prisma/client');
const { response } = require('express');
const prisma = new PrismaClient()


const getHomeText = async ( req , res ) => {
    try {
        let homeText = await prisma.home.findMany({ include: { Images: true } })
        res.json(homeText)
    } catch (error) {
        console.log(error)
    }
}

const getHomeTextById = async ( req , res ) => {
    try {
        let { id } = req.params
        let homeTextId = await prisma.home.findFirst({
            include : { Images : true },
            where : { Id : parseInt(id) }
        })
        res.json(homeTextId)
    } catch (error) {
        console.log(error)
    }
}
 const deleteHomeText = async ( req , res ) => {
    try {
        let { id } = req.params
        let checkHomeText = await prisma.home.findFirst({
            where : { Id : parseInt(id) }
        })
        if (checkHomeText) {
            await prisma.home.delete({
                where : { Id : parseInt(id) }
            })
            res.json({msg: 'Anasayfa Metin İçeriği Silindi..'})
        } else {
            res.json({msg: 'Anasayfada Metin İçeriği Bulunamadı..'})
        }
    } catch (error) {
        console.log(error)
    }
}
const createHomeText = async ( req , res ) => {
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
                                console.log(`store/${fileName}`)
                                 images.push({path: `http://localhost:5000/store/${fileName}`})
                             resolve();
                             }
                         })
                     });
                     uploads.push(promise);
                 }
             }
             Promise.all(uploads).then(async function() {
                 let { title , description } = req.body
                 let home = await prisma.home.create({
                     data : {
                         title,
                         description,
                         Images : {
                             create : images
                         }
                     }
                 })
                 res.json(home)
             }).catch(function(err) {
                 res.send(err);
             })
         } catch (error) {
             console.log(error)
         } 
}
const updateHomeText = async ( req, res ) => {
    try {
        var uploads = [];
        var images = [];
        if(req.files && "files" in req.files) {  
            for (const file of req.files.files) {
                const fileName = file.name;
                let promise = new Promise(function(resolve, reject) {
                    file.mv(`${__dirname}/../store/${fileName}`, function(err){
                        if (err) {
                            reject(err);
                        } else {
                            images.push({path: `${__dirname}/../store/${fileName}`})
                            resolve();
                        }
                    })
                });
                uploads.push(promise);
            }
        }
        Promise.all(uploads).then(async function() {
            let { id } = req.params;
            let { title , description } = req.body
            let updateHome = await prisma.home.update({
                where : { id : parseInt(id)},
                data : {
                    title,
                    description,
                    Images : {
                        create : images
                    }
                }
            })
            res.json(updateHome)
        }).catch(function(err) {
            res.send(err);
        })
    } catch (error) {
        console.log(error)
    }
}

// const createHomeText = async ( req , res ) => {
//     try {
//         let { title , description } = req.body
//         let HomeText = await prisma.home.create({
//             data: {
//                 title,
//                 description
//             }
//         })
//         res.json(HomeText)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const updateHomeText = async ( req , res ) => {
//     try {
//         let { id } = req.params
//         let { title , description } = req.body
//         let HomeText = await prisma.home.update({
//             where : {Id : parseInt(id)},
//             data : { 
//                 title,
//                 description
//             }
//         })
//         res.json(HomeText)
//     } catch (error) {
//         console.log(error)
//     }
// }

module.exports = {
    updateHomeText,
    createHomeText,
    deleteHomeText,
    getHomeText,
    getHomeTextById
}