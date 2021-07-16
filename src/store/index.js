import * as Vuex from "vuex";
import enums from'../utils/enums'

const store = Vuex.createStore({
  state: {
    bodyHeight: document.body.clientHeight,
    bodyWidth: document.body.clientWidth,
    userinfo: {
      school: {
        name: 'asdasd',
        department: null,
        joinTime: null,
        education: null,
        displayType: enums.DISPLAY_TYPE.ALL,
      }
    }
  },
  mutations: {
    setUserinfo(store, val) {
      store.userinfo = val
    }
  }
})

export default store