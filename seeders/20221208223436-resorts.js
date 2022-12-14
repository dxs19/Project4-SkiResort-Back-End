'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let resorts = [
      {
        name: 'Blue Knob',
        location: 'Altoona, Pennsylvania',
        review: 'The ski resort Blue Knob is located in Pennsylvania (USA). For skiing and snowboarding, there are 16 km of slopes available. 4 lifts transport the guests. The winter sports area is situated between the elevations of 634 and 960 m.',
        longitude: 'Altoona',
        latitude: null,
        height: '960 m',
        runs: '4',
        image: 'https://www.snow-forecast.com/pistemaps/Blue-Knob_pistemap.jpg?1601557218',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Killington',
        location: 'Killington, Vermont',
        review: 'The ski resort of Killington, also known as “The Beast of the East”, is one of the largest ski resorts in the east of the USA. The winter sports resort encompasses six peaks, the highest of which is Killington Peak (1,293 metres). An extension to include the neighbouring ski resort of Pico Mountain as the seventh peak is planned. The ski slopes are all located below the treeline and enjoy beautiful views of the Green Mountains. Beginners can have fun on easy slopes while experts race down “Double Diamond” slopes and gladed runs to the valleys. The gladed runs are ungroomed slopes through sparse forests. Almost all of the lifts that take visitors up to the mountains in the ski resort of Killington are cable cars and chairlifts. In combination with climatic conditions, very efficient snow-making equipment also ensures that the winter sports resort is always one of the first in North America to open and one of the last to close at the end of the season.',
        longitude: 'Arlington',
        latitude: null,
        height: '1,293 m',
        runs: '22',
        image: 'https://freeskier.com/wp-content/uploads/2016/10/killington-trail-map-1200x851.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jay Peak',
        location: 'Jay, Vermont',
        review: 'The ski resort Jay Peak is located in Vermont (USA). For skiing and snowboarding, there are 76 km of slopes available. 7 lifts transport the guests. The winter sports area is situated between the elevations of 563 and 1,175 m.',
        longitude: 'Jay',
        latitude: null,
        height: '1,175 m',
        runs: '7',
        image: 'https://freeskier.com/wp-content/uploads/2016/10/killington-trail-map-1200x851.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sugarloaf',
        location: 'Franklin County, Maine',
        review: 'Sugarloaf Mountain is a ski mountain located in Carrabassett Valley, Franklin County, Maine. It is the third highest peak in the state, after Mount Katahdins Baxter and Hamlin peaks. Sugarloaf is flanked to the south by Spaulding Mountain.',
        longitude: 'Freeport',
        latitude: null,
        height: '1,286 m',
        runs: '14',
        image: 'https://s3.onthesnow.com/images/trailmaps/maine/sugarloaf-usa/20190202174032/xlarge.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Holiday Valley',
        location: 'Holiday Valley, Pennsylvania',
        review: 'Sugarloaf Mountain is a ski mountain located in Carrabassett Valley, Franklin County, Maine. It is the third highest peak in the state, after Mount Katahdins Baxter and Hamlin peaks. Sugarloaf is flanked to the south by Spaulding Mountain.',
        longitude: 'Salamanca',
        latitude: null,
        height: '685 m',
        runs: '13',
        image: 'https://www.holidayvalley.com/upload/trailmap/hov_trailmap.pdf',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lake Placid',
        location: 'Lake Placid, New York',
        review: 'Whiteface Mountain, the Olympic Mountain, has the greatest vertical drop east of the Rockies and trails for everyone in the family. This is where the worlds best come to train and compete and where kids come to learn and have fun. At the top of Whiteface, spare a moment to take in the views of the surrounding Adirondack peaks of New York. Spot Lake Champlain and Vermont to the east.',
        longitude: 'White Plains',
        latitude: null,
        height: '1,340 m',
        runs: '11',
        image: 'https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_980,q_auto,w_980/v1/production/trail_maps/dec5b6abaf72b9e6ab02a666b6d6c7f3.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hunter Mountain',
        location: 'Catskills, New York',
        review: 'As the Great Northern Catskills premier winter destination, Hunter Mountain, New York resides only about two hours to the north of New York City and sits at a base elevation 1,600 ft. with a summit that climbs to 3,200 ft. Hunter Mountain maintains renowned terrain across three separate mountains, with high-efficiency, state-of-the-art snowmaking that covers 100 percent of its trails, hence its "snowmaking capital of the world" reputation. The ski resort is so confident, in fact, that it offers a Hunter Mountain Snow Guarantee whereby skiers and riders within a certain time window of purchase can turn their ticket in for a voucher good until the end of the current season. ',
        longitude: 'Catskill',
        latitude: null,
        height: '975 m',
        runs: '12',
        image: 'https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_980,q_auto,w_980/v1/production/trail_maps/dec5b6abaf72b9e6ab02a666b6d6c7f3.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cannon Mountain',
        location: 'Lincoln, New Hampshire',
        review: 'Nestled in Franconia Notch State Park, Cannon Mountain plus the additional 98 acres of the Mittersill Area, offers skiers and riders the highest ski area summit and longest vertical drop in all of New Hampshire. Home to the New England Ski Museum at the base of the iconic aerial tramway, 282 skiable acres entertain skiers and riders on 81 named trails and glades. 10 lifts including the aerial tram provide access to terrain rated 21% beginner, 47% intermediate, and 32% expert. With 97% snowmaking ability, a normal season will begin late November and go through mid-April. ',
        longitude: 'Woodsville',
        latitude: null,
        height: '1,243 m',
        runs: '11',
        image: 'https://s3.onthesnow.com/images/trailmaps/new-hampshire/cannon-mountain/20221208175220/xlarge.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    await queryInterface.bulkInsert('resorts', resorts)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('resorts')

  }
};
