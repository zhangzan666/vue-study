<template>
  <div>
    <div v-for='grade in arr' :key='grade.grade'>
      <h1>{{grade.grade}}</h1>
      <div v-for='item in grade.class' :key='item'>
        <h1>{{item}}</h1>
      </div>
    </div>
    <div>
      对于Array Prop , 不需要deep watch 也可以实现 数据的更新
    </div>
    <div v-for='value in obj' :key='value'>
      <p>{{value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    arr: {
      type: Array
    },
    obj: {
      type: Object
    }
  },
  watch: {
    arr: {
      handler:function(val,oldVal){
        console.log(val,oldVal)
      },
      // deep:true,
      immediate:true,
    }
  },
  created(){
    console.log(this)
  },
  methods: {
    handleChange() {

    }
  }
}
</script>

<style>

</style>