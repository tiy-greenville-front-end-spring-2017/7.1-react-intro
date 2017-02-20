var Backbone = require('backbone');

var IceCreamListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change', this.render);
  },
  render: function(){
    this.collection.sort();
    var flavorList = this.collection.map(function(flavor){
      return '<li>' +
              flavor.get('name') + ' :: ' +
              flavor.popularity() +
              '</li>';
    });

    this.$el.html(flavorList);

    return this;
  }
});

module.exports = {
  IceCreamListView: IceCreamListView
};
