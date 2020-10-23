import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 1,
      people: [
        {
          id: 0,
          name: '张赞',
          hidden: false
        },
        {
          id: 1,
          name: '梁甫',
          hidden: true
        },
        {
          id: 2,
          name: '李世利',
          hidden: false
        },
      ],
      info: {
        name:'张三',
        sex:"男"
      }
    }
  },
  mutations: {
    countAdd(state) {
      state.count++
    },
    countaddTen(state, payload) {
      state.count += payload.num
    },
    editInfo(state,payload) {
      state.info = {...state.info,...payload}
      // console.log(state.info)
      // setTimeout(()=>state.info.age = 25,2000) 必须是同步的
    }
  },
  getters: {
    showPeople:(state)=>{
      return state.people.filter(item=> !item.hidden)
    },
    idFinePeople:(state)=>(id)=>{
      return state.people.find(item=>item.id === id)
    }
  },
  actions: {
    countaddTen(context,payload) {
      console.log(context,payload)
      context.commit('countaddTen',payload)
    },
    countAdd({ commit }) {
      commit('countAdd')
    }
  },
  modules: {
  }
})
