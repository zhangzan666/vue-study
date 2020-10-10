<template>
  <div class='wrap'>
    <child-com />
    <hr>
    {{message}}
  </div>
</template>

<script>
// import childCom from './childCom'
import { defineAsyncComponent } from 'vue'
export default {
  provide: {
    message: '这是父组件provide 的信息'
  },
  inject:{
    message:{
      form:'message1'
    }
  },
  components:{
    childCom:defineAsyncComponent(() =>
      import ('./childCom.vue')
    )
  }
}
</script>

<style>

</style>