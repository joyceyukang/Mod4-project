'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = "Reviews"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        review: 'The office was very cozy and welcoming. I would love to come here again and recommend it to others as well.',
        stars: 4,
        spotId: 2,
        userId: 2
      },
      {
        review: 'The place was nice but there was nothing to do around the area.',
        stars: 2,
        spotId: 1,
        userId: 3
      },
      {
        review: 'Fantastic getaway! It felt like I was completely surrounded by nature. I would recommend to any and all!',
        stars: 5,
        spotId: 4,
        userId: 1
      },
      {
        review: 'The place was so nice I did not need to step out of the office!',
        stars: 5,
        spotId: 2,
        userId: 1
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      [Op.or]: [
        {
          review: 'The office was very cozy and welcoming. I would love to come here again and recommend it to others as well.',
          stars: 4,
          spotId: 2,
          userId: 2
        },
        {
          review: 'The place was nice but there was nothing to do around the area.',
          stars: 2,
          spotId: 1,
          userId: 3
        },
        {
          review: 'Fantastic getaway! It felt like I was completely surrounded by nature. I would recommend to any and all!',
          stars: 5,
          spotId: 4,
          userId: 1
        },
        {
          review: 'The place was so nice I did not need to step out of the office!',
          stars: 5,
          spotId: 2,
          userId: 1
        },
      ]
    }, {})
  }
};
