#!/bin/env node

var hatenaGraph = require('hatena-graph-api');

var username = process.env.HATENA_USERNAME;
var apikey = process.env.HATENA_APIKEY;

if (!username || !apikey) {
  console.log('export HATENA_USERNAME=\'username\'');
  process.exit(1);
  return;
}

if (!apikey) {
  console.log('export HATENA_APIKEY=\'apikey\'');
  process.exit(1);
  return;
}

var graph = hatenaGraph(username, apikey);

if (process.argv.length < 5) {
  console.log('node index <graphname> <yyyy-mm-dd> <value>');
  process.exit(1);
  return;
}

var graphname = process.argv[2];
var date = process.argv[3];
var value = process.argv[4];

graph.postData(graphname, date, value, function(err) {
  if (err) console.error(err);
});

