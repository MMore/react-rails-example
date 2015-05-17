var HelloWorld = React.createClass({
	render: function() {
		console.log("rendering HelloWorld");

    return (
      <div>
	      Hello {this.props.name}
      </div>
    );
	}
});

module.exports = HelloWorld;
