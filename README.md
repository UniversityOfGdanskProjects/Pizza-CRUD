# Pizza CRUD

Application designed for presenting a pizzeria menu, offering various functionalities such as adding, deleting, and editing items via the administrator panel. 

## Technologies
-   MongoDB
-   Express
-   React
-   Node
-   CSS

## Table of contents

* [App Features](#app-features)
* [How to build](#how-to-build)
* [Demo](#demo)

## App Features

- 	user can view pizza details
- 	user can display only pizzas without gluten
- 	user can search by the specific name of a pizza
- 	user can create a comment
- 	user can sign in to the administrator panel
-   user can sign out from the administrator panel
-   user can delete a comment by using the administrator panel
- 	user can add a pizza by using the administrator panel
- 	user can delete a pizza by using the administrator panel
- 	user can update a pizza by using the administrator panel
- 	app stores pizza photos and details and polls them every 5 seconds from the database
- 	app shows live charts about stored pizzas data in the info page

## How to build
After downloading this repo, run `npm install` in the client and in the server directory and then run in both directories `npm start`.

### Warning:


**This app will work correctly only if you add to the server directory *.env* file containing `DATABASE_URI`, `ACCESS_TOKEN_SECRET` and `REFRESH_TOKEN_SECRET` environment variables.**

You can use:
```
DATABASE_URI=mongodb+srv://admin:admin123@cluster0.ayedeen.mongodb.net/pizzaNotesDB?retryWrites=true&w=majority
ACCESS_TOKEN_SECRET=55b9afbf6ba001a953b8f87f730000dedc60a7d075012082df80b31e87bedaf656c9701191794c3b6465d3944bd5acd0a9ef66e3dc30de44566dac3477489190
REFRESH_TOKEN_SECRET=50e6c1920ad3b9439ddfec7aecd1c7ad6521ec350e5c79c92a49c1a90b9b8a79d0484b3da1a1cab84ce3ea5fb8c1638924d14908112379758d216876fd5cc305
```

## Demo

[Live Site](https://pizza-crud-frontend.onrender.com)

**Due to free hosting this application takes a very long time to load (*sometimes can even take up to 10 minutes*)**.

So i made a video tour of this app, and the link is down below:

[Open Video in YouTube](https://www.youtube.com/watch?v=Bhxq6fdcZEE)

If you are using Live Site please **use this credentials to login**:
```
login: admin
password: admin123
```
