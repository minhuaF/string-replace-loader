# @miwa/string-replace-loader
> 一个webpack loader插件，根据配置文件直接替换常量文本，避免多次import常量文件，减少`main.js`的大小，方便常量统一管理以及区分环境使用不同的常量。

## Params
  - changeTemp 文本配置文件
  - changeRules 匹配替换的规则

## UsageDemo
> 把用‘<{}>’包裹起来的字段在一个类似`~/constConfig.js`的文件中进行匹配，替换文本中的value。

配置
```
npm i @miwa/string-transtion-loader --save-dev
```

webpack.config.js
```
{
  test: /\.(js|jsx)$/,
  use: [
    {
      {
        loader: '@miwa/string-loader-loader',
        options: {
          changeTemp: require('~/constConfig.js'),   // 所在的配置文件
          changeRules: /\<\{(.+?)\}\>/g        //全局匹配的正则表达式
        }
      }
    }
  ]
}
```

~/constConfig.js
```
module.exports = {
  LOGINURL: '/data/login.do',
}
```

使用的文件
```
let url = '<{LOGINURL}>'
```

编译后的文件
```
let url = '/data/login.do'
```
