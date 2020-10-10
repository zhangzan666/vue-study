

# Vue.3 较与Vue.2X的差异



## 新特性 new feature



- **composition API**  组合API
- **Teleport** 元素传送
- **Fragments** 
- **Emits Component Option** 发射组件选项
- **custom renderers** 



## 原有内容更新 breaking change



### 全局API (global API)

新增了新的全局API **createApp**

```js
const { createApp } from 'vue'
const app = createApp({})
```

解决了Vue 2.x 没有 **应用程序** 概念的问题

全局API  通过了import 引用 , 项目未使用的函数 , 将通过 **webpack**的**treeshaking** 来删除死代码 , 减少了生产体积 

### template direactives 模板指令

v-model 扩展了更多功能 , 

- 绑定的属性, **modelValue** 作为**propName** 传入 , 原有的**@input**  更改为 **updata:modelvalue** , 
- 使用**v-model:modifier** 替代了原有的组件模型选项
- 移除了**v-bind:sync** , 使用**v-model:propNAame** 代替
- 新增 创建自定义 v-model 修饰符 的功能  `未测试`



### Component 

**异步组件** 在Vue 3.0 需要 **defineAsyncComponent** 全局方法 来 定义

```js
import { defineAsyncComponent } from 'vue'
import ErrorComponent from './components/ErrorComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'

// Async component without options
const asyncPage = defineAsyncComponent(() => import('./NextPage.vue'))

// Async component with options
const asyncPageWithOptions = defineAsyncComponent({
  loader: () => import('./NextPage.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})
```

# NOTE

- **webpack** 打包时 , 可能会把Vue 包含最终项目里 , 进行webpack 配置 , 把vue 移除

  ```js
  // webpack.config.js
  module.exports = {
    /*...*/
    externals: {
      vue: 'Vue'
    }
  }
  ```

- **v-if** & **v-for**  Vue 3.0 v-if 权重要比 v -for 高 , 最好 用 computed 过滤 需要 显示的 最终结果