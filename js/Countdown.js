var React = require('react');
var ReactDOM = require('react-dom');
var countdown = require('countdown');
var moment = require('moment');
var malarkey = require('malarkey');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    }
  },

  refresh: function() {
    moment().format();
    var now = moment();

    var left = countdown.apply(null, [moment().toDate(), moment('2016-02-26 20:00:00').toDate()]);
    this.setState({
      days: left.days,
      hours: left.hours,
      minutes: left.minutes,
      seconds: left.seconds
    });
  },

  componentDidMount: function() {
    this.refresh();
    window.setInterval(this.refresh, 1000);

    malarkey(ReactDOM.findDOMNode(this.refs.typing), {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 5000,
      loop: true
    }).type('19h30').pause().delete()
      .type('Halls de la Filature').pause().delete()
      .type('Réservez votre place !').pause().delete();
  },

  render: function() {
    return (
      <div id="header">
        <img id="logo" src="static/img/logo.svg"/><br/>
        <h5>26 Février 2016</h5>
        <center>&nbsp;<span id="typing" ref="typing"></span>&nbsp;</center><br/>
        <center><span id="day"><h1>{this.state.days}</h1><h3>Jours</h3></span></center>
        <table>
          <tbody>
            <tr>
              <td><h1>{this.state.hours}</h1></td>
              <td><h1 style={{color: 'white'}}> : </h1></td>
              <td><h1>{this.state.minutes}</h1></td>
              <td> <h1 style={{color: 'white'}}> : </h1></td>
              <td><h1>{this.state.seconds}</h1></td>
            </tr>
            <tr>
              <td><h3>Heures</h3></td>
              <td><h3></h3></td>
              <td><h3>Minutes</h3></td>
              <td><h3></h3></td>
              <td><h3>Secondes</h3></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Countdown;
