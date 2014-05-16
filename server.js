var randomElement = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var sweetIdea = function() {
  var adj1 = randomElement(["social", "cupcake", "reactive", "web 2.8", "function", "test"]);
  var adj2 = randomElement(["networking", "oriented", "driven"]);
  var thing = randomElement(["compiler", "app", "IDE", "framework", "solution"]);
  var target = randomElement(["lemurs", "ostriches", "penguins", "doges", "aardvarks", "giraffes", "armadillos"]);
  return ("a " + adj1 + " " + adj2 + " " + thing + " for " + target);
}

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
