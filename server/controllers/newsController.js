const { PrismaClient } = require('@prisma/client');
const { response } = require('express');
const prisma = new PrismaClient()


const getNews = async ( req , res ) => {
    try {
        let News = await prisma.news.findMany({ include: { Images: true } })
        res.json(News)                         
    } catch (error) {
        console.log(News)
    }
}
const getNewsById = async ( req , res) => {
    try {
        let { id } = req.params
        let NewsId = await prisma.news.findFirst({               
            where : { id : parseInt(id)}
        })  
        res.json(NewsId)
    } catch (error) {
        console.log(NewsId)
    }
}
const createNews = async ( req , res ) => {
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
             let { title , subtitle , description } = req.body
             let news = await prisma.news.create({
                 data : {
                     title,
                     subtitle,
                     description,
                     Images : {
                         create : images
                     }
                 }
             })
             res.json(news)
         }).catch(function(err) {
             res.send(err);
         })
     } catch (error) {
         console.log(error)
     } 
}
const updateNews = async ( req, res ) => {
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
            let { title , subtitle , description } = req.body
            let updateNews = await prisma.news.update({
                where : { id : parseInt(id)},
                data : {
                    title,
                    subtitle,
                    description,
                    Images : {
                        create : images
                    }
                }
            })
            res.json(updateNews)
        }).catch(function(err) {
            res.send(err);
        })
    } catch (error) {
        console.log(error)
    }
}
const deleteNews = async (req, res) => {
    try {
      let { id } = req.params;
      let checkNews = await prisma.news.findFirst({
        where : { id : parseInt(id) }
      })
     if (checkNews) {
        await prisma.news.delete({
        where : { id: parseInt(id)}
      })
      res.json({msg: 'Haber Silindi'})
    } else {
      res.json({msg: 'Haber Bulunamadi'})
    }  
    } catch (error) {
      console.log(error)
    }
  }
  module.exports = {
      deleteNews,
      createNews,
      getNewsById,
      getNews,
      updateNews,
  };
