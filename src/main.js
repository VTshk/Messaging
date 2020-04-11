import Vue from 'vue';
import TextareaAutosize from 'vue-textarea-autosize';
import VueChatScroll from 'vue-chat-scroll';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.use(VueChatScroll);
Vue.use(TextareaAutosize);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
