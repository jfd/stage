stage-setup-smartdc(1) -- Setup Stage on a new SmartDC machine
==============================================================

## SYNOPSIS

    stage-setup-smartdc [options] <master|slave>

## DESCRIPTION

Creates a new machine (or machines) on Joyent SmartDC and then installs _stage_ with depencencies via SSH.

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

* `--sdcurl <url>`:  
    The _URL_ for the Joyent API (e.g. https://us-sw-1.api.joyentcloud.com/)

* `--account <account>`:  
    Joyent account name

* `--keyid <keyid>`:  
    Key name of the SSH/RSA Key associated with your Joyent account

* `--account <account>`:  
    Path to the SSH/RSA key associated with your Joyent account

## EXAMPLES

Creates a new machine on Joyent SmartDC and then install and starts a Master Server:

    stage-setup-smartdc master

Creates five new Joyent SmartDC machines and then installs Stage Slave Server on them:

    stage-setup-smartdc slave --no-of-machines 5

## ENVIRONMENT VARIABLES

The following enivornment variables are used by command:

  *SDC\_CLI\_URL*  
  The _URL_ for the Joyent API (e.g. https://us-sw-1.api.joyentcloud.com/)

  *SDC\_CLI\_ACCOUNT*  
  Joyent account name

  *SDC\_CLI\_KEY\_ID*  
  Key name of the SSH/RSA Key associated with your Joyent account

  *SDC\_CLI\_IDENTITY*  
  Path to the SSH/RSA key associated with your Joyent account

## COPYRIGHT

Copyright (C) 2013 Johan Dahlberg <http://jfd.github.com>

## SEE ALSO

* stage(1)
* stage-setup-machine(1)