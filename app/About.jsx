import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {

  setVar(){
    Session.set('Meteor.loginButtons.dropdownVisible', true);   // session can be access everywhere
  }

  render(){
    DocHead.setTitle('About | My Resolutions');
    return (
      <ReactCSSTransitionGroup component="div" className="resolutions" transitionName="route" transitionEnterTimeout={600} transitionAppearTimeout={600} transitionLeaveTimeout={400} transitionAppear={true}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan, lorem ut ornare congue, purus magna tempus metus, quis pellentesque est nisi eu ipsum. Donec in semper ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ac dapibus massa. Sed suscipit tortor euismod erat semper condimentum. Nulla imperdiet purus sit amet porttitor ullamcorper. Nullam pulvinar, nibh eu tincidunt sodales, quam mi bibendum quam, sit amet vehicula nisl libero et tellus. Duis nec velit non risus fermentum maximus. Aenean rutrum, lorem egestas gravida dignissim, augue dolor volutpat libero, ut porta lacus nunc sed ipsum. Quisque ac aliquam risus. Nulla id erat et orci semper dignissim. Cras scelerisque luctus justo in dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eu lacinia purus.
        </p>
        <button onClick={this.setVar}>Sign Up</button>
      </ReactCSSTransitionGroup>

    );
  }
}
