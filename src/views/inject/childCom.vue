<template>
  <div class='wrap'>
    我是子组件
    {{message}}
    <hr>
    <grandchild-com />
    <hr>
    在props的default 函数 里 使用inject <br>
    {{value}}
  </div>
</template>

<script>
  import { defineAsyncComponent, inject } from 'vue'
export default {
  props: {
    value: {
      default(){
        return inject('value' , '默认的值')
      }
    },
  },
  provide:{
    message1:'这是子组件 provide 的信息'
  },
  inject: {
    message: {
      from :'message'
    }
  },
  components: {
    grandchildCom: defineAsyncComponent(() => import ('./grandchildCom.vue'))
  }
}
</script>

<style>

</style>