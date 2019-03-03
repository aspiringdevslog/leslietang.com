<template>

<div>
	<ul id="navbar" v-scroll="stickyNav">
		<li><router-link to="/">Home</router-link></li>
		<li><router-link to="/portfolio">Portfolio</router-link></li>
		<li><router-link to="/notes">Notes</router-link></li>
		<li><router-link to="/blog">Blog</router-link></li>
		<li><router-link to="/resume">Resume</router-link></li>
	</ul>
	<ul id="navbar" v-if="pageYOffset > sticky" v-scroll="stickyNav" class="sticky">
		<li><router-link to="/">Home</router-link></li>
		<li><router-link to="/portfolio">Portfolio</router-link></li>
		<li><router-link to="/notes">Notes</router-link></li>
		<li><router-link to="/blog">Blog</router-link></li>
		<li><router-link to="/resume">Resume</router-link></li>
	</ul>
</div>

</template>


<!-- https://www.w3schools.com/howto/howto_js_navbar_sticky.asp -->
<script>


	export default{
		data: function() {
			return {
				navigation: [
					'portfolio',
					'notes',
					'blog',
					'resume'
				],
				pageYOffset: 0,
				sticky: 0
			}
		},

		methods: {
			stickyNav(){
				// console.log("Scrolling")
				var navbar = document.getElementById("navbar");

				if(this.sticky == 0){
					var sticky = navbar.offsetTop;
					this.sticky = sticky;
				}
				
				this.pageYOffset = window.pageYOffset;
			}
		}
	}

</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
/*https://css-tricks.com/sticky-smooth-active-nav/*/
#NavigationBar {
	margin: 0 auto;
	height: 100px;
	/*overflow: hidden;*/
	background-color: #fff;

}

ul {
	/*https://css-tricks.com/snippets/css/a-guide-to-flexbox/*/
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	/*padding: 10px auto;*/
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
	/*margin: 0 5px;*/

}

.router-link-exact-active {
	color: white;
	background-color: #CA5D1D;
}

.sticky{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 0px 20px;
	/*padding: 0;*/
	/*margin: 0 auto;*/
	/*border-left: 10% black solid;*/
}


</style>