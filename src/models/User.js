module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
    
        username: {
			type: DataTypes.STRING,
			allowNull: false,
			required: true,
		}
    });

   return User;
};
