const pool=require('../config/db')

pool.query(
    `create table if not exists users(
    username varchar(100) primary key,
    password varchar(100)
    )`,(err,res)=>{
        if(err){
            console.log(err)
        }
    }
)