# Class Manager
### Introduction
<strong> More information coming soon ... </strong>

### Installation Guide
* Clone this repository [here](https://github.com/devcareer/class-manager.git).
* The main branch is the most stable branch at any given time, ensure you're working from it.
* Run <b>npm install</b> to install all dependencies
* Create an <b>.env</b> file in your project root folder and add your variables. See .env.example for assistance.
### Usage
* Run <b>npm watch:dev</b> to start the application.
### License
This project is available for use under the MIT License.



## What does this PR do ##
- This PR creates CRUD endpoints for assignment

### Description of tasks to be completed? ###
It makes sure that the following routes are working:
GET /api/assignment/home
GET /api/assignment/
GET /api/assignment/id
POST /api/assignment
PUT /api/assignment/id
DELETE /api/assignment/id

### How should this be manually tested/checked? ###
- Clone the PR
- Checkout to the branch `create-assignment-CRUD`
- Install the dependencies using `npm install`
- Start the server by running `npm start`
- Create a `.env file` and define the following as follows:
   - `PORT = <3000>`
   - `database = <database name>`
   - ` username = <your username>`
   - ` host = <127.0.0.1>`
    - ` dialect = <postgres>`
    
   - To test this feature go to http://localhost:3000/ `<test any of the routes>` on your browser.

