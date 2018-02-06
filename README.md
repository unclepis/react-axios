# react-axios

## create-react-app(react脚手架) + mock-server(restify)前后台分离开发调试demo

- 写个demo试一下用restify的mock-server和react前台代码进行mock数据调试，这样开发就不依赖后台接口

- 组件结构比较简单：
  -app
    - header
    - sider
      -priceFilter 过滤价格 
      -timeRangeFilter 过滤时间
      -reset 重置过滤条件
    -content
      -mainSection显示旅游景点信息
    -footer
- 布局用的antd的layout布局+flex布局
- 没有用 redux，因为组件层级比较简单，就用状态提升将state都存在App组件中，然后通过props把获取state变化的函数传入子组件，抓取公共数据变化
- 使用restify模拟的假数据，在entities目录下有和后台约定好的json数据格式；在server.js中根据客户端请求的url返回不同的json数据
- 在react组件使用axios发送请求获取mock的假数据
- package.json 中配置了proxy代理，前台的react代码跑在3000端口，mock的server跑在8000端口，通过proxy代理避免跨域

## 使用说明

npm run server 拉起mock的server准备拦截前台发送的http请求
npm run start 跑起前台代码，在3000端口会拉起create-react-app的脚手架，在组件中发送请求获取mock的假数据进行组件开发
