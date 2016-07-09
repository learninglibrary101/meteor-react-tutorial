import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';   // use this only for pulling in data
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { render } from 'react-dom';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

if(Meteor.isClient){
  Resolutions = new Mongo.Collection("resolutions");
}

export default class ResolutionsWrapper extends TrackerReact(React.Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions")
      }
    };
  }

  // unsubscribe if component unmount
  componentWillUnmount(){
    this.state.subscription.resolutions.stop();
  }

  resolutions(){
    return Resolutions.find().fetch();
  }

  render(){
    DocHead.setTitle('My Resolutions for this Month');
    return (
      <ReactCSSTransitionGroup component="div" className="resolutions" transitionName="route" transitionEnterTimeout={600} transitionAppearTimeout={600} transitionLeaveTimeout={400} transitionAppear={true}>
        <h1>My Resolutions</h1>
        <ResolutionsForm/>
        <ReactCSSTransitionGroup component="ul" className="resolutions" transitionName="resolutionLoad" transitionEnterTimeout={600} transitionLeaveTimeout={400}>
          {this.resolutions().map((resolution)=>{
            return <ResolutionSingle key={resolution._id} resolution={resolution} />
          })}
        </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
    );
  }
}
