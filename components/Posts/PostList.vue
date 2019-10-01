<template lang="html">
	<section class="post-list">
    	<PostPreview
    		id="1"
			:is-admin="isAdmin"
    		thumbnail="https://www.abc.net.au/news/image/11539064-16x9-460x259.jpg"
    		title="Hello there!"
    		previewText="This is my first post."
    	/>
    	<PostPreview
    		id="2"
			:is-admin="isAdmin"
    		thumbnail="https://www.abc.net.au/news/image/11539064-16x9-460x259.jpg"
    		title="Hello there!"
    		previewText="This is my second post."
    	/>
    	<PostPreview
    		id="3"
			:is-admin="isAdmin"
    		thumbnail="https://www.abc.net.au/news/image/11539064-16x9-460x259.jpg"
    		title="Hello there!"
    		previewText="This is my third post."
    	/>

    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
	components: {
		PostPreview
	},
	props: {
		isAdmin: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="css" scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
