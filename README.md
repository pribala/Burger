# Eat Da Burger 
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.


### Overview

   - Eat-Da-Burger! is a restaurant app that lets users      input the names of burgers they'd like to eat.

   - Whenever a user submits a burger's name, the app      displays the burger on the left side of the page        waiting to be devoured.

   - Each burger in the waiting area also has a Devour       it! button. When the user clicks it, the burger         moves to the right side of the page.

   The app stores every burger in a database, whether      devoured or not.


   The app follows the MVC design pattern. It uses Node    and MySQL to query and route data, and Handlebars to    generate the HTML.

### NPM Packages

   - express
   - express-handlebars
   - mysql
   - moment
   - method-override
   - body-parser

### DB Setup


The schema.sql file defines the database schema. It 

   - Creates the burgers_db.
   - Create a burgers table with these fields:
      - id: an auto incrementing int that serves as the primary key.
      - burger_name: a string.
      - devoured: a boolean.
      - date: a TIMESTAMP.

The seeds.sql file populates the table with initial entries.


### Config Setup

   - connection.js file, sets up the code to connect      Node to MySQL.
   - orm.js file, creates the methods that executes the      MySQL commands in the controllers. These are the      methods used to retrieve and store data in the      database.

     - selectAll()
     - insertOne()
     - updateOne()

### Model Setup

burger.js, creates the code that calls the ORM functions using burger specific input for the ORM.
  

### Controller setup

burgers_controller.js creates the router for the app.

### View Setup

index.handlebars defines the template that Handlebars can render onto.

