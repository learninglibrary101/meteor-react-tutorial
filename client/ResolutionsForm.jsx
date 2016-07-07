import React, { Component } from 'react';
import { render } from 'react-dom';

// import { Resolutions } from '../imports/api/resolutions.js';

export default class ResolutionsForm extends Component {

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
    return (
      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
        <input
          type="text"
          ref="resolution"
          placeholder="Finish React Meteor Series" />
      </form>
    );
  }
}
