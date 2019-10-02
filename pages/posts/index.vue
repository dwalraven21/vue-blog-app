<template lang="html">
  <div class="posts-page">
	  <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
	components: {
		PostList
	},
	asyncData(context, callback) {
		setTimeout(() => {
			callback(null, {
				loadedPosts: [
					{
					id: '1',
					title: "First Post",
					previewText: "This is a post.",
					thumbnail: "https://www.abc.net.au/news/image/11539064-16x9-460x259.jpg"
					}
				]
			})
		}, 1500)
	}
}
</script>

<style lang="css" scoped>
.posts-page {
	display: flex;
	justify-content: center;
	align-items: center;
}

</style>
