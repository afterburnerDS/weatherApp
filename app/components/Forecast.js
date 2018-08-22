var React = require('react');
var Link = require('react-router-dom').Link;
var ZipCodeForm = require('./ZipCodeForm');
var Weather = require('./Weather');
var Loading = require('./Loading');
var api = require('../utils/api')

 class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        forecast: '',

    }

    this.updateForecast = this.updateForecast.bind(this);
}

componentDidMount () {
  //AJAX
  this.updateForecast(this.props.location.search.split('=')[1]);
 
}

updateForecast(city){
  

  api.fetchWeather(city).then(function(forecast) {
      this.setState(function() {
          return {
            forecast: forecast
          }
      })
  }.bind(this))
}
  render() {

   var city = this.props.location.search.split('=')[1];

    
    return (
      <div className='content'>
         
         {!this.state.forecast
                    ? <Loading /> : 
                    
                 <Weather weather={this.state.forecast} city={city}
                  /> 
              
              } 
      </div>
    )
  }
}
 module.exports = Forecast;