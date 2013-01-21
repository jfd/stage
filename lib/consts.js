
exports.DEFAULT_LOGLEVEL      = 0x2;

exports.DEFAULT_URL           = process.env["STAGE_URL"] ||
                                "http://127.0.0.1:8080/";


// Intercom op-codes
exports.SOP_INSTALL           = 0x10;
exports.COP_INSTALL           = 0x11;
exports.SOP_SETUP             = 0x12;
exports.COP_SETUP             = 0x13;
exports.SOP_START             = 0x14;
exports.COP_START             = 0x15;
exports.COP_RESULT            = 0x16;
exports.SOP_ABORT             = 0x1E;
exports.COP_TESTERROR         = 0x1F;
exports.SOP_JOBSTATE          = 0x20;


// Job state contants
exports.JOBSTATE_NA           = "na";
exports.JOBSTATE_QUEUED       = "queued";
exports.JOBSTATE_INITIALIZED  = "initialized";
exports.JOBSTATE_INSTALLING   = "installing";
exports.JOBSTATE_INSTALLED    = "installed";
exports.JOBSTATE_SETUP        = "setup";
exports.JOBSTATE_RUNNING      = "running";
exports.JOBSTATE_STOPPING     = "stopping";
exports.JOBSTATE_FINISHED     = "finished";
exports.JOBSTATE_KILLED       = "killed";


exports.LOG_FATAL             = 0x1;
exports.LOG_WARN              = 0x2;
exports.LOG_INFO              = 0x3;
exports.LOG_VERBOSE           = 0x4;
exports.LOG_DEBUG             = 0x5;



exports.LOG_LEVELS            = ["silent",
                                 "fatal",
                                 "warn",
                                 "info",
                                 "verb",
                                 "debug"];