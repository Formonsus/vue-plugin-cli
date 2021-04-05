<% if (version === 3) { -%>
import { createStore } from "vuex";

const store = createStore({
  state: {},
  mutations: {},
  actions: {}
});
<% } else { -%>
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});
<% } -%>

export default store;
