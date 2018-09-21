# mpvue-demo

> A Mpvue project

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
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).





- `cnpm install stylus --save-dev`

- `cnpm install stylus-loader --save-dev`

- 不用配置loader

  

 

 ####踩坑记录
 ```1.mpvue-loader 版本 1.1 以上需要新建 main.json 作为配置文件。
   2.图片使用相对路径无法加载，放到 dist/static 目录下使用绝对路径即可(src="../../static/assets/img/logo.jpg"  图片的层级2级就行了。。。../../)
   3.小程序中页面返回后该页面就会出栈，下次进入重新触发 onLoad
    onLoad() {
      // 解决页面返回后，数据没重置的问题
      Object.assign(this, this.$options.data());
    },

