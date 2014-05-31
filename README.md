Letsmake
========

While at Hacker School, I noticed how difficult it was to keep track of who was interested in pairing on what.  I thought it'd be nice to have an app that made it easy to make and view pairing suggestions.

Meteor is a javascript framework that transparently synchronizes state between the client and the server.  It seems like a great fit for a single page app that involves a lot of realtime interaction between users.

Make sure you have node, mongodb, and [meteor](http://docs.meteor.com/) installed, clone this repo, and run `meteor` in the main project directory.  It will serve the app on localhost:3000.

Letsmake currently starts up with one randomly created project suggestion (A "Let") in the list.  You can add more by clicking the button & typing in your suggestion (which will be silently rejected if it is less than 5 characters long).  If you view the app in two windows you'll see that the list is automatically kept up to date between them.

As of this writing, users are partially implemented.  You can create an account and log in and out, but your user information is not used in creating the Lets.
