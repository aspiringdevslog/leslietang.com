// https://www.youtube.com/watch?v=Zflo2-s4768
// https://www.youtube.com/watch?v=js5Sr_ZSHDs
//  https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
import HelloWorld from './components/HelloWorld.vue'
import Resume from './components/Resume.vue'
import Notes from './components/Notes.vue'
import Blog from './components/Blog.vue'
import Portfolio from './components/Portfolio.vue'
import About from './components/About.vue'

export default[
	// {path: '/', component},
	{path: '/resume', component: Resume},
	{path: '/notes', component: Notes},
	{path: '/portfolio', component: Portfolio},
	{path: '/blog', component: Blog},
	{path: '/', component: About},
]