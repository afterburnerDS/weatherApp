var React = require('react');
var Link = require('react-router-dom').Link;
var ZipCodeForm = require('./ZipCodeForm');

 class Home extends React.Component {
  render() {
    return (
      
        <ZipCodeForm url={this.props.match.url} />

    )
  }
}
 module.exports = Home;