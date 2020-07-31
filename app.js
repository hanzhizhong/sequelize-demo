const {user}=require('./models')

user.findAll({raw:true,attributes:{exclude:'passwd'}}).then(ret=>{
    console.log('sss',ret)
})