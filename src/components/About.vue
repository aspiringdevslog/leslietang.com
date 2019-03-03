<template>
	<div id="about">
		<about-title class="page-title" title="About"></about-title>

		<profile class="content-right-long"></profile>
		<about-title class="main-title" title="Education Background"></about-title>

			
		<!-- <item class="content-right" title="insertImage" body=""></item> -->

			
			<item class="content-left flex-item-half" title="National University of Singapore (expected graduation: 2021)" :body="NUS"></item>
			<item class="content-left flex-item-half" title="Temasek Polytechnic" :body="TP"></item>

			<item class="content-left flex-item-half" title="Positions Held (School Club)" :body="CCA_Pos"></item>


		<about-title class="main-title" title="Work Experience"></about-title>
			<item class="content-left flex-item-half" title="Internships" :body="WORK_INTERN"></item>
			<item class="content-left flex-item-half" title="Singapore Armed Forces (2012-2016)" :body="WORK_SAF"></item>

		<!-- <item class="content-right" title="Education Background" body="testing 4"></item> -->
	</div>
</template>

<script>

import Title from './about_subcomponents/Title.vue'
import Item from './about_subcomponents/Item.vue'
import Profile from './about_subcomponents/Profile.vue'

	export default{
		data: function(){
			return {
				TP: {
					0: {
						title: "Diploma in Business with Merit",
						spec: { 1:"Entrepreneurship", 2:"Marketing"}
					}, 
					1: {
						title: "Certificate in Psychology Fundamentals"
					}, 
				},
				NUS: {
					0: {
						title: "Bachelors in Computer Science",
						spec: { 1:"Software Engineering"}
					}
				},
				CCA_Pos: {
					0: {
						title: "Public Relations Subcommittee Member in NUS Toastmasters (2017)"
					},
					1: {
						title: "President of Temasek Polytechnic Mind Sports Interest Group (2011-2012)"
					},  
					2: {
						title: "Wei Qi Team Captain (2010-2011)"
					}, 
				},
				WORK_SAF: {
					0: {
						title: "Classified Position"
					}
				},
				WORK_INTERN: {
					0: {
						title: "Katalyst Pte Ltd (May - Jul 2018)",
						spec: {1: "Frontend Developer"}
					}
				},
			}
		},
		components: {
			'about-title': Title,
			'item': Item,
			'profile': Profile
		}
	}
</script>

<style scoped>
/*#about {
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: auto;
	grid-gap: 5px;
	width: 80%;
	margin: 0 auto;
}
*/
#about {
	display: flex;
	flex-wrap: wrap;
	/*justify-content: center;*/
	/*min-height: 2000px;*/
	width: 80%;
	margin: 0 auto;
}

.page-title{
	grid-column-start: 1;
	grid-column-end: 3; 
	width: 100%; 
	font-size: 3rem;
}

.main-title{
	grid-column-start: 1;
	grid-column-end: 2;
	width: 100%; 
	text-align: left;
}

.content-left{
	grid-column-start: 1;
	grid-column-end: 2;
	width: 100%; 
}

.content-right{
	grid-column-start: 2;
	grid-column-end: 3;
	width: 100%; 
}

.content-right-long{
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 2;
	grid-row-end: 5;
	width: 100%; 
}

.flex-item-half {
	width: 50%;
}

.flex-item-full {
	width: 100%;
}

.flex-item-third {
	width: 33.33%;
}

</style>