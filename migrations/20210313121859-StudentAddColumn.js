'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all ([ 
      queryInterface.addColumn(
      'students', // table name
      'gender', // new field name/ attribute name
       {  // attribute definition
       type: Sequelize.STRING,
       allowNull: false,
       },
      ), 
      queryInterface.addColumn(
        'students', 
        'age',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
    ])   
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all ([
      queryInterface.removeColumn('students', 'gender'),
      queryInterface.removeColumn('students', 'age'),
    ]);  
  }
};