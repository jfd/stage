stage-master(1) -- Spawn Master
===============================

## SYNOPSIS

    stage-master [options]

## DESCRIPTION

Spawns a Master Server process.

## OPTIONS

Available options for command:

* `-v`, `--version`:  
    Shows current version of the command, then exit

* `--help`:  
    Shows the manual page entry for command

* `--usage`:  
    Show command usage, then exit

* `-p`, `--port <port>`:  
    Port to listen too. Defaults to 8080

* `--host <host>`:  
    Host to listen too. Default to all

* `--cachepath <path>`:  
    Path where test packages should be stored. Default to _cache_ in current workdir.

* `--loglevel <silent|fatal|warn|info|verb|debug>`:  
    Log level. Defaults to _warn_.

* `--maxjobs <number>`:  
    Maximum number of simultaneously running jobs. Default to 5.

* `--token <token>`:  
    A token that remote connections must pass in order to use the API

* `--secure`:  
    Use HTTPS and WSS instead of HTTP and WS for public interfaces. The _--key_ and _--cert_ must be set when using the secure option (see below).
    
* `--key <path>`:  
    Path to key file

* `--cert <path>`:  
    Path to cert file

* `--joblifetime <minutes>`:  
    Number of minutes before a completed job is removed from memory. Default is 1440 (24 hours).

* `--forkmode`:  
        Starts process in `forkmode`. Server listen to a random port and sends the `address` and `port` in a message to parent process.
    
## EXAMPLES

Spawns a new server listening to port 9000

    stage-master --port 9000

## COPYRIGHT

Copyright (C) 2013 Johan Dahlberg <http://jfd.github.com>

## SEE ALSO

* stage(1)
* stage-slave(1)
* stage-localenv(1)