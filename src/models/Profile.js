module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("profile", {
    
        name: {
			type: DataTypes.STRING,
			allowNull: false,
			required: true,
		}
    });

     /*
    Profile.associate = models => {
        Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    */

 
    return Profile;

}    