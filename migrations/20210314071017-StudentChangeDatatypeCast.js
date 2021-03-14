'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'students', 
        'quiz', 
        {
        type: 'INTEGER USING CAST("quiz" as INTEGER)'
        }
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.changeColumn('students', 'quiz',
      {
      type: Sequelize.STRING,
      }
    )]);
  }
};