'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return Promise.all ([ 
      queryInterface.removeColumn('students', 'zip', 
      {
        type: Sequelize.STRING
      }),
    ])
  },


  down: async (queryInterface, Sequelize) => {
    return Promise.all ([
      queryInterface.addColumn('students', 'zip'),
    ]); 
  }
};
