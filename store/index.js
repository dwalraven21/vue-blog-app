import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			loadedPosts: []
		},
		mutations: {
			setPosts(state, posts) {
				state.loadedPosts = posts
			}
		},
		actions: {
			nuxtServerInit(vuexContext, context) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						vuexContext.commit('setPosts', [
							{
							id: '1',
							title: "First Post",
							previewText: "This is a post.",
							thumbnail: "https://www.abc.net.au/news/image/11539064-16x9-460x259.jpg"
							}				
						])
					resolve()
					}, 1500)
				})
			},
			setPosts(vuexContext, posts) {
				vuexContext.commit('setPosts', posts)
			}
		},
		getters: {
			loadedPosts(state){
				return state.loadedPosts
			}
		}
	})
}

export default createStore
