stage-init-test(1) -- Initializes test
======================================

## SYNOPSIS

    stage-init-test [options] <path>

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

* `--force`:  
    Force init, even if files exists.

* `--package-author <author>`:  
    Name of the author of test package.

* `--package-name <name>`: 
    Name of the test package.

* `--package-version <version>`: 
    Version of the test package.


## EXAMPLES

Initializes a test in path _mytest_:

    stage-init-test mytest

## ENVIRONMENT VARIABLES

The following enivornment variables are used by command:

  *STAGE_AUTHOR*  
  The name of the author

## COPYRIGHT

Copyright (C) 2013 Johan Dahlberg <http://jfd.github.com>

## SEE ALSO

* stage(1)