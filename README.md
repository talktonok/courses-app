# Course App

### The technologies used in creating this project are:
Node.js, ExpressJs, Sequelize ORM, and PostgreSQL

### :rocket: How to get started
- Make sure to have Git and Node.js installed on your computer
- Make sure to installed Sequelize globaly on your computer run `npm install sequelize -g`
- Clone the project by running: `git clone https://github.com/talktonok/courses-app.git`
- cd into the project and run `npm install`
- create a `.env` file in the root folder and copy the content in the `.env.example`into it.
- create a `config.js` file in the root folder and copy the content in the `config.example.js`into it.
- run `npm run migrate` to migrate to the database.
- run `npm run migrate:undo` to undo migration.
- run `npm run seed` to seed the database.
- run `npm start` to start the project.
 
These are the HTTP response codes used in this project:
| Status Codes | Indication                                                                                            |
|   ---        | ---                                                                                                   |
|  `200`       | This `OK` status code indicates that a request has succeeded                                          |
|  `400`       | This `bad request error` status code indicates that the request sent to the server is incorrect       |
|  `401`       | This `Unauthorized error` status code indicates that the user has no access to the resource.        |
|  `404`       | This `not found error` status code indicates that the resource is not found.        |
|  `500`       | This `internal server error` status code indicates that something has gone wrong on the web server           |

<hr>