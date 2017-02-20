var _ = require('underscore');
var React = require('react');

var IceCreamCollection = require('../models/icecream').IceCreamCollection;


var FlavorList = React.createClass({
  componentDidMount: function(){
    // this.randomizeVotes()
    var self = this;
    setInterval(function(){self.randomizeVotes()}, 3000);
  },
  randomizeVotes: function(){
    var flavors = this.state.flavors;

    flavors.each(function(model){
      var numUpVotes = _.random(0, 10);
      var numTotalVotes = _.random(numUpVotes, 10);

      var newUp = model.get("upVotes") + numUpVotes;
      var newTot = model.get("totalVotes") + numTotalVotes;

      model.set({'upVotes': newUp, 'totalVotes': newTot});
    });
    flavors.sort();

    this.setState({'flavors': flavors});
  },

  getInitialState: function(){
    var flavors = new IceCreamCollection();

    flavors.add([
      {'name': 'Chocolate', upVotes: 10, totalVotes: 25},
      {'name': 'Vinilla', upVotes: 5, totalVotes: 20},
      {'name': 'Peanut Butter', upVotes: 50, totalVotes: 85},
      {'name': 'Strawberry', upVotes: 30, totalVotes: 55}
    ]);

    return {flavors: flavors, title: 'Flavor Flave'};
  },
  render: function(){
    console.log('state: ', this.state);
    console.log('props', this.props);

    var listItems = this.state.flavors.map(function(flavor){
      return (
        <li key={flavor.cid}>
          {flavor.get('name')} :: {flavor.popularity()}
        </li>
      )
    });

    return (
      <div>
        <h2>{this.state.title}</h2>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});


module.exports = {
  FlavorList
};
