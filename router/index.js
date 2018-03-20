/**
 * 路由分发
 */

const path   = require('path');
const router = require('koa-router')();
const marked = require('marked');
const eol    = require('os').EOL;

const util   = require('../helper/util');

marked.setOptions({
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists : true,
    smartypants: true
});

/**
 * 首页
 */
router.get('/', function * () {
    this.render('page/index');
});

/**
 * 产品线首页
 */
router.get('/:prod', function * () {
    var prod = this.params.prod;
    try {
        this.render('page/' + prod + '/index');
    } catch (e) {
        this.status = 404;
        this.render('page/404');
    }
});

/**
 * 文档页
 */
router.get('/:prod/*.md', function * (next) {
    var url  = this.path;
    var prod = this.params.prod;
    var data = this.data = {
        title: prod
    };

    var page = path.join(__dirname, '../views/page');

    this.realPath = [prod, 'doc'].concat(url.split('/').slice(2)).join('/');
    if (!/\.[^\/]+$/.test(this.realPath)) {
        this.realPath += '.md';
    }
    this.file = path.join(page, this.realPath);
    try {
        var content  = yield util.readFile(this.file);
        data.content = marked(content);

    } catch (e) {
        this.status = 404;
        this.render('page/404');
        return;
    }
    yield next;
    // 匹配模板
    try {
        this.render('page/' + prod + '/doc', data);

    } catch (e) {
        this.status = 404;
        this.render('page/404');
    }

}, function * () {
    // 读取目录信息
    // var dir  = this.file.replace(/(\/)[^\/]+$/, '$1');
    var dir  = this.file.split(path.sep).slice(0,-1).join(path.sep);
    var self = this;
    var list = yield util.readDir(dir);
    // 只取.md 结尾的文件
    list = list.filter(function(file) {
        if (/\.md$/.test(file)) {
            return true;
        }
    });

    var current = 0;

    var catalogue = yield list.map(function * (file, i) {
        var p = path.join(dir, file);
        if (p === self.file) {
            current = i;
        }
        var res = yield util.head256(p);
        var arr = res.split(eol);
        // 读标题和索引
        var index = 0;
        for (var line of arr) {
            var match = line.match(/<!--\s*(\d+)\s*-->/);
            if (match) {
                index = +match[1];
                break;
            }
        }
        var title = arr.find(function(l) {
            if (/#[^#]+$/.test(l)) {
                return true;
            }
        });
        var link = path.join(self.path.replace(/\/[^\/]+$/, ''), file);
        return {
            link  : link,
            title : util.trim(util.trim(title).slice(1)),
            index : index,
            name  : file.replace(/\.[^.]+$/g, ''),
            parent: p.split(path.sep).reverse()[1]
        }
    });
    this.data.current   = catalogue[current];

    this.data.catalogue = catalogue.sort(function(a, b) {
        return a.index - b.index;
    });
});


module.exports = router;
