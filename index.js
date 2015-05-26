module.exports = function() {
  try {
    eval('var gen = function *(){}');
    return typeof gen === 'function' && gen.constructor.name == 'GeneratorFunction';
  } catch(e) {
    return false;
  }
};
