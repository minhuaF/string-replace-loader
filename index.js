const loaderUtils = require('loader-utils')
const pkg = require('./package.json')
const chalk = require('chalk')
module.exports = function(source){
  if(!source) return source

  const options = loaderUtils.getOptions(this)
  const rules = new RegExp(options.changeRules)
  const temp = options.changeTemp
  var newSour = source.replace(rules, function(text, key){
    if(!temp[key]){
      throw new Error(pkg.name + ' can not find the '+ text + ' in your changeTemp. Please check your config')
    }
    return temp[key]
  })
  return newSour
}