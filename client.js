if (Meteor.isClient) {
  Template.letList.lets = function() {
    return Lets.find({});
  }

  Template.letList.count = function() {
    return Lets.find({}).count();
  }

  Template.letList.testFoo = function() {
    return true;
  }
}
