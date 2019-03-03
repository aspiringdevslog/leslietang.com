<template>
<div id="NavBar">
	<ul>
		<li><router-link to="/">Home</router-link></li>
		<li><router-link to="/portfolio">Portfolio</router-link></li>
		<li><router-link to="/notes">Notes</router-link></li>
		<li><router-link to="/blog">Blog</router-link></li>
		<li><router-link to="/resume">Resume</router-link></li>
	</ul>
</div>	
</template>

<script>


	export default{
		data: function() {
			return {
				navigation: [
					'portfolio',
					'notes',
					'blog',
					'resume'
				]
			}
		}
	}

</script>

<style scoped>

#NavBar {
	margin: 0 auto;
}

ul {
	/*https://css-tricks.com/snippets/css/a-guide-to-flexbox/*/
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	padding: 10px auto;
	/* DESERT SAND */
	background-color: #EFD6AC; 
	/*max-width: 80%;*/
}

li {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #333745;
	list-style: none;
	/*border: 1px solid #000;*/
	/*padding: 20px 20px;
	margin: 0 5px;*/
	text-transform: uppercase;
/*	min-width: 100px;
	min-height: 30px;*/
}


a {
	color: #333745;
	text-decoration: none;
	/*border: 1px solid #000;*/
	padding: 20px 20px;
	margin: 0 5px;

}

.router-link-exact-active {
	color: white;
	background-color: #CA5D1D;
}


</style>