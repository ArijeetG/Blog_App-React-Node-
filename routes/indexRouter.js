const express = require('express')
const mysql = require('mysql')
const {pool} = require('../config')

const router = express.Router()
//newBlog to add a new Blog
router.post('/newBlog',(req,res)=>{
    console.log(req.body)
    var data = req.body
    data.date = new Date(Date.now())
    pool.query('INSERT INTO users SET ? ',req.body,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
//allBlogs to view all Blogs in database
router.get('/allBlogs',(req,res)=>{
    pool.query('SELECT * FROM users',(err,result)=>{
        if(err) throw err
        console.log(result)
        res.send(result)
    })
})
//deleteBlog will delete a blog from database and uses the user_id as a primary key
router.post('/deleteBlog',(req,res)=>{
    console.log(req.body.id)
    pool.query('DELETE FROM users WHERE user_id=?',req.body.id,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
//updateBlog will update a blog using user_id as a reference
router.put('/updateBlog',(req,res)=>{
    pool.query('UPDATE users SET user_name=?, description=?, title=? where user_id=?',[req.body.user_name, req.body.description, req.body.title, req.body.user_id],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

module.exports = router