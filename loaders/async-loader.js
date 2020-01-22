module.exports = function(source) {
    console.log('async source', source);

    // this.async告诉webpack转换是异步的 返回callback函数 Loader会在callback中回调结果
  var callback = this.async()
  let result = source.replace('hello', 'async-loader')

  setTimeout(function() {
      console.log('async return')
      callback(null, result)
  }, 2000)
//   someAsyncOperation(source, function(err,result,sourceMaps,ast) {
//   	callback(err,result,sourceMaps,ast)
//   })
// 关闭该 Loader 的缓存功能 计算量大
// this.cacheable(false);
}
// module.exports.raw = true; 定义传入文件的格式为buffer

// module.exports.pitch = function(remainingRequest, precedingRequest, data) {
//     console.log('--------------')
//     console.log(remainingRequest)

//     console.log(precedingRequest)

//     console.log(data)

//   };