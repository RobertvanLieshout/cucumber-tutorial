'use strict';
var assert = require('assert');

module.exports = function() {

  this.World = require(process.cwd() + '/features/support/world').World;

  this.Given(/^I have opened the shopping application$/, function(callback) {
    this.shoppingApplication = this.openShoppingApplication();
    assert(this.shoppingApplication, 'Shopping Application is required to be open for editability.');
    callback();
  });

};
