if (Meteor.isClient) {
  Session.setDefault("foo", true);

  Template.letList.lets = function() {
    return Lets.find({});
  }

  Template.letList.count = function() {
    return Lets.find({}).count();
  }

  Template.letList.testFoo = function() {
    return Session.get("foo");
  }

  Template.fooFalse.events({
    "click #toggle": function(event) {
      Session.set("foo", true);
    }
  });

  Template.fooTrue.events({
    "click #toggle": function(event) {
      Session.set("foo", false);
    }
  });
}
