# new feature

- **composition API**  组合API
- **Teleport** 元素传送
- **Fragments** 
- **Emits Component Option** 发射组件选项
- **custom renderers** 

# breaking change

## global API

vue2.0 技术上 没有 "应用程序"的 概念

- 全局配置测试过程中 , 容易意外污染其他测试 , 并测试后 进行恢复 e.g 重置Vue.config.errorHandler
- 全局配置会影响多个根实例

### New global API

**createApp**

```js
const { createApp } from 'vue'
const app = createApp({})
```

### treeShaking

Vue2.x 版本的 全局API ,不可通过treeShaking 删除死代码 , vue3.0则可以

### template Directives

#### v-model 

- prop:value  => modelValue
- @input => update:modelValue
- 移除了v-bind 的.sync 修饰符 和组件模型选项 . v-model 上的 一个参数代替
- 可以同一组件 多个v-model 绑定
- 新增 创建自定义 v-model 修改器的能力

# Provide / Inject

数据的 Inject 由上 到下

# webpack Build

打包时,可能会把Vue 包含在最终的生产环境内,需要webpak.config 配置 , 把vue 排除在外 

```js
// webpack.config.js
module.exports = {
  /*...*/
  externals: {
    vue: 'Vue'
  }
}
```

# V-if & v-for

Vue3.0 种 v -if 拥有 更高的权重 , 建议通过 计算 过滤 可见 元素 的列表