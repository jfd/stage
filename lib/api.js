
"use strict";

var parseUrl                  = require("url").parse;
var formatUrl                 = require("url").format;

var format                    = require("util").format;

var JOBSTATE_QUEUED           = "queued";
var JOBSTATE_INITIALIZED      = "initialized";
var JOBSTATE_INSTALLING       = "installing";
var JOBSTATE_SETUP            = "setup";
var JOBSTATE_RUNNING          = "running";
var JOBSTATE_STOPPING         = "stopping";
var JOBSTATE_FINISHED         = "finished";
var JOBSTATE_KILLED           = "killed";


exports.prepareRequest        = prepareRequest;
exports.runJob                = runJob;
exports.listJobs              = listJobs;
exports.abortJob              = abortJob;
exports.listTests             = listTests;
exports.uninstallTests        = uninstallTests;
exports.listClients           = listClients;
exports.getReport             = getReport;


function runJob (apiurl, name, params, config, C) {
  var req;
  var opts;

  opts = {
    method        : "POST",
    json          : true,
    url           : apiurl,
    query         : name,
    params        : params,
    path          : "jobs"
  };

  req = prepareRequest(opts, function (err, job) {
    if (err) return C(err);
    job.status = getJobStatusMessage(job);
    return C(null, job);
  });

  req.setHeader("Content-Type", "application/json");
  req.write(JSON.stringify(config || {}));

  req.end();

  return req;
}




function listJobs (apiurl, C) {
  var req;
  var opts;

  opts = {
    json          : true,
    url           : apiurl,
    path          : "jobs"
  };

  req = prepareRequest(opts, function (err, list) {
    if (err) return C(err);
    list.forEach(function (job) {
      job.status = getJobStatusMessage(job);
    });
    return C(null, list);
  });

  req.end();
}


function abortJob (apiurl, id, C) {
  var req;
  var opts;

  opts = {
    method        : "DELETE",
    url           : apiurl,
    path          : "jobs",
    query         : id
  };

  req = prepareRequest(opts, C);
  req.end();
}


function listTests (apiurl, pattern, C) {
  var req;
  var opts;

  if (typeof pattern == "function") {
    C = pattern;
    pattern = null;
  }

  opts = {
    method        : "GET",
    url           : apiurl,
    path          : "tests",
    query         : pattern
  };

  req = prepareRequest(opts, C);
  req.end();
}


function uninstallTests (apiurl, pattern, C) {
  var req;
  var opts;

  opts = {
    method        : "DELETE",
    url           : apiurl,
    path          : "tests",
    query         : pattern
  };

  req = prepareRequest(opts, C);
  req.end();
}


function listClients (apiurl, role, C) {
  var req;
  var opts;

  if (typeof role == "function") {
    C = role;
    role = null;
  }

  opts = {
    method        : "GET",
    url           : apiurl,
    path          : "clients",
    query         : role
  };

  req = prepareRequest(opts, C);

  req.end();
}


function getReport (apiurl, id, C) {
  var req;
  var opts;

  opts = {
    method        : "GET",
    url           : apiurl,
    path          : "jobs",
    query         : id
  };

  req = prepareRequest(opts, C);
  req.end();
}


function prepareRequest (opts, C) {
  var url;
  var reqopts;
  var protocol;
  var path;
  var search;
  var port;
  var method;
  var query;
  var req;


  if (opts.params && Object.keys(opts.params).length > 0) {
    url = parseUrl(opts.url, true);
    for (var k in opts.params) {
      url.query[k] = opts.params[k];
    }
    url = parseUrl(formatUrl(url));
  } else {
    url = parseUrl(opts.url);
  }

  protocol = /[a-z]+/.exec(url.protocol)[0];

  switch (protocol) {
    default:
    process.nextTick(function () {
      C(new Error("Expected 'http' or 'https' in url"));
    });
    return { end: function () {} };
    case "ws":
    protocol = "http";
    break;    
    case "wss":
    protocol = "https";
    break;    
    case "http":
    case "https":
    break;
  }

  search = (url.search ? url.search : "");
  query = opts.query ? opts.query + "/" : "";
  path = "/" + opts.path + "/" + query + search;
  port = url.port || (protocol == "http" ? 80 : 443);
  method = opts.method || "GET";

  reqopts = {
    hostname    : url.hostname,
    port        : port,
    path        : path,
    method      : method
  };

  req = require(protocol).request(reqopts);

  req.setHeader("X-Requested-With", "XMLHttpRequest");

  req.on("response", function (res) {
    var data;

    res.setEncoding("utf8");
    res.on("data", function (chunk) {
      data = data ? data + chunk : chunk;
    });

    res.on("end", function () {
      var graph;
      if (res.statusCode == 200) {
        if (res.headers["content-type"] == "application/json") {
          try {
            graph = JSON.parse(data);
          } catch (err) {
            return C(err);
          }
        }
        if (opts.json && !graph) {
          return C(new Error("expected application/json as response"));
        } 
        return C(null, graph || data);
      }

      var errstr = "HTTP_" + res.statusCode + ": ";
      return C(new Error(errstr + (data || "Unknown error")));
    });
  });

  req.on("error", function (err) {
    return C(err);
  });

  return req;
}


function getJobStatusMessage (job) {
  switch (job.state) {

    case JOBSTATE_QUEUED:
    return format("Job is currently queued");

    case JOBSTATE_INSTALLING:
    return format("Installing test package on clients (%s of %s)",
                  job.installCount,
                  job.clientCount);

    case JOBSTATE_SETUP:
    return format("Clients are setting up (%s of %s)",
                  job.setupCount,
                  job.clientCount);

    case JOBSTATE_RUNNING:
    return format("Test is running, started %s sec ago",
                  Date.now() - job.startTime);

    case JOBSTATE_FINISHED:
    return format("Test is finished (%s ms)",
                  job.finishtime - job.starttime);
  }
};
