// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  vuex from 'vuex'
import VueI18n from 'vue-i18n'
import VueCookies from 'vue-cookies'

Vue.use(vuex)
Vue.use(VueI18n)
Vue.use(VueCookies)

Vue.config.productionTip = false

const i18n = new VueI18n({
    locale:'zh',//语言标识，默认为中文
    messages:{
        'zh':require('../assets/lang/zh'),
        'en':require('../assets/lang/en')
    }
})


/* eslint-disable no-new */
new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount('#app-box')
