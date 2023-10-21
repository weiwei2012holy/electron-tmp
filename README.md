## electron+react 跨平台应用开发demo



#### 相关文档
- electron打包：https://www.electronforge.io/
- electron框架：https://www.electronjs.org/zh/docs/latest/tutorial/tutorial-first-app
- react前端框架：https://zh-hans.react.dev/learn/add-react-to-an-existing-project
- GitHub Actions自动构建打包
    - [本项目构建文件](.github/workflows/main.yml)
    - [文档] https://docs.github.com/en/actions


#### 安装

```bash

// 1.1 通过模版安装electron及构建工具【
yarn create electron-app my-app --template=webpack

// 1.2 也可以先安装electron，再安装打包工具
mkdir my-app && cd my-app && yarn add electron --dev 
// 1.2.1 package.json 添加启动脚本："start": "electron .",
//1.2.2 安装打包工具
ya rn add --dev @electron-forge/cli && npx electron-forge import 

// 1.3 安装react；
yarn add --dev react react-dom react-scripts
// 1.3.1 创建入口文件：public/index.html src/index.js ; 填充demo代码
// 1.3.2 package.json 添加启动脚本：更多脚本可以查看 node_modules/react-scripts/src 
// "react-build": "react-scripts build",
// "react-start": "react-scripts start"
// 1.3.3 启动react,查看是否正常
yarn react-start


// 1.4 打包正式环境,注意main.js 里面引入的文件路径要替换成react build后的静态文件地址，代码可以根据环境来判断
yanr react-build && yarn make

// 1.5 发布到github然后自动打包;


```