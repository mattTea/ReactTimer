var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect'); // assertion library
var $ = require('jQuery');
var TestUtils = require ('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>); //render Controls and pass in a prop
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)'); // search for button in $el node containing text 'Pause'

      expect($pauseButton.length).toBe(1); // length property on jQuery selector is equal to number of items it found
    });

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
