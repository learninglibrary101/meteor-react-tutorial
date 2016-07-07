import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';   // use this only for pulling in data
import { render } from 'react-dom';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionsWrapper extends TrackerReact(React.Component){

  resolutions(){
    return Resolutions.find().fetch();
  }

  render(){
    // let res = this.resolutions();
    // if(res.length < 1){
    //   return (<div>Loading</div>);  // wait till data receive, because tracker grab things beforehand
    // }

    return (
      <div>
        <h1>My Resolutions</h1>
        <ResolutionsForm/>
        <ul className="resolutions">
          {this.resolutions().map((resolution)=>{
            return <ResolutionSingle key={resolution._id} resolution={resolution} />
          })}
        </ul>
      </div>
    );
  }
}
