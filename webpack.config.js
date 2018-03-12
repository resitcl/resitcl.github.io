var glob = require("glob");
var webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: {
     js: [...glob.sync("./js/*.js")], 
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}