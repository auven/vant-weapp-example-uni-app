const CopyWebpackPlugin = require('copy-webpack-plugin')
const vantWeapp = require('./vant-weapp')
const _ = require('../util')

const formatPath = package => {
  if (!package.packages || !package.packages.length) {
    return [{
      from: _.resolve(package.from),
      to: _.resolve(package.to)
    }]
  }
  return package.packages.map(item => {
    return {
      from: _.resolve(package.from + item),
      to: _.resolve(package.to + item)
    }
  })
}

module.exports = new CopyWebpackPlugin([...formatPath(vantWeapp)], {})
