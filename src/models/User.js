module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
    
        username: {
			type: DataTypes.STRING,
			allowNull: false,
			required: true,
		}
    });

     /* 
    User.associate = models => {
        
        User.hasMany(models.Post, {
            onDelete: "cascade"      -- on deleting user, it will delete all the posts associate with that user
        });

        User.hasOne(models.Profile, {
            onDelete: "cascade"
        });
    }; 
    */

   return User;
};
