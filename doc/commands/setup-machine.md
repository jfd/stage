stage-setup-machine(1) -- Installs dependencies on a remote machine via SSH.
============================================================================

## SYNOPSIS

    stage-setup-machine [options] <master|slave> [<install target> ...]

## DESCRIPTION

Installs _stage_ on one or more remote machine via SSH.

## OPTIONS

Available options for command:

* `-v`, `--version`:  
    Shows current version of the command, then exit

* `--help`:  
    Shows the manual page entry for command

* `--usage`:  
    Show command usage, then exit

* `--quiet`:  
    Do not print any information.

* `--silent`:  
    See _--quiet_

* `--debug`:  
    More verbose output

* `--reconnect-attempts <attempts>`:  
    Number of reconnect attempts. Defaults to 50

* `--remote-port <port>`:  
    The _port_ in which the target machine(s) should listen for public connections. This option is only valid if target is _<master>_

* `--remote-loglevel <silent|fatal|warn|info|verb|debug>`:  
    The _loglevel_ for the remote target machine(s). This option is only valid if target is _<master>_

* `--remote-maxjobs <number>`:  
    Maximum number of simultaneously running jobs  which the target machine(s) should work on. This option is only valid if target is _<master>_

* `--remote-token <token>`:  
    The _token_ for the target machine(s). This option is only valid if target is _<master>_

* `--remote-url <url>`:  
    The _url_ in which the target machine(s) should connect to. This option is only valid if target is _<slave>_

* `--private-key <path>`:  
          The _path_ to the private key to use when issuing the SSH-connection. This options is optional and defaults to _<NONE>_


## EXAMPLES

Installs dependencies and spawns a Stage Master Server on host 127.0.0.1:

    stage-setup-machine master 127.0.0.1

Installs dependencies and spawns a Stage Slave Server on host 127.0.0.1:

    stage-setup-machine slave 127.0.0.1 --remote-url http://127.0.0.1:8080

## COPYRIGHT

Copyright (C) 2013 Johan Dahlberg <http://jfd.github.com>

## SEE ALSO

* stage-run(1)