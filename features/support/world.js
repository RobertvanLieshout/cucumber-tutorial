'use strict';

var application = require(process.cwd() + '/script/app');

var World = function World(callback) {

  this.shoppingApplication = undefined;
  
  this.groceryListEmpty = function() {
    this.shoppingApplication.groceryList.empty();
  };
  this.createGroceryItem = function() {
    return 'apple';
  };
  this.openShoppingApplication = function() {
    this.shoppingApplication = application.newSession();
    return this.shoppingApplication;
  };

  callback();

};
