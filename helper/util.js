
var fs = require('fs');

module.exports = {

    trim(str) {
        return str.replace(/^\s+/, '').replace(/\s+$/, '');
    },

    readFile(filename) {
        return new Promise(function(resolve, reject) {
            var setting = {
                encoding: 'utf8'
            };
            fs.readFile(filename, setting, function(err, data) {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        });
    },

    /**
     * 获取指定目录下的所有文件和目录
     */
    readDir(pathname) {
        return new Promise(function(resolve, reject) {
            fs.readdir(pathname, function(err, res) {
                if (err) {
                    return reject(err);
                }
                resolve(res);
            });
        });
    },

    /**
     * 获取一个文件前256个字节的内容
     */
    head256(filename) {
        return new Promise(function(resolve, reject) {
            var line  = '';
            var readStream = fs.createReadStream(filename, {
                encoding: 'utf8',
                start: 0,
                end  : 256
            });
            readStream.on('data', function(data) {
                line += data;
            });
            readStream.on('end', function() {
                resolve(line);
            });

            readStream.on('error', function(err) {
                console.log('error', err);
                reject(err);
            });
        });
    },

    /**
     * 判断文件是否存在
     */
    fileExist: function(filename) {
        return new Promise(function(resolve, reject) {
            fs.access(filename, function(err) {
                if (err) {
                    // not exist
                    // 这里的错误先不处理
                    return resolve(false);
                }
                resolve(true);
            });
        });
    }
};
