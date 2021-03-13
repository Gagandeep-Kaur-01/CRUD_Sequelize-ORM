'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all ([ 
      queryInterface.addColumn(
      'students', // table name
      'class', // new field name/ attribute name
       {  // attribute definition
       type: Sequelize.STRING
       },
      ), 
      queryInterface.addColumn(
        'students', 
        'quiz',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
    ])   
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all ([
      queryInterface.removeColumn('students', 'class'),
      queryInterface.removeColumn('students', 'quiz'),
    ]);  
  }
};