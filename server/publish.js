Resolutions = new Mongo.Collection("resolutions");

Meteor.publish("allResolutions", function(){
  return Resolutions.find({});
});

Meteor.publish("userResolutions", function(){
  return Resolutions.find({user: this.userId});   // all other files use Meteor.userId() except publish is using this.userId
});
