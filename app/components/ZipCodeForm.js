var React = require("react");
var api = require('../utils/api');
class ZipCodeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          city: ''
        };

         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);
        
      }
      handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.city)

        api.fetchWeather(this.state.city).then(function(weather) {
          console.log(weather);
        }.bind(this))
        
      }

      handleChange(event) {
        var value = event.target.value;
         this.setState(function () {
          return {
            city: value
          }
        });

        
      }

    render() {
      return (
       
                <div className="form">

                    <h1 className="Header">Enter a city and a state</h1>
                    <form className="zipForm"  onSubmit={this.handleSubmit}>
                        <input 
                        
                        id='city'
                        placeholder='Enter City and Zip Code'
                        type='text'
                        value={this.state.city}
                        autoComplete='off'
                        onChange={this.handleChange}
                        
                        />
                        <button>
                        Get Weather
                        </button>
                    </form>
                    
                </div>
      
      );
    }
  }
  
  module.exports = ZipCodeForm;