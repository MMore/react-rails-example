var Griddle = require('griddle-react');

var GriddleTest = React.createClass({
	render: function() {
		console.log("rendering griddle_test");
		var fakeData =  [
		  {
		    "id": 1,
		    "name": "Mayer Leonard",
		    "city": "Kapowsin",
		    "state": "Hawaii",
		    "country": "United Kingdom",
		    "company": "Ovolo",
		    "favoriteNumber": 7
		  },
		  {
		    "id": 2,
		    "name": "Dexter Morgan",
		    "city": "Miami",
		    "state": "Florida",
		    "country": "United States",
		    "company": "Miami Metro",
		    "favoriteNumber": 911
		  }
		];

    return (
      <div>
	      Hey
	      <Griddle results={fakeData} />
      </div>
    );
	}
});

module.exports = GriddleTest;
