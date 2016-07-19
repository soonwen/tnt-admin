require('babel/register');
module.exports = require('./webpack-config.js')({app:true, debug:true});