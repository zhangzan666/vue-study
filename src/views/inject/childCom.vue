<template>
  <div class='wrap'>
    我是子组件
    {{message}}
    <hr>
    <grandchild-com />
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue'
export default {
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