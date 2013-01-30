stage-slave(1) -- Spawn Slave
=============================

## SYNOPSIS

    stage-slave [options]

## DESCRIPTION

Spawns a new Stage Slave Server process.

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

* `--port <port`:  
    Set the _port_ of current _url_ to the Stage Master Server.

* `--secure`:  
    Indicates that the _url_ to the Stage Master Server is secure. The protocol of the _url_ is changed to _https_

* `--token <token>`:  
    Sends the required _token_ requested by the Stage Master Server.

* `--cachepath <path>`:  
    Path where test packages should be stored. Default to _cache_ in current workdir.

* `--loglevel <silent|fatal|warn|info|verb|debug>`:  
    Log level. Defaults to _warn_.

* `--signal <SIGUSR1|SIGUSR2>`:  
    Signal used to communicate with tests.

* `--forkmode`:  
    Starts process in `forkmode`. Sends a `{ url: <url> }`-message to parent process, each time connected to the Master process.

## EXAMPLES

Spawns a new Slave Server that connects to a running Master Server on 127.0.0.1:9000:

    stage-slave --url 127.0.0.1:9000

## ENVIRONMENT VARIABLES

The following enivornment variables are used by command:

  *STAGE_URL*  
  The full URL to the Stage Master Server e.g `http://myserver:8080/`.

## COPYRIGHT

Copyright (C) 2013 Johan Dahlberg <http://jfd.github.com>

## SEE ALSO

* stage(1)
* stage-master(1)
* stage-localenv(1)