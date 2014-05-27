if (Meteor.isServer) {
  Meteor.startup(function () {
    Lets.remove({});
    Lets.remove({title:undefined});

    if (Lets.find().count() === 0) {
      var demoLets = [ {title: sweetIdea()} ];
      for (var i = 0; i < demoLets.length; i++) {
        Lets.insert(demoLets[i]);
      }
    }
  });
}

Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile ? options.profile : {};
  return user;
});
