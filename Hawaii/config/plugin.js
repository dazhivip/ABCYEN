'use strict';

// had enabled by egg
// exports.static = true;
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.passportLocal = {
  enable: true,
  package: 'egg-passport-local',
};