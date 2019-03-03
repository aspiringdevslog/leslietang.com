<template>
	<div id="item">
		<h2>
			{{ title }}
		</h2>
		<!-- <hr> -->
		<p v-for="(content, contentIndex) in body" v-bind:key="contentIndex">
			<ul>
			<!-- {{ content }} -->
			<li> {{ content.title }} </li>
				<ul>
					<li v-for="(item, itemIndex) in content.spec"  v-bind:key="itemIndex">
						{{ item }}
					</li>
				</ul>

			</ul>
		</p>
		<!-- <hr> -->
	</div>
</template>

<script>
	export default{
		data: function(){
			return {

			}
		},
		props: {
			title: String,
			body: Object
		}
	}
</script>

<style scoped>
#item {
/*	width: 50%;*/
	font-family: 'Montserrat', sans-serif; 
	font-weight: 400;
	/*text-transform: uppercase;*/
	font-size: 1rem;
	/*letter-spacing: 130;*/
	text-align: left;
}

h2 {
	font-family: 'Montserrat', sans-serif; 
	font-weight: bold;
	text-transform: uppercase;
	font-size: 1.5rem;
	letter-spacing: 130;
	margin: 20px;
}

hr {
	width: 100%;
}
</style>