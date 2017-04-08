import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter)
Vue.use(iView)

//new Vue({
//	el: '#app',
//	render: h => h(App)
//})

//import routes from './routes.js'
import routes from './routes.js'

const router = new VueRouter({
	routes: routes
})

const app = new Vue({
	el: '#app',
	render: h => h(App),
	router
}).$mount('#app')