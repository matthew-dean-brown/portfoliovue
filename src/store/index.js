import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    home:null,
    about:null,
    projects:null,
    resume:null,
    testimonials:null
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
        .then(res=>{
          console.log(res.data.data);
          let [home, about] = res.data.data

          context.commit('setHome', home.home)      
          context.commit('setAbout', about.about)
        })
    }
  }
})
