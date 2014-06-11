var exec = require('child_process').exec;

module.exports = function(done) {
  exec('node --v8-options', {encoding: 'utf8'}, function(err, stdout, stderr){
    if (err) {
      done(err);
    } else {
      done(null, !!~stdout.indexOf('--harmony_generators'));
    }
  });
};

