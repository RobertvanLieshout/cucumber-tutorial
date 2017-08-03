'use strict';

var assert = require('assert');

module.exports = function() {
       
       var groceryItem;
       this.World = require(process.cwd() + '/features/support/world').World;

       this.Given('I have an empty grocery list', function (callback) {
         this.groceryListEmpty();
         callback();
       });
       
       this.When(/^I add an item to the list$/, function (callback) {
         groceryItem = this.createGroceryItem();
         this.shoppingApplication.groceryList.add(groceryItem);
         callback();
       });
       
       this.Then(/^The grocery list contains a single item$/, function (callback) {
         assert.equal(this.shoppingApplication.groceryList.getAll().length, 1, 'Grocery List should grow by one item.');
         callback();
       });

       this.Then(/^I can access that item from the grocery list$/, function (callback) {
         assert.notEqual(this.shoppingApplication.groceryList.getItemIndex(groceryItem), -1, 'Added item should be found at non-negative index.');
         callback();
       });
       
};
