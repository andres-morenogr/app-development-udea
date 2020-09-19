import Vue from 'vue'
import App from './App.vue'
import MainPage from './components/MainPage'
import ProductDetail from './components/ProductDetail'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
		{
			path: "/",
			redirect: {
				name: "MainPage"
			}
		},
		{
			path: '/',
			name: 'MainPage',
			component: MainPage
    },
    {
			path: '/detail/:id',
			name: 'ProductDetail',
			component: ProductDetail
		}
	]
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
