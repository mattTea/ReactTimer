var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) { // switch statement takes value you want to check as argument
        case 'started':
          this.startTimer(); // don't want to do much in componentDidUpdate, so best to call a separate function that handles the change
          break; // break used to exit the switch statement
        case 'stopped':
          this.setState({count: 0}); //not using break after this so code executes both this and next cases
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => { //setInterval takes 2 arguments: an anon function and a time
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0 // terinary operator '?' sets count to newCount if newCount >= 0, if not, set it to 0
      });
    }, 1000)
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render: function () {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;

// if expecting a prop (i.e. onSetCountdown) need to specify it in render
