const {Model}=require('sequelize')

module.exports=(sequelize,DataTypes)=>{
    class User extends Model{
        static associate(models){

        }
    }
    User.init({
        username:{
            type:DataTypes.STRING,
            allowNull:false 
        },
        passwd:{
            type:DataTypes.STRING,
            allowNull:false 
        },
        gender:{
            type:DataTypes.ENUM,
            values:['male','female','none'],
            defaultValue:'male'
        },
        nickname:{
            type:DataTypes.STRING
        },
        birthday:{
            type:DataTypes.DATE,
            defaultValue:new Date(1980,6,20)
        }
    },{
        sequelize,
        modelName:"user",
        tableName:"users",
        timestamps:true,
        createdAt:'created_at',
        updatedAt:'updated_at'
    })
    return User
}