

const producHandler = require('./routeHandler/productHandler');

const categoryHandler = require('./routeHandler/categoryHandler');


const route={

     product : producHandler,

     category : categoryHandler,








}

module.exports = route;

