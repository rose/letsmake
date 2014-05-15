if (Meteor.isClient) {
  Template.letList.lets = function() {
    return [{
      title: "hello",
      foo: "bar"
    }, {
      title: "world"
    }]
  }
}
