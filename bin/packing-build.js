#!/home/q/node/node-v4.2.4-linux-x64/bin/node

require('packing/util/babel-register');

const nopt = require('nopt');

const program = nopt(process.argv, 2);
const webpack = require('webpack');
const pRequire = require('packing/util/require');

const webpackConfig = pRequire('config/webpack.build.babel', program);

webpack(webpackConfig, function (err, stats) {
  if (err) {
    console.log(err);
  } else if (stats.hasErrors() || stats.hasWarnings()) {
    console.log('💔  webpack: bundle is now INVALID.');
  } else {
    console.log(stats.toString(stats));
    console.log('💚  webpack: bundle is now VALID.');
  }
});
