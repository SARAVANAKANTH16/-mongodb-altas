const mongoose = require('mongoose');
let database

async function getDatabase(){
    mongoose.connect('mongodb+srv://SARAVANAKANTH:'+encodeURIComponent('Sk2002js@')+'@cluster0.gogyvtg.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log('Database connected!')
    }).catch((err)=>{
        console.log('Database connection error',err)
    })
}

module.exports= {
    getDatabase
}