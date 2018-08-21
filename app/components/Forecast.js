var React = require('react');
var Link = require('react-router-dom').Link;
var ZipCodeForm = require('./ZipCodeForm');
var Loading = require('./Loading');
var api = require('../utils/api')

 class Home extends React.Component {

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

    if(this.state.forecast){
      console.log(this.state.forecast)
    }

    
    return (
      <div className='content'>
         
         {!this.state.forecast
                    ? <Loading /> : 
                    
                 <div>
                   
                   </div>   } 
      </div>
    )
  }
}
 module.exports = Home;