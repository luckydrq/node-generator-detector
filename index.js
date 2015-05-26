module.exports = function() {
  try {
    eval('var gen = function *(){}')
    return gen.constructor.name === 'GeneratorFunction'
  } catch (e) {
    return false
  }
}
