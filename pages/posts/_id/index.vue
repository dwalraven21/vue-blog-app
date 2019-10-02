<template lang="html">
  <div class="single-post-page">
  	<section class="post">
		<h1 class="post-title">{{ loadedPost.title }}</h1>
		<div class="post-details">
			<div class="post-detail">
				Last updated on {{ loadedPost.updatedDate }}
			</div>
			<div class="post-detail">
				Writen by {{ loadedPost.author }}
			</div>
		</div>
		<p class="post-content">{{ loadedPost.content }}</p>
  	</section>
	<section class="post-feedback">
		<p>Let me know what you think about this post, send an email to <a href="mailto:dwalraven21@gmail.com">dwalraven21@gmail.com</a>.</p>
	</section>
  </div>
</template>

<script>
export default {
	asyncData(context, callback){
		setTimeout(() => {
			callback(null, {
				loadedPost: {
					id: "1",
					title: "First Post (ID: " + context.params.id + ")",
					previewText: "This is a preview...",
					author: "Danielle",
					updatedDate: new Date(),
					content: "This is some dummy text which is different from the preview text.",
					thumbnail: "https://www.abc.net.au/news/image/11539064-16x9-460x259.jpg"
				}
			})
		}, 1000)
	}
}
</script>

<style lang="css" scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
