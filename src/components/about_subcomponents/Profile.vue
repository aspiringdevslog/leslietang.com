<template>
	<div id="profile">

		<img class="profile-image" src="./profile.jpg">

		<ul>		
			<li>
				<a href="https://github.com/aspiringdevslog" target="_blank"> 
					<i class="fab fa-github"></i> 
					Github  
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/leslie-tang/" target="_blank">
					<i class="fab fa-linkedin"></i> 
					LinkedIn  
				</a>
			</li>



		</ul>
	</div>
</template>

<script>
	export default{
		data: function(){
			return {
			}
		},
		props: {
			imgSrc: String,
			// socialLinks: Array
		}
	}
</script>

<style scoped>
#profile {
/*	width: 50%;*/
	font-family: 'Montserrat', sans-serif; 
	font-weight: 400;
		/*text-transform: uppercase;*/
	font-size: 1.2rem;
	/*letter-spacing: 130;*/
	text-align: center;
}

h2 {
	font-family: 'Montserrat', sans-serif; 
	font-weight: bold;
	text-transform: uppercase;
	font-size: 2rem;
	letter-spacing: 130;
	margin: 20px;
}

hr {
	width: 100%;
}

ul {
	/*https://css-tricks.com/snippets/css/a-guide-to-flexbox/*/
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
}

li {
	list-style: none;
	font-family: 'Montserrat', sans-serif; 
	/*font-weight: bold;*/
	/*text-transform: uppercase;*/
	font-size: 1.2rem;
	letter-spacing: 130;
	margin: 3px 10px;
}

.profile-image {
	width: 70%;
	max-width: 250px;
	/*max-width: 70%;*/
	margin: 20px auto;
	border: 3px solid;
}
</style>