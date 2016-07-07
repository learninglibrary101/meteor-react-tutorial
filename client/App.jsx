import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { render } from 'react-dom';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component){

  resolutions(){
    return Resolutions.find().fetch();
  }

  addResolution(event){
    event.preventDefault();   // prevent default behaviour of a form
    var text = this.refs.resolution.value.trim(); // trim is to remove any break space

    Resolutions.insert({
      text: text,
      complete: false,
      createdAt: new Date()
    });

    this.refs.resolution.value = "";
  }

  render(){
    let res = this.resolutions();
    if(res.length < 1){
      return (<div>Loading</div>);  // wait till data receive, because tracker grab things beforehand
    }
    console.log(this.resolutions());
    return (
      <div>
        <h1>My Resolutions</h1>
        <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
          <input
            type="text"
            ref="resolution"
            placeholder="Finish React Meteor Series" />
        </form>
        <div>
          {res[0].text}
        </div>
      </div>
    );
  }
}
