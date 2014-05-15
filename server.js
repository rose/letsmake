if (Meteor.isServer) {
  Meteor.startup(function () {
    Lets.remove({title:""});
    Lets.remove({title:undefined});

    bam = true;
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
