import { Module } from "vuex";

import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";
import { CounterState, IRootState } from "./interfaces";

const counter: Module<CounterState, IRootState> = {
  namespaced: true,
  actions,
  mutations,
  state
}

export default counter;
