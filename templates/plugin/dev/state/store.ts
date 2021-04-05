<% if (version === 3) { -%>
import { createStore } from "vuex";

const store = createStore({
  state: {},
  mutations: {},
  actions: {}
});
<% } else { -%>
import Vuex from "vuex";

const store = new Vuex.Store({
  state: {},
  mutations: {},
  axtions: {}
});
<% } -%>

export default store;
