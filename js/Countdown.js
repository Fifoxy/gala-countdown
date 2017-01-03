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

    var left = countdown.apply(null, [moment().toDate(), moment('2017-02-03 20:30:00').toDate()]);

    if(left.minutes < 10){
        left.minutes = "0" + left.minutes;
    }
     if(left.seconds < 10){
        left.seconds = "0" + left.seconds;
    }

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
    }).type('20h30').pause().delete()
      .type('Halls de la Filature').pause().delete()
      .type('Réservez votre place !').pause().delete()
      .type('www.gala-isen.fr').pause().delete();
  },

  render: function() {
    return (
      <div className="small-6 large-8 columns" id="header">
        <img id="logo" src="static/img/logo.png"/>
        <img id="logo_hover" src="static/img/logo_hover.png"/><br/>
        <span id="day"><h1>J-{this.state.days}</h1></span>
        <center>&nbsp;<span id="typing" ref="typing"></span>&nbsp;</center><br/>
        <center><img src="static/img/arrow.png"/></center>
      </div>
    );
  }
});

module.exports = Countdown;
