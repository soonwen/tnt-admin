/**
 * Created by robertzzy on 30/07/16.
 */
require('babel/register');
module.exports = require('./webpack-config.js')({debug:true, local:true});