stage-run(1) -- Run test
==========================

## SYNOPSIS

    stage-run [options] <test>

## DESCRIPTION

Orders Master Server to run specified _<test>_

## OPTIONS

Available options for command:

* `-v`, `--version`:  
    Shows current version of the command, then exit

* `--help`:  
    Shows the manual page entry for command

* `--usage`:  
    Show command usage, then exit

* `--url <url>`:  
    Full _url_ where to the Stage Master Server. This can also be controlled by setting the STAGE_URL environment variable.

* `--host <host>`:  
    Set the _host_ of current _url_ to the Stage Master Server.

* `--port <port>`:  
    Set the _port_ of current _url_ to the Stage Master Server.

* `--secure`:  
    Indicates that the _url_ to the Stage Master Server is secure. The protocol of the _url_ is changed to _https_

* `--token <token>`:  
    Sends the required _token_ requested by the Stage Master Server.

* `--json`:  
    Format output as JSON instead of text

* `--clients <number>`:  
    Number of clients that Master Server should allocate for test. Default is '0' which indicates any number of free clients.


Each option passed after a double dash (*--*) is sent to the test as a config parameter. Config parameters can be accessed through the environmental variable collection in scripts. The config paramters are prefixed with `npm_package_config_` in order to be compatible with `npm`.

## EXAMPLES

Runs test 'mytest' with version '1.0.0':

    stage-run mytest@1.0.0

Runs test 'mytest' with config parameter port set to 8080. The config paramter is accessed in script with `process.env["npm_package_config_port"]`:

    stage-run mytest@1.0.0 -- --port 8080

## ENVIRONMENT VARIABLES

The following enivornment variables are used by command:

  *STAGE_URL*  
  The full URL to the Stage Master Server e.g `http://myserver:8080/`.

## COPYRIGHT

Copyright (C) 2013 Johan Dahlberg <http://jfd.github.com>

## SEE ALSO

* stage-run(1)