const {user,blog}=require('./models')

/* user.findAll({raw:true,attributes:{exclude:'passwd'}}).then(ret=>{
    console.log('sss',ret)
}).catch(err=>{
    console.log('error',err)
}) */
//console.log(user.tableName)
//user.hasMany(blog,{foreignKey:'user_id'})
blog.belongsTo(user,{foreignKey:'user_id'})
blog.findAll({include:[{model:user,attributes:{exclude:['passwd']}}]}).then(ret=>{
    console.log('blogs',JSON.stringify(ret,null,4))
}).catch(err=>{
    console.log('error',err)
})

