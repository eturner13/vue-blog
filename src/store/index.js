import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        date: new Date(),
        author: 'Florida Man',
        title: 'Test Post',
        body: 'Gibberish Gibberish Gibberish GibberishGibberish GibberishGibberish GibberishGibberishGibberishGibberishGibberishGibberishGibberish'
      }
    ]
  },
  mutations: {
    addPost(state, post) {
      state.posts.push(post);
    }
  },
  actions: {
  },
  modules: {
  }
})
