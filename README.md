# iFood
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/mdelta/ifood/Node%20CI)
[![DeepScan grade](https://deepscan.io/api/teams/6656/projects/8691/branches/109057/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=6656&pid=8691&bid=109057)
[![GitHub issues by-label](https://img.shields.io/github/issues/mdelta/ifood/bug)](https://github.com/mdelta/ifood/issues)
[![Slack](https://img.shields.io/badge/slack-join-blue)](https://vanterode.slack.com/archives/CRWBJA06T)
![GitHub](https://img.shields.io/github/license/mdelta/ifood)

The *new* "ESSEN400" or **iFood** is a web-based application using [ReactJS](https://reactjs.org/) and [MongoDB Atlas](https://cloud.mongodb.com/) with a [MongoDB Stitch](https://docs.mongodb.com/stitch/) backend. Our plan is to replace the old IBM i tool.

The features will include:
- Ordering food from a selected restaurant
- Displaying all orders from other users
- History of old orders
- Order statistics

Currently the App is under development.

# Milestones
Our planned milestones are:
1. Alpha release with the possibility to login via Google Account and place an order
2. Beta release with all major functionality such as order history, changing orders and displaying an overview
3. Major release 1.0 after Beta test went well

Other features after the initial release will be:
- Statistics per order day such as how many people order which restaurant
- Menu with prices
- Login using EPG Azure login data (if IT agrees)
- Administration menu
- If possible, interface between `ESSEN400` and this app

# Installation and build
Clone this repository and enter `npm install` on the console. The [package manager](https://nodejs.org/) will install all necessary modules. 

## `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## `npm test`
Runs all test scripts with name *.test.js.

## `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Contact
Please submit all issues or suggestions to our [GitHub project](https://github.com/mdelta/ifood/issues).

# Contributing
Do you want to help me? Contact APG or clone the repository and submit a pull request. We also have a [Slack workspace](https://vanterode.slack.com).