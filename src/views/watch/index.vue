<template>
  <div class="wrap">
    <child-com :arr='arr' :obj='obj' />
    <button @click='handlearr'>我要代表月亮消灭你</button>
  </div>
</template>

<script>
import childCom from './childCom'
export default {
  data() {
    return {
      arr: [],
      obj: {
        name:'zhangzan',
        sex:'man',
        age:'25'
      }
    }
  },
  created() {
    setTimeout(()=>{
      this.arr = [
        {
          grade: '一年级',
          class:['1班','2班','3班','4班','5班']
        }
      ]
      this.obj.name = '张赞' 
    },1000)
  },
  components: {
    childCom
  },
  methods: {
    handlearr() {
      this.arr[0].class = ['1班','2班','3班','4班','5班','6班']
      console.log(this.arr)
    }
  }
}
</script>

<style>

</style>