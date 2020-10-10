<template>
  <div class='wrap'>
    <h1>v-model 绑定多个参数</h1>
    <div>
      姓名:<input type="text" :value="name" @input="changeValue" name='name'><br>
      电话:<input type="text" :value="phone" @input="changeValue" name='phone'><br>
      地址:<input type="text" :value="address" @input="changeValue" name='address'><br>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    name:{
      type:String
    },
    phone:{
      type:String
    },
    address:{
      type:String
    },
  },
  mounted(){
    
  },
  methods:{
    changeValue(e){
      // console.log(e.target.value)
      console.log(e.target.name)
      this.$emit(`update:${e.target.name}`,e.target.value)
    }
  },
}
</script>

<style>

</style>