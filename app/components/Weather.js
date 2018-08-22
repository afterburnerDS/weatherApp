var React = require("react");
var api = require("../utils/api");
var Link = require('react-router-dom').Link;

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: this.props.city
    };
  }


  render() {
console.log(this.props)

var city = this.state.clicked;
    
    return (
      <div className='content'>
      <ul className='popular-list'>
      {this.props.weather.map(function (weather, index) {
        return (
          <li key={weather.temp.day} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
           
             <li>
             <Link className='button' to={{
                pathname: '/detail',
            search: '?city='+ city +'?day=' + weather.temp.day
              }}>
             
             >  {weather.temp.day}</Link>
             </li>
            </ul>
          </li>
        )
      })}
    </ul>
      </div>
    );
  }
}

module.exports = Weather;
