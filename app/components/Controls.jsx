var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function () {
    var {countdownStatus} = this.props; // pulling the variables off this.props into their own variable makes it easier to see in render function {using ES6 destructuring}
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
