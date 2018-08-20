var React = require("react");
var ZipCodeForm = require('./ZipCodeForm');
class App extends React.Component {
    render() {
      return (
       <div className="container">
            

            <div className="header">
                Header
            </div>

            <div className="content">
                <ZipCodeForm />
            </div>
       </div>
      
      );
    }
  }
  
  module.exports = App;