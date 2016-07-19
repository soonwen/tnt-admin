/**
 * Created by robertzzy on 18/07/16.
 */
require('babel/register');
module.exports = require('./webpack-config.js')({all:true, debug:false});