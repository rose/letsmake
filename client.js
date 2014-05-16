if (Meteor.isClient) {
  Session.set("show_new_lets_form", false);

  Template.letList.lets = function() {
    return Lets.find({});
  }

  Template.letList.count = function() {
    return Lets.find({}).count();
  }

  Template.letList.showingForm = function() {
    return Session.get("show_new_lets_form");
  }

  Template.offerForm.events({
    "click #getForm": function(event) {
      Session.set("show_new_lets_form", true);
    }
  });

  Template.showForm.events({
    "click #hideForm": function(event) {
      Session.set("show_new_lets_form", false);
    } 
  });

  Template.showForm.events({
    "click #addLets": function(event) {
      titleBox = $("#title");
      Lets.insert({title: titleBox.val()});
      titleBox.val("");
    }
  });

  Template.showForm.getSweetIdea = function() {
    return sweetIdea();
  };
}
