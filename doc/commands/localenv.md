stage-localenv(1) -- Local testing environment
==============================================

## SYNOPSIS

    stage-localenv [options]

## DESCRIPTION

Creates a local environment with both a Master and a Slave running. All test packages are stored in temporary folders and are removed after exit.

## OPTIONS

Available options for command:

* `-v`, `--version`:  
    Shows current version of the command, then exit

* `--help`:  
    Shows the manual page entry for command

* `--usage`:  
    Show command usage, then exit

* `--noshell`:  
    Do not start a shell after servers are runnning. The output from servers are piped to current process with `--loglevel` set to `debug`.

## EXAMPLES

Setup a local environment and then start a shell:

    stage-localenv

Setup a local environment and pipe all output to current process:

    stage-localenv --noshell

## COPYRIGHT

Copyright (C) 2013 Johan Dahlberg <http://jfd.github.com>

## SEE ALSO

* stage(1)
* stage-master(1)
* stage-slave(1)