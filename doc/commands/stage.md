stage(1) -- Distributed Testing Suite
=====================================

## SYNOPSIS

    stage <command>

## DESCRIPTION

Stage is a distributed testing suite for Node.js. The main goal is to provide a test suite that can help with network related test cases such as load balancing and performance testing.

Stage includes tools for setting up test networks (via SSH or Joyent SmartDC), distribute and running test and collecting results.

## OPTIONS

Available options for command:

* `-v`, `--version`:  
    Shows current version of the command, then exit

* `--help`:  
    Shows the manual page entry for command

* `--usage`:  
    Show command usage, then exit


## Commands

Stage comes with a great set of commands and utilities. The commands are divided into two categories, base commands (aslo known as _master server commands_) and utility commands (also known as _extras_).

The Master Server commands talkes directly to specified Stage Master Server while the _extras_ contains commands more suited for maintainence and setup. 

A developer can also extend the list with more _extras_ commands by specify one or more paths via the environmental variable *STAGE_EXTRAS_PATH*. If set, Stage search all specified paths for executables that starts with "stage-".


### Base commands

* `stage-abort`:  
    Aborts a currently running test

* `stage-clients`:  
    List available clients (slaves and monitors) on master process

* `stage-collect`:  
    Get's report for specifed test

* `stage-install`:  
    Installs a test package on master process

* `stage-jobs`:  
    List all running and finished jobs on master process

* `stage-master`:  
    Spawns a master server process

* `stage-run`:  
    Runs a test package on master process

* `stage-slave`:  
    Spawns a slave server process

* `stage-tests`:  
    List all available test packages on master process

* `stage-uninstall`:  
    Uninstalls a test package on master process


### Built-in Extras

* `stage-init-test`:  
    Initializes a test template.

* `stage-setup-machine`:  
    Installs dependencies for a master or slave server on a remote machine via SSH.

* `stage-setup-smartdc`:  
    Creates and installs dependencies for a master or slave on a SmartDC machine.


## EXAMPLES

Shows current version of Stage:

    stage --version

Executes the command `stage-abort`:

    stage abort 1

## ENVIRONMENT VARIABLES

The following enivornment variables are used by command:

  *STAGE\_EXTRAS\_PATH*  
  One or more paths where to search for extras.

## COPYRIGHT

Copyright (C) 2013 Johan Dahlberg <http://jfd.github.com>

## SEE ALSO

* stage-abort(1)
* stage-clean-smartdc(1)
* stage-clients(1)
* stage-collect(1)
* stage-init-test(1)
* stage-install(1)
* stage-jobs(1)
* stage-localenv(1)
* stage-master(1)
* stage-run(1)
* stage-setup-machine(1)
* stage-setup-smartdc(1)
* stage-slave(1)
* stage-tests(1)
* stage-uninstall(1)
