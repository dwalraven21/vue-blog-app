<template lang="html">
  <div class="admin-post-page">
  	<section class="update-form">
		<AdminPostForm :post="loadedPost"/>
  	</section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
	layout: 'admin',
	components: {
		AdminPostForm
	},
	data() {
		return {
			loadedPost: {
				author: 'Danielle Walraven',
				title: 'My Awesome Post',
				content: 'This is the post.',
				thumbnailLink: 'https://www.abc.net.au/news/image/11539064-16x9-460x259.jpg'
			}
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
