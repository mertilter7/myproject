 const { PrismaClient } = require('@prisma/client');
 const { response } = require('express');
 const prisma = new PrismaClient()


 const getProducts = async ( req , res ) => {
     try {
         let Products = await prisma.products.findMany({ include : { Images : true }})
         res.json(Products)
     } catch (error) {
         console.log(error)
     }
 }
 const getProductsById = async ( req , res ) => {
     try {
         let { id } = req.params.id
         let ProductsId = await prisma.products.findFirst({
             where : { id : parseInt(id)},
         })
         res.json(ProductsId)
     } catch (error) {
         console.log(error)
     }
 }
 const createProducts = async ( req , res ) => {
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
                let { title , subtitle , description , price } = req.body;
                let products = await prisma.products.create({
                    data : {
                        title,
                        subtitle,
                        description,
                        price,
                        Images : {
                            create : images
                        }
                    }
               })
                res.json(products)
            }).catch(function(err) {
                res.send(err);
            })
        } catch (error) {
            console.log(error)
      } 
 }
 const updateProducts = async ( req , res ) => {
    try {
        var uploads = [];
        var images = [];
        if("files" in req && "files" in req.files) {
            for ( const file of req.files.files) {
                const fileName = file.name;
                let promise = new Promise(function(resolve, reject) {
                    file.mv(`${__dirname}/../store/${fileName}`, function(err) {
                        if(err) {
                            reject(err)
                        } else {
                            images.push({ path : `store/${fileName}`})
                            resolve();
                        }
                    })
                })
                uploads.push(promise)
            }
        }
        Promise.all(uploads).then(async function () {
            let { id } = req.params
            let { title , description , price } = req.body; 
            let products = await prisma.products.update({
                where : { id : parseInt(id)},
                data : {
                    title ,
                    price,
                    description,
                    Images : {
                        create : images
                    }
                }
            })
            res.json(products)
        }).catch(function(err) {
            res.send(err);
        })
    } catch (error) {
        console.log(error)
    }
 }
 const deleteProducts = async ( req , res ) => {
     try {
         let { id } = req.params.id
         let checkProducts = await prisma.products.findFirst({
             where : { id : parseInt(id)}
         })
         if (checkProducts) {
             await prisma.products.delete({
                 where : { id : parseInt(id) }
             })
             res.json({msg: 'Ürün Silindi..'})
         } else {
             res.json({ msg :'Haber Bulunamadı..'})
         }
     } catch (error) {
        console.log(error)
     }
 }
 
 module.exports = {
     getProducts,
     getProductsById,
     createProducts,
     deleteProducts,
     updateProducts,
 };