import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
    GetSpecificQuote: state => {
      return state.quotes.filter(q => q._id == id)[0]
    }
  },
  mutations: {
    GetRandomQuote (state){
      fetch("http://localhost:3000/quotes/random")
      .then(res => res.json())
      .then(data => {
        if(state.quote._id != data._id){
          state.quote = data;
        }
        else {
          this.commit('GetRandomQuote');
        }
      })
    },
    GetAllQuotes(state){
      fetch("http://localhost:3000/quotes")
      .then(res => res.json())
      .then(data => {
        state.quotes = data;
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
