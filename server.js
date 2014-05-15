if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Lets.find().count() === 0) {
      var demoLets = [
        {title: "Hello", foo: "foo"},
        {title: "World"}
      ];
      for (var i = 0; i < demoLets.length; i++) {
        Lets.insert(demoLets[i]);
      }
    }
  });
}
