var React = require("react");

var ReactRouter = require("react-router-dom");
var Nav = require('./Nav')
var Home = require('./Home');
var Forecast = require('./Forecast')
var ZipCodeForm = require('./ZipCodeForm');
var Detail = require('./Detail');
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
          <Route exact path='/detail' component={Detail}
          />
        </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
