<template>
	<div id="title">
		<h2>
			{{ title }}
		</h2>
		<hr>
	</div>
</template>

<script>
	export default{
		data: function(){
			return {

			}
		},
		props: {
			title: String
		}
	}
</script>

<style scoped>
h2 {
	font-family: 'Oswald', sans-serif;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 50pt;
	margin: 0;
}

hr {
	width: 100%;
	margin-top: 20px;
}
</style>