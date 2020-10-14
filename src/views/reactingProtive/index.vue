<template>
  <div class='wrap'>
     <input type="text" v-model='name'> <br>
     父组件 {{name}}
     <child-com/>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import childCom from './childCom'
export default {
  setup() {
    const name = ref('zhangzan')

    provide('name', name)
    return {
      name
    }
  },
  created(){
    console.log(this.name)
  },
  components: {
    childCom
  }
}
</script>
<style>

</style>