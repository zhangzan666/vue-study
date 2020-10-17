<template>
  <div class='wrap'>
    <h1>ref</h1>
    <div>
      <input type="text" v-model='message'>
      <p>{{message}}</p>
    </div>
    <h1>reactive</h1>
    <div>
      <input type="text" v-model='message1.value'>
      <p>{{message1.value}}</p>
    </div>
    <child-com v-model:value='message' />
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  import childCom from './childCom'
  export default {
    setup(){
      const message = ref('这是setup 引用 ref 返回的反应性变量')
      const message1 = reactive({value:'这是setup 引用 reactive 返回的反应性变量'})
      
      return {
        message,
        message1
      }
    },
    components: {
      childCom
    }
  }
</script>

<style scoped>
  
</style>