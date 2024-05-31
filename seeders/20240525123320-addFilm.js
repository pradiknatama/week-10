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
    await queryInterface.bulkInsert('Films', [
      {
        title: 'FILM A',
        description: 'lorem ipsum',
        release_year:1,
        language_id: 1,
        rental_duration: 1,
        rental_rate: 1,
        length: 1,
        // replacement_cost: 1,
        rating: 4,
        // special_features: 'lorem ipsum',
        fulltext: 'lorem ipsum',
        createdAt:new Date(),
        updatedAt:new Date(),
      },{
        title: 'FILM hantu',
        description: 'lorem ipsum',
        release_year:1,
        language_id: 1,
        rental_duration: 1,
        rental_rate: 1,
        length: 1,
        // replacement_cost: 1,
        rating: 4,
        // special_features: 'lorem ipsum',
        fulltext: 'lorem ipsum',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        title: 'SIKSA LEMBUR',
        description: 'lorem ipsum',
        release_year:1,
        language_id: 1,
        rental_duration: 1,
        rental_rate: 1,
        length: 1,
        // replacement_cost: 1,
        rating: 4,
        // special_features: 'lorem ipsum',
        fulltext: 'lorem ipsum',
        createdAt:new Date(),
        updatedAt:new Date(),
      },{
        title: 'FILM ABC',
        description: 'lorem ipsum',
        release_year:1,
        language_id: 1,
        rental_duration: 1,
        rental_rate: 1,
        length: 1,
        // replacement_cost: 1,
        rating: 4,
        // special_features: 'lorem ipsum',
        fulltext: 'lorem ipsum',
        createdAt:new Date(),
        updatedAt:new Date(),
      },{
        title: 'FILM hantu lagi',
        description: 'lorem ipsum',
        release_year:1,
        language_id: 1,
        rental_duration: 1,
        rental_rate: 1,
        length: 1,
        // replacement_cost: 1,
        rating: 4,
        // special_features: 'lorem ipsum',
        fulltext: 'lorem ipsum',
        createdAt:new Date(),
        updatedAt:new Date(),
      }
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
