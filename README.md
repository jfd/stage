Stage - Distributed Testing Suite
=================================

Stage is a distributed testing suite for Node.js. The main goal is to provide a test suite that can help with network related test cases such as load balancing and performance testing.

Stage includes tools for setting up test networks (via SSH or Joyent SmartDC), distribute and running test and collecting results.


## Installation

Stage installs via NPM. Run the following command in your terminal:

    $  npm install stage -g


## Example

This example is creating a testing enviroment using your current Joyent Smartdc settings (expects that SDC is currently installed and configured with environmental variables). 

First of, we need to setup a Stage Master server:

    $  stage setup-smartdc master

The Master Server it self cannot run tests. This is done by slave servers. We can simply setup a Stage Slave server with the `setup-smartdc` command as well:

    $  stage setup-smartdc slave --remote-url ws://<ip-and-port-to-master-server>

We are now ready to create our first test. Stage comes with a tool that initialize a basic test for you:

    $  stage init-test mytest

Our test is now created in the folder 'mytest'. The test can be run out-of-the-box but will not do much. In order for it do to something, you can edit the 'test.js' file.

All commands from this point is need to now the address to the master server. There is two ways of telling the command who to talk to. Via the comamnd line or via an environmental variable. We will go with the environmental variable in this case.

    $   export STAGE_URL=http://<ip-and-port-to-master-server>

You could pass the argument `--url http://<ip-and-port-to-master-server>` if you prefer to leave the environment untouched.

It is now time to install the test on the Master Server:

    $  stage install mytest

The test is now installed. Next step is to tell the master to run the test on the connected Slave. Note that this phase is async, the command will exit immidently.

    $  stage run mytest@1.0.0

You can monitor the test via the `stage list` command. Once it is ready, you can collect the test results. This is done with the `stage collect` command:

    $  stage collect 1

This is just a basic example in how to use Stage. See manpages for more information:

    $  stage help


## Issues

Please report any issue on github: https://github.com/jfd/stage/issues

## License

Stage is licensed under the MIT license. See LICENSE in this repo for more information.


## Copyright

Copyright (c) 2013 Johan Dahlberg <http://jfd.github.com>