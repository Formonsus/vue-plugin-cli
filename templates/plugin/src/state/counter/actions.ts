import { ActionTree, Commit } from "vuex";

import { ActionTypes, MutationTypes, CounterState, IRootState, CounterActions } from "./interfaces";

export const actions: ActionTree<CounterState, IRootState> & CounterActions = {
  [ActionTypes.SET_COUNTER]({ commit }: { commit: Commit }, payload: number) {
    commit(MutationTypes.SET_COUNTER, payload);
  },

  [ActionTypes.RESET_COUNTER]({ commit }: { commit: Commit }) {
    commit(MutationTypes.RESET_COUNTER);
  }
}
