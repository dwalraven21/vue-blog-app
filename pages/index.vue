<template>
  <div class="home-page">
  	<section class="intro">
  		<h1>Get the latest tech news!</h1>
  	</section>
	<section class="featured-posts">
		<nuxt-link :to="'/posts/' + 1" >
			<article class="post-preview">
				<div class="post-thumbnail" style="background-image: url('https://cdn.vox-cdn.com/thumbor/UxgwyNj0Lf5Dmc2qNKE9kdA4V_4=/0x0:2040x1360/712x401/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63116958/VRG_3246_Hero_Search.0.jpg')">

				</div>
				<div class="post-content">
					<h1>In Arizona, Facebook moderators get through the day with sex, drugs, and guns</h1>
					<p>Preview</p>
				</div>

			</article>
		</nuxt-link>
		<nuxt-link :to="'/posts/' + 2" >
			<article class="post-preview">
				<div class="post-thumbnail" style="background-image: url('https://cdn.vox-cdn.com/thumbor/2atzrytw0Iev7OC9r1ee3sRoLpQ=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65359167/hls_hero_00000_0.0.jpg')">

				</div>
				<div class="post-content">
					<h1>NASA is now officially accepting proposals for landers to take people to the Moon</h1>
					<p>Preview 2</p>
				</div>

			</article>
		</nuxt-link>

	</section>
  </div>
</template>

<script>

</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

</style>
