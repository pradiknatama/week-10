'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Filmcategories', [
      {
        film_id: 1,
        category_id: 1,

        createdAt:new Date(),
        updatedAt: new Date(),
      },{
        film_id: 1,
        category_id: 2,

        createdAt:new Date(),
        updatedAt: new Date(),
      },{
        film_id: 3,
        category_id: 1,

        createdAt:new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
