<template lang="html">
  <div class="posts-page">
	  <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
export default {
	computed: {
		loadedPosts() {
			return this.$store.getters.loadedPosts
		}
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
