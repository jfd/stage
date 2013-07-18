stage-clean-smartdc(1) -- Stops and deletes all your SmartDC machines
=====================================================================

## SYNOPSIS

    stage-clean-smartdc [options]

## DESCRIPTION

Cleans (stops and deletes) your SmartDC machine pool. This command stops and deletes **all** available machines, so use with caution.

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

* `--ignore-confirm`:  
    Do not show the confirm prompt (run command without confirmation).

* `--no-of-attempts <number>`:  
    Number of stop/delete attempts per machine. Default=5

* `--sdcurl <url>`:  
    The _URL_ for the Joyent API (e.g. https://us-sw-1.api.joyentcloud.com/)

* `--account <account>`:  
    Joyent account name

* `--keyid <keyid>`:  
    Key name of the SSH/RSA Key associated with your Joyent account


## EXAMPLES

Deletes all machines without confirmation:

    stage-clean-smartdc --ignore-confirm


## ENVIRONMENT VARIABLES

The following enivornment variables are used by command:

  *SDC\_URL*  
  The _URL_ for the Joyent API (e.g. https://us-sw-1.api.joyentcloud.com/)

  *SDC\_ACCOUNT*  
  Joyent account name

  *SDC\_KEY\_ID*  
  Key name of the SSH/RSA Key associated with your Joyent account

## COPYRIGHT

Copyright (C) 2013 Johan Dahlberg <http://jfd.github.com>

## SEE ALSO

* stage(1)
* stage-setup-machine(1)
* stage-setup-smartdc(1)