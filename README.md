# notepad

> A notepad for people daily life

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## install须知

> 安装之后有几个插件需要手动更改：

1.颜色拾取插件的改动：
node_modules-->vcolorpicker-->lib-->vcolorpicker.umd.min.js替换为changelib的vcolorpicker.umd.min.js;

2.日期插件按钮颜色更改
node_modules-->vue-mobile-calendar-->dist-->vue-mobile-calendar.js替换为changelib的vue-mobile-calendar.js;

3.图片裁剪插件样式更改
node_modules-->vue-croppa-->dist-->vue-croppa.css的样式类.croppa-container和.croppa-container canvas替换为

```
.croppa-container {
  width: 23.4375rem;
  height: 23.4375rem;
  display: inline-block;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  position: relative;
  font-size: 0;
}
.croppa-container canvas {
  margin: auto;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border:2px solid #e6e6e6;
}
```

## 项目目录介绍

<table>
  <tr>
    <th>一级目录</th>
    <th>子孙级目录</th>
    <th>备注</th>
  </tr>
  <tr>
    <td>build</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>changelib</td>
    <td></td>
    <td>包含替换node_modules部分代码的文件</td>
  </tr>
  <tr>
    <td>config</td>
    <td></td>
    <td>服务器配置文件</td>
  </tr>
  <tr>
    <td>src</td>
    <td>
      assets-->存放公共文件，包括icon（图标）、接口封装脚本等<br/>
      components-->所有组件<br/>
      ----common-->公共组件<br/>
      --------modal-->所有提示弹框（成功、失败等）<br/>
      --------foot.vue-->底部导航栏<br/>
      --------head.vue-->顶部导航栏<br/>
      ----function-->功能模块<br/>
      --------editBill-->“记账单”功能<br/>
      --------editDate-->“记日子”功能<br/>
      --------editNote-->“写手账”功能<br/>
      ----openview-->webAPP打开界面<br/>
      ----personal-->“个人中心”模块<br/>
      ----find.vue-->“发现”模块<br/>
      ----index.vue-->“首页”模块<br/>
      router-->路由文件<br/>
      App.vue-->主文件<br/>
      main.js-->插件注册文件<br/>
    </td>
    <td>主要代码文件</td>
  </tr>
  <tr>
    <td>index.html</td>
    <td></td>
    <td>主视图文件</td>
  </tr>
  <tr>
    <td>package.json</td>
    <td></td>
    <td>配置文件</td>
  </tr>
</table>

## 如何把前端项目部署到阿里云ECS服务器

[点此跳转](https://github.com/Nangxif/notepad/blob/master/static/readme/aliyun.md)

[后台接口项目](https://github.com/Nangxif/notepadServer)

