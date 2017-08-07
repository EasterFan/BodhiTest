### 斯沃学院(2017届)菩提老组御用项目框架技术栈

*注意事项:*

#### 一.目录结构
- bin/www : 服务器启动文件
- db : 数据库文件
- public : 服务器静态文件
    - css : 样式表本件
        - base.css : 约定样式(不可修改)
    - js : 自定义js文件
        - master.js : 入口文件(主页面js)
        - service.js : 前端服务url管理模块
        - pageControl : 页面控制器
    - lib : 类库文件
- routes : 路由文件
    - 对每个类建立独立的路由文件
    - 见user.js示例
    - API编写符合restful规范
    - URL前后端约定好后编写实现
- view : 服务器模板文件
- package.json : npm包管理文件


#### 二.前端开发(lmj,lf)
1. 页面视图
	- html代码放于script标签=======>`<script type='text/html'>...</script>`
	- 模板代码尽量做到0重复
	- [模板字符串语法]()请自行阅读文档


2. 页面控制
	- 每个pageControl/*.js文件控制一个页面的渲染
	- 使用require.js模块化

#### 三.服务端开发(lbf,fdf)
1.按规定的格式返回数据====>res.status(200).json({data})
2.每个路由文件仅处理同一对象请求,eg: movie.js仅做movies/的url的处理


#### 四.开发规范
1. 命名规范
	- 前端开发
        - 尽量使用class,少用id做标记
        - 标签class,id ======> 驼峰式: btnAddUser
        -
2. 保证代码清晰,删除注释及调试代码
3. 使用严格的换行与缩进  ==========>   4空格(tab)
代码块换行:
```
$(document).on('click','.a',function(){
    for(let i = 1;i < 100;i ++ ) {
        console.log(i)
    }
})
```

#### 五.使用之前
1. 选择数据库,npm安装驱动
