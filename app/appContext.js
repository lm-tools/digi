const resourceModel = require('./models/resources-model')('drl-resources');
const categoriesData = require('./data/categories');
const categoryModel = require('./models/categories-model')({ data: categoriesData });
const featuredData = require('./data/featured');
const schedule = require('./data/schedule');
const rotation = require('./data/rotation');
const scheduler = require('./models/scheduler')({ schedule, rotation });
const featuredModel = require('./models/featured-model')({ data: featuredData, scheduler });

module.exports = { resourceModel, categoryModel, featuredModel };
