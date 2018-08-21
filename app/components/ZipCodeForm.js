var React = require("react");
var api = require("../utils/api");
var Link = require('react-router-dom').Link;
class ZipCodeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.city);

    api.fetchWeather(this.state.city).then(
      function(weather) {
        console.log(weather);
      }.bind(this)
    );
  }

  handleChange(event) {
    
    var value = event.target.value;
    this.setState(function() {
      return {
        city: value
      };
    });
  }

  render() {
  
    console.log(this.props.match);
    return (
      <div className='content'>
      <div className="form">
        <h1 className="Header">Enter a city and a state</h1>
        <form className="zipForm" onSubmit={this.handleSubmit}>
          <input
            id="city"
            placeholder="Enter City and Zip Code"
            type="text"
            value={this.state.city}
            autoComplete="off"
            onChange={this.handleChange}
          />
         <Link className='button' to={{
            pathname: '/forecast',
            search: '?city=' + this.state.city
          }}>
         
         >GetWeather</Link>
        </form>
      </div>
      </div>
    );
  }
}

module.exports = ZipCodeForm;
