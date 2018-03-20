# wfe.baidu.com

### 注意事项

由于marked在处理h标签的id属性时，对中文支持有限，因此对源码做了修改
```
/**
 * file lib/marked.js
 * line 800
 */

// origin
+ raw.toLowerCase().replace(/[^\w]+/g, '-')
// now
+ raw
```
