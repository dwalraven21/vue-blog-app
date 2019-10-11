<template lang="html">
  <div class="admin-post-page">
  	<section class="update-form">
		<AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
  	</section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
	layout: 'admin',
	middleware: ['check-auth', 'auth'],
	components: {
		AdminPostForm
	},
	head: {
		title: 'Edit Blog Post'
	},
	asyncData(context) {
		return context.app.$axios
		.$get('/posts/' + context.params.postId + '.json')
		.then(data => {
			return {
				loadedPost: { ...data, id: context.params.postId }
			}
		})
		.catch(e => context.error(e))
	},
	methods: {
		onSubmitted(editedPost) {
			this.$store.dispatch('editPost', editedPost)
			.then(() => {
				this.$router.push('/admin')
			})
		}
	}
}
</script>

<style lang="css" scoped>
.update-form {
	width: 90%;
	margin: 20px auto;
}

@media (min-width: 750px) {
	.update-form {
		width: 500px;
	}
}
</style>
