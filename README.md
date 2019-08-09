### 项目命令

```
1. 先执行：npm run dll
2. 开发模式:npm start
3. 生产模式:npm run build
```
### 项目结构说明

#### 技术栈列表
- UI
    - react
    - react-router3
    - antd
    - echarts、echarts-for-react
- 数据管理
    - mobx
- 服务通信
    - axios
    - socket.io
- 构建工具
    - webpack4
- 常用工具
    - lodash
    - rxjs
#### 工程目录
- resource
    - 存放资源数据
- script
    - webpack脚本文件
- src
    - components
        - 组件存放区
    - local
        - 国际化配置文件
    - router
        - 页面路由
    - service
        - 服务接口配置
    - stores
        - 系统级的状态
    - style
        - 系统级的样式
    - util
        - 工具集
    - views
        - 视图展示
        - ViewStores.js 挂载视图状态配置文件
    - index-dev.html
        - 开发模式html模板
    - app.js
        - 系统入口
    - favicon.icon
    - index.html
    - index.js
        - 启动文件
    - theme.js
        - 生产模式antd自定义样式配置
    - theme.less
        - 开发模式样式antd自定义配置,和theme.less保持一致
- .babelrc
- .gitignore
- package.json