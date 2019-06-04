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

一级目录|子孙级目录|备注
--|:--:|--:
build||
changelib||包含替换node_modules部分代码的文件
config||服务器配置文件
dist||打包之后生成的文件
src|assets-->存放公共文件，包括icon（图标）、接口封装脚本等<br/>components|主要代码文件

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
      <tr>
        <td>assets</td>
        <td>存放公共文件，包括icon（图标）、接口封装脚本等</td>
      </tr>
      <tr>
        <td>components</td>
        <td>
          <tr>
            <td>common</td>
            <td></td>
            <td>公共组件</td>
          </tr>
          <tr>
            <td>function</td>
            <td></td>
            <td>功能模块</td>
          </tr>
          <tr>
            <td>openview</td>
            <td></td>
            <td>webAPP打开界面</td>
          </tr>
          <tr>
            <td>personal</td>
            <td></td>
            <td>“个人中心”模块</td>
          </tr>
          <tr>
            <td>find.vue</td>
            <td colspan="2">“发现”模块</td>
          </tr>
          <tr>
            <td>index.vue</td>
            <td colspan="2">“首页”模块</td>
          </tr>
        </td>
        <td>所有组件</td>
      </tr>
      <tr>
        <td>components</td>
        <td>所有组件</td>
      </tr>
    </td>
    <td>主要代码文件</td>
  </tr>
</table>

