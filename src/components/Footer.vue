<template>
	<div id="footer">
		<span>
		Created by Leslie Tang, 2018 - {{ getCurrentYear }}. Made using Vue.js. Last updated on 03 March 19.
		</span>
		<span>
			Source code available on 
			<a href="https://github.com/aspiringdevslog/leslietang.com" target="_blank"> 
				<i class="fab fa-github"></i> 
				Github.  
			</a>
		</span>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				startYear: 2018
				// currentYear: ""
			}
		},
		computed: {
		getCurrentYear(){
			console.log(new Date().getFullYear()); 
			return new Date().getFullYear();

		},
		created: function(){
			// this.getCurrentYear();
		}
	}
	}
	

</script>

<style>
#footer {
	font-size: 14px;
	border-top: #202530 5px solid;
	padding: 10px;
	background-color: #333745;
	display: flex;
	align-items: center;

	display: flex;
	justify-content: center;
	align-items: center;
}	

span {
	padding: 0 3px;
}

</style>
