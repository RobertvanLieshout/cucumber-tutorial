'use strict';

var groceryList = {
  add: function(item) {
    this.list.push(item);
  },
  empty: function() {
    this.list.value = [];
  },
  getAll: function() {
    return this.list;
  },
  getItemIndex: function(value) {
    var index = this.list.length;
    while(--index > -1) {
      if(this.list[index] === value) {
        return index;
      }
    }
    return -1;
  }
