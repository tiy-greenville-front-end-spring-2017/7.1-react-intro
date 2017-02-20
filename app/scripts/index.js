var React = require('react');
var ReactDOM = require('react-dom');

var Add = require('./app.jsx').Add;
var Calculator = require('./app.jsx').Calculator;
var FlavorList = require('./components/flavor_list.jsx').FlavorList;

// ReactDOM.render(
//   React.createElement(Add, {number1: 5, number2: 10}),
//   document.getElementById('app')
// );

// ReactDOM.render(
//   React.createElement(Calculator, {title: 'Cool calcs'}),
//   document.getElementById('app')
// );

var $ = require('jquery');
var _ = require('underscore');
var IceCreamListView = require('./views/icecream_list').IceCreamListView;
// var IceCreamCollection = require('./models/icecream').IceCreamCollection;
//
// var flavors = new IceCreamCollection();
//
// flavors.add([
//   {'name': 'Chocolate', upVotes: 10, totalVotes: 25},
//   {'name': 'Vinilla', upVotes: 5, totalVotes: 20},
//   {'name': 'Peanut Butter', upVotes: 50, totalVotes: 85},
//   {'name': 'Strawberry', upVotes: 30, totalVotes: 55}
// ]);

// var flavorBoard = new IceCreamListView({collection: flavors});
// $('#app').html(flavorBoard.render().$el);

ReactDOM.render(
  React.createElement(FlavorList),
  document.getElementById('app')
)

// ============================================================
// ============= DEMO HELPERS =================================
// ============================================================
// function randomizeVotes(){
//   flavors.each(function(model){
//     var numUpVotes = _.random(0, 10);
//     var numTotalVotes = _.random(numUpVotes, 10);
//
//     var newUp = model.get("upVotes") + numUpVotes;
//     var newTot = model.get("totalVotes") + numTotalVotes;
//
//     model.set({'upVotes': newUp, 'totalVotes': newTot});
//   });
//   console.log(flavors.toJSON());
// }
//
// setInterval(randomizeVotes, 3000);





//
