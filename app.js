const app    = require('koa')();
const logger = require('koa-logger')

app.use(logger());
// 静态文件中间件
app.use(require('koa-static')(__dirname + '/public'));

// 使用pug模板
var Pug = require('koa-pug');

var pug = new Pug({
    viewPath: './views',
    app: app
});

app.use(require('./router/index').routes());

// error
app.on('error', function(err, cxt) {
    // to do 改成日志打印
    console.log(err);
});


app.listen(8080);
