import { ConfigEnv, UserConfig, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入别名
import path from 'path'
const pathSrc=path.resolve(__dirname,'src')
// 引入unplugin自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// 引入element plus相关
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
// svg
import {createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// unocss
import UnoCSS from 'unocss/vite'
// mock
import { viteMockServe } from 'vite-plugin-mock'

import { loadEnv } from 'vite';
export default defineConfig(({mode,command}:ConfigEnv):UserConfig=>{
  const env=loadEnv(mode,process.cwd())
  return{
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock', // mock文件地址
        watchFiles: true, // 是否监听mockPath内修改
        // ignore: undefined, // 读取文件时的忽略文件
        // configPath: 'vite.mock.config.ts', // 设置模拟读取的数据条目。 当文件存在并且位于项目根目录中时，将首先读取并使用该文件。 配置文件返回一个数组
        localEnabled:  command === 'serve',
        // enable: command === 'serve', // 是否启用
        // enable: true, // 是否启用
        // logger: true, // 控制台是否启用日志
      }),
      AutoImport({
        imports:['vue'],// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        eslintrc:{
          enabled:true,//是否自动生成 eslint 规则，建议生成之后设置 false 
          filepath:"./.eslintrc-auto-import.json",//指定自动导入函数eslint规则的文件
        },
        resolvers:[
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({}),
        ],
        
        vueTemplate:true,// 是否在 vue 模板中自动导入
        dts:path.resolve(pathSrc,"types","auto-import.d.ts"),//指定自动导入函数TS类型声明文件路径,自动导入组件类型声明文件位置，默认根目录
      }),
      Components({
        resolvers:[
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections:["ep"],// element-plus图标库，其他图标库 https://icon-sets.iconify.design/
          })
        ],
        dts:path.resolve(pathSrc,'types','components.d.ts'),//指定自动导入组件TS类型声明文件路径
      }),
      // svg配置
      createSvgIconsPlugin ({
        iconDirs:[path.resolve(process.cwd(),'src/assets/icons')],
        symbolId:'icon-[dir]-[name]'
      }),
      UnoCSS({
        // options
      })
    ],
    resolve:{
      // 别名配置
      alias:{
        "@":pathSrc
      }
    },
    css:{
      //  CSS 预处理器
      preprocessorOptions:{
        //define global scss variable
        scss:{
          javascriptEnabled:true,
          additionalData:`@use "@/styles/variables.scss" as *;`
        }
      }
    },
    server:{
      host:'0.0.0.0',
      port:Number(env.VITE_APP_PORT),//
      open:true,//运行时是否自动打开浏览器
      // 反向代理解决跨域
      proxy:{
        [env.VITE_APP_BASE_API]:{
          target:'',
          changeOrigin:true,
          rewrite:path=>path.replace(new RegExp('^' +env.VITE_APP_BASE_API),"")
        }
      }
    },
  }
})
