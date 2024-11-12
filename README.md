# Bupt-Hotel-Air-Conditioner-Managing-System-C12-G12
Bupt软件工程大作业 波普特廉价酒店的温控计费系统——by 2022219112班12组

## 项目结构说明：

node_modules：存放下载的各种插件、基本运行库

src：写代码的文件夹
——api：前后端交互相关设置、函数
  ——api.js：前后端交互的设置
  ——index.js：前后端交互的函数
——assets
  ——css：如果某页css过多，用于存放css文件
  ——images：图片
  ——icons：图标
——components：页面中的元素
——mixins：存放全局函数
——pages：存放页面
——router：存放界面路由（相当于将页面加入项目中，不然不会加载）
——store：存放全局变量
App.vue：主界面
main.js：配置、引入插件
.eslintrc.js：控制eslint和prettier约束
.gitignore：git提交时忽略的内容（一般是不会被修改的配置文件）
.vue.config.js：需要用时再说
