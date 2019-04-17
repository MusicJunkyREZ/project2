To create a new user then throw it to the mysql table so that it doesn't have to be hard coded in:

Create a table for users
Automatically assigned uid
Do a GET to get the uid from firebase
Then POST into user table in mysql using Sequelize
Use associate property to link user table with box table
Displaying (maybe using res.json) the boxes associated with that uid