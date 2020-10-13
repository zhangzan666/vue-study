<template>
  <div class='wrap'>
    自定义指令 <br>
    进入页面input自动获取焦点<br>
    局部指令
    <input type="text" v-focus><br>
    全局指令
    <div>
      <input type="text" v-global-focus><br>
    </div>

    custom 生命周期
    <ul>
      <li v-for='item in hookNameArr' :key='item'>{{item}}</li>
    </ul>
    
    关于自定义指令,在组件上的使用 , 暂未实现需求
    
    <child-com v-focus @vnodeMounted='myHook'/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  data(){
    return {
      hookNameArr: ['beforeMount','mounted','beforeUpdate','updated','beforeUnmount','unmounted']
    }
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      },
    }
  },
  methods: {
    myHook(vnode) {
      console.log(vnode)
    }
  },
  components: {
    ChildCom: defineAsyncComponent(()=> import ('./childCom'))
  }
}
</script>

<style>

</style>