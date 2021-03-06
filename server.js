var path             = require('path');
var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./config/webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: path.resolve(__dirname, 'src'),
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});