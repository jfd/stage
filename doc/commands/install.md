stage-install(1) -- Install package
===================================

## SYNOPSIS

    stage-install [options] <path>

## DESCRIPTION

Aborts a currently running job on all Slave machines.

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

* `--force`:  
    Force to install package, even if already exists on Master Server


## EXAMPLES

Install the test package located in directory test:

    stage-install test

## ENVIRONMENT VARIABLES

The following enivornment variables are used by command:

  *STAGE_URL*  
  The full URL to the Stage Master Server e.g `http://myserver:8080/`.

## COPYRIGHT

Copyright (C) 2013 Johan Dahlberg <http://jfd.github.com>

## SEE ALSO

* stage-run(1)