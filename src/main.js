import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {data} from "./data";

import VueKinesis from 'vue-kinesis';
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import VueCookie from 'vue-cookie';

import {createHttpLink} from "apollo-link-http";


const apolloClient = new ApolloClient({
  uri: `http://${window.location.hostname}:4000/graphql`,
  fetchOptions: {
    link: new createHttpLink({
      credentials: 'include',
      headers: {
        'Content-Type': 'application/graphql',
      }
    })
  }
});

Vue.use(VueApollo);
Vue.use(VueCookie);
Vue.use(VueKinesis);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  data: data,
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
