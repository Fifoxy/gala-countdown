var React = require('react');
var ReactDOM = require('react-dom');
var Countdown = require('./Countdown');

function renderCountdown(container, props) {
  ReactDOM.render(<Countdown {...props} />, container);
}

module.exports = {
  renderCountdown: renderCountdown
}
