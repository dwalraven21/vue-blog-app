import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			loadedPosts: [],
			token: null
		},
		mutations: {
			setPosts(state, posts) {
				state.loadedPosts = posts
			},
			addPost(state, post) {
				state.loadedPosts.push(post)
			},
			editPost(state, editedPost) {
				const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
				state.loadedPosts[postIndex] = editedPost
			},
			setToken(state, token){
				state.token = token
			}
		},
		actions: {
			nuxtServerInit(vuexContext, context) {
				return this.$axios
				.$get('/posts.json')
				.then(data => {
					const postsArray = []
					for (const key in data) {
						postsArray.push({ ...data[key], id: key })
					}
					vuexContext.commit('setPosts', postsArray)
				})
				.catch(e => context.error(e))
			},
			setPosts(vuexContext, posts) {
				vuexContext.commit('setPosts', posts)
			},
			addPost(veuxContext, post) {
				const createdPost = {
					...post,
					updatedDate: new Date()
				}
				return this.$axios
				.$post('https://nuxt-blog-1d733.firebaseio.com/posts.json' + vuexContext.state.token, createdPost)
				.then(data => {
					veuxContext.commit('addPost', { ...createdPost, id: data.name})
				})
				.catch(e => console.log(e))
			},
			editPost(vuexContext, editedPost) {
				return this.$axios.$put('https://nuxt-blog-1d733.firebaseio.com/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
				.then(data => {
					vuexContext.commit('editPost', editedPost)
				})
				.catch(e => console.log(e))
			},
			authenticateUser(vuexContext, authData) {
				let authUrl =
		          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
		          process.env.fbAPIKey;
		        if (!authData.isLogin) {
		          authUrl =
		            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
		            process.env.fbAPIKey;
		        }
		  		return this.$axios.$post(authUrl, {
		  			email: authData.email,
		  			password: authData.password,
		  			returnSecureToken: true
		  		})
		  		.then((result) => {
					vuexContext.commit('setToken', result.idToken)
				})
		  		.catch((err) => console.log(err))
			}
		},
		getters: {
			loadedPosts(state){
				return state.loadedPosts
			},
			isAuthentcated(state) {
				return state.token != null
			}
		}
	})
}

export default createStore
