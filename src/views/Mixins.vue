<template>
  <div class='wrap'>
    <h1>{{title}}</h1>
    <pre class="description">
      Vue 组件分发可复用功能
      mixin 与 组件本身包含重叠选项 , 与 组件数据优先
      有相同的 hook 函数 , mixin 会先于组件的 hook 执行
      缺点:
        不能传递任何值
    </pre>
  </div>
</template>

<script>
import {test} from '@/mixins/test.js'
export default {
  data(){
    return {
      title: this.$route.meta.title
    }
  },
  mixins:[test]
}
</script>

<style lang='scss' scoped>

</style>