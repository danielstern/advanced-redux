# Advanced Redux Messenger
## Redux Messenger
![2017-03-28 08_00_27-redux messaging app](https://cloud.githubusercontent.com/assets/4268152/24403858/c707c6aa-138c-11e7-93fc-c9a565001bc2.png)
### Introduction
This application is a fully functional messenger application similar to Slack or HipChat. It includes the following features,
- State managed with Redux
- React-Redux view
- Selectors with Reselect
- Immutable State
- Live server updates with websockets
- Redux-Saga
- More!
### How to Use This Application
- This application is meant as a reference for students completing Advanced Redux on Pluralsight
- Developers who are already familiar with the technology are welcome to copy the application and make any desired changes

### Getting started
1. Clone the application,
```bash
git clone git@github.com:danielstern/advanced-redux.git
```
2. Install dependencies
```bash
cd advanced-redux
npm install
npm install -g babel-cli
```

3. Start the application
```javascript
npm start
```
or 
```javascript
npm run dev 
```
* `npm run dev` is meant for development and includes file monitoring with Nodemon

4. Navigate to the application in Chrome
[http://localhost:9000/#](http://localhost:9000)

### Troubleshooting the Application
Refer to the following guide if the application does not seem to be working as expected

#### Application not working
Before trying any of the technique below, make sure your application is correctly coded.
1. Clone this repository's master branch
2. Without making any changes to it, run with `npm install` and `npm start`

This should solve 90% of errors. If not, see below: 

#### Correct admin priveleges (Mac only)
1. If you are using Mac, make sure that you installed Mac with [Brew](https://brew.sh/) so that proper admin priveleges are configured

#### Install Global packages
Depending on your OS, NPM may have a hard time running locally installed packages from the command line. To resolve this, manually install the dependencies under `devDependencies` with `npm install -g` or use the following script:

```bash
npm install -g babel-loader@6.2.8 babel-plugin-transform-object-rest-spread@6.19.0 babel-preset-es2015@6.18.0 babel-preset-react@6.23.0 babel-regenerator-runtime@6.5.0 nodemon@1.11.0 webpack@1.13.3 webpack-dev-server@1.16.2 webpack-hot-middleware@2.17.1 webpack-dev-middleware@1.10.1
```
