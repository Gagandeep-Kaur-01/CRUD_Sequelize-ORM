module.exports = (sequelize, DataTypes) => {
	
    const Student = sequelize.define("student", {
    
        name: {
			type: DataTypes.STRING,
			allowNull: false,
			required: true,
		},
        email: DataTypes.STRING,
		password: DataTypes.STRING,
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
		Active: {
			type: DataTypes.BOOLEAN,
		},
		test:{
			type: DataTypes.STRING,
			allowNull: true,
		},        
		testingColumn1: {
            type: DataTypes.INTEGER,
			allowNull: true,
        },
		newColumn: {
            type: DataTypes.STRING,
			allowNull: true,
        },
		// 0 => Deleted, 1 => Active, 2 => InActive
		status: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
		},

    });
  
    return Student;
  };
