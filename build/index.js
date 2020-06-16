const fs = require('fs-extra')
const glob = require("glob")
const copyCustomCom = require('./copyCustomCom')
const { run } = require('runjs')
const rawArgv = process.argv.slice(2)
const args = rawArgv.join(' ')

function main() {
  removePath(() => run(`vue-cli-service uni-build ${args}`))
}

// 删除旧的文件
function removePath(callback) {
  Promise.all(copyCustomCom.toPath.map(item => {
    return fs.remove(item)
  })).then(() => {
    copyFiles(callback)
  }).catch(err => {
    console.log('删除失败', err)
  })
}

// 拷贝文件
function copyFiles(callback) {
  Promise.all(copyCustomCom.copyArr.map(item => item())).then(() => {
    delUselessFiles(callback)
  }).catch(err => {
    console.log('拷贝失败', err)
  })
}

// 删除没用的文件
function delUselessFiles(callback) {
  const delFileLists = copyCustomCom.toPath.map(item => glob.sync(item + '/**/*.{d.ts,md,bak}')).reduce((prev, curr) => prev.concat(curr))
	// 删除json  md 等不必要文件
	delFileLists.reduce((promise, fileName) => {
		return promise.then(() => {
			return fs.remove(fileName)
		})
	}, Promise.resolve([])).then(() => {
		callback()
	})
}

main()
