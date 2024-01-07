import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    home:"",
    about:""
  },
  getters: {
  },
  mutations: {
    setHome(state, home){
      state.home = home
    },
    setAbout(state, about){
      state.about = about
    }
  },
  actions: {
    getData(context){
      axios.get('https://matthew-dean-brown.github.io/portfolioData/')
        .then(data=>{
          console.log(data);
          let [home, about] = data.data.data
          context.commit('setHome', home.home)
          context.commit('setAbout', about.about)
        })
    }
  }
})
