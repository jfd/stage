"use strict";

var spawn                     = require("child_process").spawn;

var basename                  = require("path").basename;

var parseUrl                  = require("url").parse;
var formatUrl                 = require("url").format;

var PROGRAM                   = basename(process.argv[1]);

exports.usage                 = usage;
exports.version               = version;
exports.help                  = help;
exports.halt                  = halt;
exports.url                   = url;
exports.toHttpUrl             = toHttpUrl;
exports.toWsUrl               = toWsUrl;
exports.convertUrl            = convertUrl;


function usage (righthand) {
  console.log("%s [options] %s", PROGRAM, righthand || "");
  process.exit(1);
}


function version () {
  console.log(require("../package").version);
  process.exit(1);
}


function help () {
  spawn("man", [PROGRAM], { customFds : [0, 1, 2] });
}


function halt (reason) {
  console.error("%s: %s", PROGRAM, reason);
  process.exit(1);
}


function toHttpUrl (url) {
  var dest;

  if (/^(http|https|ws|wss):/.test(url) == false) {
    url = "http://" + url;
  }

  dest = parseUrl(url);

  switch (dest.protocol) {
    case "wss:":
    case "https:":
    dest.protocol = "https:";
    break;

    default:
    dest.protocol = "http:";
    break;
  }

  return formatUrl(dest);
}


function toWsUrl (url) {
  var dest;

  if (/^(http|https|ws|wss):/.test(url) == false) {
    url = "http://" + url;
  }

  dest = parseUrl(url);

  switch (dest.protocol) {
    case "wss:":
    case "https:":
    dest.protocol = "wss:";
    break;

    default:
    dest.protocol = "ws:";
    break;
  }

  return formatUrl(dest);
}


function url (base, key, value) {
  var url = parseUrl(base, true);

  switch (key) {

    case "--url":
    return value;

    case "--hostname":
    url.host = value + (url.port ? ":" + url.port : "");
    return formatUrl(url);

    case "--port":
    url.host = url.hostname + ":" + value;
    return formatUrl(url);

    case "--token":
    url.query["token"] = value;
    return formatUrl(url);

    case "--secure":
    switch (url.protocol) {
      case "http:":
      case "https:":
      url.protocol = "https:";
      break;
      case "ws:":
      case "wss:":
      url.protocol = "wss:";
      break;
    }
    return formatUrl(url);

    default:
    url.query[/^--/.test(key) ? key.substr(2) : key] = value;
    return formatUrl(url);
  }

  throw new Error("bad url key " + key);
}


function convertUrl (baseurl, newprotocol) {
  newprotocol = newprotocol || "http:";
  url = parseUrl(baseurl);
  url.protocol = newprotocol;
  return formatUrl(url);
}
