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
			},
			clearToken(state){
				state.token = null
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
					vuexContext.setItem('token', result.idToken)
					vuexContext.setItem('tokenExpiration', new Date().getTime() + result.expiresIn * 1000)
					vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
				})
		  		.catch((err) => console.log(err))
			},
			setLogoutTimer(veuxContext, duration){
				setTimeout(() => {
					vuexContext.commit('clearToken')
				}, duration)
			},
			initAuth(vuexContext) {
				const token = localStorage.getItem('token')
				const expirationDate = localStorage.getItem('tokenExpiration')

				if ( new Date() > expirationDate || !token ) {
					return
				}
				vuexContext.commit('setToken', token)
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
