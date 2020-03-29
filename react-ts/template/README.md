
## 构建步骤
### 开发环境
1、yarn
2、yarn dev
### 生产构建
yarn build

## 自动化构建多个单页
在view文件下，每一个根文件代表一个单页，根据根文件结构配置便能自动生成多页

## 目录结构
```
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
├── modules.d.ts
├── package.json
├── public
│   ├── image
│   │   └── logo.svg
│   └── new-year-egg
│       └── image
├── src
│   ├── api
│   │   └── common
│   ├── assets
│   │   ├── image
│   │   └── new-year-egg
│   ├── components
│   │   ├── common
│   │   └── image
│   ├── constants
│   │   └── common
│   ├── fonts
│   │   └── xp-number.ttf
│   ├── styles
│   │   ├── global.scss
│   │   ├── reset.css
│   │   └── variables.scss
│   ├── utils
│   │   ├── common.ts
│   │   ├── number.ts
│   │   └── string.ts
│   └── views
│       └── new-year-egg
├── tsconfig.json
├── typings
│   └── index.d.ts
└── yarn.lock
