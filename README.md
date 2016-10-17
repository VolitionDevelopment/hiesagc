# HiesAGC
The website for the Holy Innocents' Adventure Gaming Club

## About the project
The Adventure Gaming Club was my favorite club back in High School. I made most of my friends there - friendships that persist to this day. I wanted to give back to the club so I created this website to assist with club activities.

## Features
- **Voting**: Members who have paid their dues can vote on which games to buy. My voting system uses AJAX requests via Angular to silently query the database.

- **Accounting**: I have created an accounting system to help keep track of money spent. This is simply for tracking - money is kept in a locked drawer.

- **Forums**: To test my skills, I have created a forum from scratch using MEAN technologies. Supports all CRUD operations, Moderator accounts, locking and pinning threads, replies, etc.

## Technologies
- **MongoDB**: I'm using MongoDB for data storage persistence. This seemed the natural choice since I'm using the MEAN stack. The M could have been MySQL but MongoDB made more sense.

- **Express**: I'm using Express for routing. If I used purely Node.js to route, this project would be much larger. Express is the natural choice when working with Node.js.

- **AngularJS**: AngularJS is being used as my front-end framework. Its job is to handle AJAX requests and then update the DOM with the response. jQuery was an option but I much prefer AngularJS.

- **Node.js**: This piece of technology is being used as my server. Thanks node.

- **Angular Material**: For developers using AngularJS, Angular Material is both a UI Component framework and a reference implementation of Google's Material Design Specification. This project provides a set of reusable, well-tested, and accessible UI components based on Material Design.

- **Compass**: While I'm not going to have a lot of custom styling, I still prefer to work with Compass because it has support for variables and nesting.

- **AJAX**: AJAX will handle POST and GET requests to and from the server so that the page isn't reloaded every time the user clicks something.

## Installation
To install and run the website, open your command prompt and enter these commands:

`git clone https://github.com/VolitionDevelopment/hiesagc`

`cd hiesagc`

`npm install`

`node bin/www`

Open your browser and connect to `http://localhost:3000`

## Live Website

A live demo is hosted here: http://hiesagc.org