const loaderUtils = require('loader-utils');
module.exports = function(source) {
    console.log('source', source);
    // source 是compiler传递给Loader的一个文件的原内容 utf-8字符串
    
    // 获取用户为当前Loader传入的options | this.query
    const options = loaderUtils.getOptions(this)
    let result = '';
    if(options && options.data) {
        result = source.replace('async-loader', 'hahaha'+ options.data)

    }else {
        result = source.replace('async-loader', 'no options')

    }
    return result;

    // this.callback(null, result, sourceMap, data)  是webpack向Loader注入的API
}

// 从左到右调用pitch 
// 当pitch中无返回结果 继续往下 然后从右到左执行loader 
// 若返回结果则跳过后面pitch 往回执行loader(当前loader不执行)
// module.exports.pitch = function(remainingRequest, precedingRequest, data) {
//     console.log('--------------')
//     console.log(remainingRequest)

//     console.log(precedingRequest)

//     console.log(data)
//     return 2020
//   };