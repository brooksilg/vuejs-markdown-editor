import Vue from 'vue';
import ResSplitPane from 'vue-resize-split-pane';
import App from './App.vue';
import store from './store';

Vue.component('rs-panes', ResSplitPane);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
