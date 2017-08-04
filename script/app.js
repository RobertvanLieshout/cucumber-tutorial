'use strict';

var GroceryList = require(process.cwd() + '/script/model/grocery-list');

var application = {
  
  init: function() {
    this.groceryList = GroceryList.create();
    return this;
  }
};

module.exports = {
  newSession: function() {
    return Object.create(application).init();
  }
};
