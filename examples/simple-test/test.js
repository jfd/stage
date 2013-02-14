
'use strict';


function runTest () {
  console.log('Simple test finished successfully!! ');
  process.exit(0);
}


function initStage () {
  var parent = parseInt(process.env['STAGE_PARENT_PID']);
  var signal = process.env['STAGE_PARENT_SIGNAL'];

  if (!parent || isNaN(parent)) {
    return false;
  }

  process.stdin.resume();
  process.on(signal, runTest);

  return true;
}


function ready () {
  var parent = parseInt(process.env['STAGE_PARENT_PID']);
  var signal = process.env['STAGE_PARENT_SIGNAL'];
  process.kill(parent, signal);
}

if (initStage() == true) {
  ready();
} else {
  runTest();
}
