module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("student", {
    
        name: {
			type: DataTypes.STRING,
			allowNull: false,
			required: true,
		},
        emailOrNumber:DataTypes.STRING,
        mobileNo: {
			type: DataTypes.STRING,
			unique: true,
		},
        city: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '',
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '',
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '',
		},
		zip: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '',
		},
		class: {
			type: DataTypes.STRING,
			defaultValue: '',
		},
		quiz: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '',
		},
    });
  
    return Student;
  };
