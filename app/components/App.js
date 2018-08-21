var React = require("react");

var ReactRouter = require("react-router-dom");
var Nav = require('./Nav')
var Home = require('./Home');
var Forecast = require('./Forecast')
var ZipCodeForm = require('./ZipCodeForm');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
        <Nav />
        <Switch>
          <Route exact path='/' component={ZipCodeForm} />
          <Route exact path='/forecast' component={Forecast} />
        </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
