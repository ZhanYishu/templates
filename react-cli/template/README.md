# react-cli
一种类似于vue-cli的结合webpack4，happypack，css scope以及自动生成单页与多页的cli
### 使用webpack4
1、删除码拆分插件commonChunkPlugin替换为optimization.splitChunks配置，真正做到了代码拆分无重复，显著提升了构建速度与质量
具体参考： [SplitChunksPlugin](https://webpack.docschina.org/plugins/split-chunks-plugin/)

2、采用更小的css提取插件mini-css-extract-plugin

3、使用happypack开启多进程构建，对于大型项目可显著提升构建速度

4、使用css-loader配合react-css-modules自动生成css局部与全局作用域

### 自动化构建多个单页
在view文件下，每一个根文件代表一个单页，根据根文件结构配置便能自动生成多页

### 目录结构
```
├── README.md
├── build
│   ├── dev-client.js
│   ├── dev.js
│   ├── entries.js
│   ├── html-plugins.config.js
│   ├── prod.js
│   ├── style-loader.config.js
│   ├── utils.js
│   ├── webpack.base.config.js
│   ├── webpack.dev.config.js
│   └── webpack.prod.config.js
├── config
│   └── index.js
├── package.json
├── src
│   ├── api
│   │   └── common
│   │       └── index.js
│   ├── assets
│   │   └── image
│   │       └── logo.svg
│   ├── components
│   │   └── common
│   │       └── route-view
│   │           └── index.js
│   ├── constants
│   │   └── common
│   │       └── index.js
│   ├── styles
│   │   ├── global.scss
│   │   └── variables.scss
│   ├── utils
│   │   ├── common.js
│   │   ├── number.js
│   │   └── string.js
│   └── views
│       ├── client
│       │   ├── app
│       │   │   ├── index.css
│       │   │   └── index.js
│       │   ├── index.css
│       │   ├── index.html
│       │   ├── index.js
│       │   ├── routes
│       │   │   └── index.js
│       │   └── store
│       │       ├── actions
│       │       └── reducers
│       │           ├── index.js
│       │           └── todos.js
│       └── index
│           ├── app
│           │   ├── index.js
│           │   └── index.scss
│           ├── index.css
│           ├── index.html
│           ├── index.js
│           ├── routes
│           │   └── index.js
│           └── store
│               ├── actions
│               └── reducers
│                   ├── index.js
│                   └── todos.js
└── static
    └── image
        └── logo.svg
