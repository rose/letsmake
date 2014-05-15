if (Meteor.isClient) {
  Template.letList.lets = function() {
    return Lets.find({});
  }
}
