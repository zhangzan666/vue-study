<template>
  <div class='wrap'>
    <child-com />
    <hr>
    {{message}}
    一般用法下, inject 的 value 并不会变化 , 若要让它具有反应性 , 需要用到计算属性
    <input type="text" v-model="reactingValue"> 
    父组件{{reactingValue}}
  </div>
</template>

<script>
// import childCom from './childCom'
import { defineAsyncComponent } from 'vue'
// import vue from 'vue'
export default {
  data(){
    return {
      reactingValue: '12345'
    }
  },
  provide(){
    return {
      message: '这是父组件provide 的信息11',
      // reactingValue: vue.computed(this.reactingValue)
    }
  },
  inject: {
    message11:{
      from:'i18n'
    },
  },
  mounted() {
    console.log(this)
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