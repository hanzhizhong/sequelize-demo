const {Model}=require('sequelize')

module.exports=(sequelize,DataTypes)=>{
    class Blog extends Model{
        static associate(models){

        }
    }
    Blog.init({
        title:{
            type:DataTypes.STRING,
            allowNull:false 
        },
        content:{
            type:DataTypes.TEXT
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{
        sequelize,
        modelName:"blog",
        tableName:"blogs",
        timestamps:true,
        createdAt:'published_at',
        updatedAt:'updated_at'
    })
    return Blog
}