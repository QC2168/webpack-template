### 什么是webpack-template
`webpack-template`是一个集成了多种常用的工具库的webpack模板，开箱即用
### 模板目录结构
```
webpack-template                    
├─ src  项目入口                             
│  ├─ common  公共目录                      
│  │  └─ normalize.css            
│  ├─ network  axios配置目录                    
│  │  ├─ Interceptors  拦截器配置             
│  │  │  └─ responseInterceptor.ts  
│  │  └─ request.ts  网络请求配置文件               
│  ├─ pages  项目页面                         
│  │  ├─ hello  hello页面目录文件                    
│  │  │  ├─ hello.html              
│  │  │  ├─ hello.less              
│  │  │  └─ hello.ts                
│  │  └─ index  index页面目录文件                      
│  │     ├─ index.html              
│  │     ├─ index.less              
│  │     └─ index.ts                
│  └─ main.ts  根入口文件                     
├─ package-lock.json  lock文件              
├─ package.json  项目核心文件                   
├─ pnpm-lock.yaml  lock文件                 
├─ README.md  说明文件                      
├─ tsconfig.json  ts配置文件                   
└─ webpack.config.ts  webpack配置文件              

```

### 运行项目
1、安装项目依赖
> pnpm i

2、运行项目
> pnpm run serve
