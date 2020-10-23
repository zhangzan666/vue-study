<template>
  <div class='wrap'>
    <h1>v-model 绑定对象</h1>
    <div>
      姓名:<input type="text" :value="info.name" @input="changeValue" name='name'><br>
      电话:<input type="text" :value="info.phone" @input="changeValue" name='phone'><br>
      地址:<input type="text" :value="info.address" @input="changeValue" name='address'><br>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    info: {
      type:Object
    }
  },
  mounted(){
    
  },
  methods:{
    changeValue(e){
      
      console.log(e.target.value)
      // console.log(e.target.name)
      console.log(this.info)
      // this.$emit(`update:`,e.target.value)
    }
  },
}
</script>

<style>

</style>