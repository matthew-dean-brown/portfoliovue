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
   getData({commit}){
      axios.get('https://matthew-dean-brown.github.io/portfolioData/')
        .then(res=>{console.log(res);
      // let response = await fetch('https://matthew-dean-brown.github.io/portfolioData/')
      // let razien = await response.json()
      // fetch('https://matthew-dean-brown.github.io/portfolioData/')
      // .then(response => response.json())
      // .then(razien => console.log(razien.data))
      
      let [home, about] = res.data.data

          commit('setHome', home.home)      
          commit('setAbout', about.about)
        })
    }
  }
})
