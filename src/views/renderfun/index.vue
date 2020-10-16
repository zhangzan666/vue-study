<template>
  <anchored-heading :level='2'>
    <div>
      <p>1</p>
      <div>
        <p>如果有写有this.$slots.default() , 可以向下寻找所有子元素</p>
      </div>
    </div>
  </anchored-heading>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import { h } from 'vue'
export default {
  // render() {
  //   return h('div', {}, '这是Render Function 渲染的结果 , 如果使用template , render函数则失效')
  // }
  components: {
    anchoredHeading: defineAsyncComponent(()=>import ('@/components/anchoredHeading'))
  }
}
</script>

<style>

</style>