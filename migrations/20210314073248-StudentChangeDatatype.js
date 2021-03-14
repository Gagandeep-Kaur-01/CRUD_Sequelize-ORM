'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'students', 
        'quiz', 
        {
        type: Sequelize.FLOAT
        }
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.changeColumn('students', 'quiz', {
      type: Sequelize.INTEGER
    })]);
  }
};