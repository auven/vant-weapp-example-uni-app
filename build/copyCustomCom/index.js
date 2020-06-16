const fs = require('fs-extra')
const vantWeapp = require('./vant-weapp')
const _ = require('../util')

const formatPath = package => {
  if (!package.packages || !package.packages.length) {
    return [() => fs.copy(_.resolve(package.from), _.resolve(package.to))]
  }
  return package.packages.map(item => {
    return () => fs.copy(_.resolve(package.from + item), _.resolve(package.to + item))
  })
}

exports.copyArr = [...formatPath(vantWeapp)]

exports.toPath = [_.resolve(vantWeapp.to)]
