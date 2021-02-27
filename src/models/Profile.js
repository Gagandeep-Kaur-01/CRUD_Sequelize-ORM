module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("profile", {
    
        name: {
			type: DataTypes.STRING,
			allowNull: false,
			required: true,
		}
    });

 
    return Profile;

}    