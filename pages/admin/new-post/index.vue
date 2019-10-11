<template lang="html">
	<div class="admin-new-post-page">
		<section class="new-post-form">
			<AdminPostForm @submit="onSubmitted" />
		</section>

	</div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
	layout: 'admin',
	middleware: ['check-auth', 'auth'],
	components: {
		AdminPostForm
	},
	head: {
		title: 'New Blog Post'
	},
	methods: {
		onSubmitted(postData) {
			this.$store.dispatch('addPost', postData)
			.then(() => {
				this.$router.push('/admin')
			})
		}
	}
}
</script>

<style lang="css" scoped>
.new-post-form {
	width: 90%;
	margin: 20px auto;
}

@media (min-width: 750px) {
	.new-post-form {
		width: 500px;
	}
}
</style>
