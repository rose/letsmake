Lets = new Meteor.Collection("lets");

randomElement = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

sweetIdea = function() {
  var adj1 = randomElement(["social", "cupcake", "reactive", "web 2.8", "function", "test"]);
  var adj2 = randomElement(["networking", "oriented", "driven"]);
  var thing = randomElement(["compiler", "app", "IDE", "framework", "solution"]);
  var target = randomElement(["lemurs", "ostriches", "penguins", "doges", "aardvarks", "giraffes", "armadillos"]);
  return ("a " + adj1 + " " + adj2 + " " + thing + " for " + target);
}
