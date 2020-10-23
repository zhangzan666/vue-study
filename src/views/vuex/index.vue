<template>
  <div class='wrap'>
    vuex的state <br>
    state的数据 , 用computed 进行返回
    {{count}}
    <button @click='$store.commit("countAdd")'>点击count++</button>
    <hr>
    vuex 的 getters ， vuex 的计算属性
    <div v-for='objItem in showPeople' :key='objItem.name'>
      {{objItem.name}}
    </div>
    <div> getters里的每个函数, 都可以接受一个getters 作为第二个参数 用来访问其他的getters </div>
  <hr>
    vuex 的 mutations ,<br>
    是一个对象, 属性为函数 , 函数接受 一个 state 和 payload 作为参数 , payload 为 载荷 <br>
    <button @click='$store.commit("countaddTen",{num:10})'>count+10</button> <br>
    <button @click='addTen({num:10})'>object count+10</button> <br>
    <button @click="countaddTen({num:10})">array count+10</button> <br>
    可以直接以参数写入 , name 作为type 的值 <br>
    <button @click='$store.commit({type:"countaddTen",num:10})'>count+10</button> <br>
    <div>{{count}}</div>

    对于未预设好的属性 , 用vue.set(obj,newProp,'123')  Note: 2.x版本以下 ) 或则 用 对象展开运算符重新赋值 example: state.obj = { ...state.obj, newProp: 123 } <br>
    
    <div v-for='objItem in info' :key='objItem'>
      {{objItem}}
    </div>
    <button @click='$store.commit("editInfo",{age:18})'>add age in info</button> <br>

    mutations 是必须同步 , devtool 需要 捕获 前后变化的 状态快照 , 异步回调 执行不了 <br>

    <hr>
    action 可以解决mutation的同步问题 <br>
    <div>{{count}}</div>
    <button @click='$store.dispatch("countaddTen",{num:10})'>action dispatch</button> <br>
    <button @click='countaddTen({num:10})'>mapActions Array</button> <br>
    <button @click='addTen({num:10})'>mapActions object</button> <br>

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      // count: store.count
    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },

    //使用mapState 可以大大减少代码的繁琐
    // ...mapState({
    //   countalais: "count"
    // }),

    //数组形式
    ...mapState([
      "count",
      "info"
    ]),

    //getters
    // showPeople() {
    //   return this.$store.getters.showPeople
    // },
    // idFinePeople() {
    //   return this.$store.getters.idFinePeople(1)
    // }

    //使用mapGetters
    //使用一致性的name 传递数组参数
    ...mapGetters([
        'showPeople',
        'idFinePeople'
    ]),
  },
  mounted() {
    console.log(this.idFinePeople(1))
  },
  methods: {
    //mapMutations方式 , 来注入mutations的函数 , 减少重复代码量  数组参数 , 相同名字, 对象可以进行 alias
    ...mapMutations({
      addTen:'countaddTen'
    }),
    ...mapMutations([
      'countaddTen'
    ]),

    //使用mapActions

    ...mapActions([
      'countaddTen'
    ]),

    ...mapActions({
      'addTen': "countaddTen"
    })
  }

}
</script>

<style>

</style>