# website-experiment
Experiments with webpack, etc

* Updated node.js to v6.3.1
`node -v`
`v6.3.1`

* Install webpack 
`npm install webpack -g` or `sudo npm install webpack -g`

* Followed tutorial
http://webpack.github.io/docs/tutorials/getting-started/

* Install webpack-dev-server
`npm install webpack-dev-server -g` or `sudo npm install webpack-dev-server -g`

Then I checked it out again and all stopped working. I needed to do this again...
`npm install css-loader style-loader`
but let's do something else...
`npm init` creates package.json
'sudo npm install [packages]`

Now I want to use React.

*`npm install --save react react-dom babel-preset-react babel-loader babel-core babel-preset-es2015`
* configure webpack.config.js loaders to include babel-loader

Found a cool website https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
