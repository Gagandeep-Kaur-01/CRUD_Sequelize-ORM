module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("post", {
    
        text: {
			type: DataTypes.STRING,
			allowNull: false
		}
    });

   
    return Post;

}    