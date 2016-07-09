import React, { Component } from 'react';
import { render } from 'react-dom';

// import { Resolutions } from '../imports/api/resolutions.js';

export default class ResolutionsForm extends Component {

  addResolution(event){
    event.preventDefault();   // prevent default behaviour of a form
    var text = this.refs.resolution.value.trim(); // trim is to remove any break space

    Meteor.call('addResolution', text, (error, data) => {
      // arrow function represent the whole block for function 'addResolution'

      if(text){
        if(error){
          Bert.alert("Please login before submitting", "danger", "fixed-top", "fa-frown-o");
        } else {
          this.refs.resolution.value = "";
        }
      }
    });
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
