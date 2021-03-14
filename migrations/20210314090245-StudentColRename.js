'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return Promise.all ([ 
      queryInterface.renameColumn(
        'students',     // tablename
        'emailOrNumber', // previous column name
        'email'         // new column name
      ),
    ])
  },


  down: async (queryInterface, Sequelize) => {
    return Promise.all ([
      queryInterface.renameColumn('students', 'email', 'emailOrNumber'),
    ]); 
  }
};
