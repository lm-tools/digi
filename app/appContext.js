const { elasticSearch } = require('./config');
const logger = require('./../logger');
const resourcesData = require('./data/resources');
const SearchService = require('./services/search-service');
const searchService = new SearchService({
  rawData: resourcesData,
  host: elasticSearch.host,
  index: elasticSearch.index,
  esType: 'resource',
});
const ResourceModel = require('./models/resources-model');
const categoriesData = require('./data/categories');
const categoryModel = require('./models/categories-model')({ data: categoriesData });
const featuredData = require('./data/featured');
const schedule = require('./data/schedule');
const rotation = require('./data/rotation');
const scheduler = require('./models/scheduler')({ schedule, rotation });
const featuredModel = require('./models/featured-model')({ data: featuredData, scheduler });

const resourceModel = new ResourceModel({ searchService });

module.exports = { resourceModel, categoryModel, featuredModel, searchService, logger };
