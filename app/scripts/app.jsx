var React = require('react');

/**
 * Simple react component as a constructor
 */
function Add(props){
  // javascript work can be done here...
  var sum = parseInt(props.number1) + parseInt(props.number2);

  // JSX coming up!!
  return (
    <div>
      {/* JSX comments */}
      Sum: {sum}
    </div>
  );
}

var Calculator = React.createClass({
    render: function(){
      var five = 5;
      var ten = 10;
      console.log(this.props);
      var title = this.props.title;

      return (
        <div>
          <h1>{title}</h1>
          <Add number1={5} number2={ten} />
        </div>
      )
    }
});


module.exports = {
  Add,
  Calculator
};
