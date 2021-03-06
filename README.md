express-node-mongo-seed project

express-node-mongo-seed was made to have a simple seed for a completed Web App ready to go for demonstration purposes and learning how to build CRUD & REST operations into a Node.js Web App.

## Installation

Perform a clone of this repo.
Make sure MongoDB is installed (brew install mongodb)
A MongoDB named 'MyShop' will be generated automatically after the first time you add a new user
Install packages and start the express.js web service (npm install && npm start)
Navigate to http://127.0.0.1:3000 to see the express.js welcome page

## Usage Instructions

All of the MVC pieces are built, but are also rudimentary and not flashy. The root of our webapp goes to the express.js landing page, but there is a schema created for a new object called users. To access users, follow the route that is already in place by going to http://127.0.0.1:3000/users.

Add a new user by going to http://127.0.0.1:3000/users/new.
(or press the 'add new user' link below)



After submitting, this will take you back to the index page where you can now Show, Edit or Delete that user record from the UI



All of the REST pieces are baked in as well. You can test them using a multitude of different REST based tools.

## Contribution

Create a fork of the project into your own reposity. Make all your necessary changes and create a pull request with a description on what was added or removed and details explaining the changes in lines of code. If approved, project owners will merge it.

Licensing
---------
express-node-mongo-seed is freely distributed under the MIT License. See LICENSE for details