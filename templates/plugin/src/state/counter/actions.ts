import { ActionTree, Commit } from "vuex";

import { ActionTypes, MutationTypes, CounterState, IRootState, CounterActions } from "./interfaces";

export const actions: ActionTree<CounterState, IRootState> & CounterActions = {
  [ActionTypes.INCREMENT_COUNTER]({ commit }: { commit: Commit }) {
    commit(MutationTypes.INCREMENT_COUNTER);
  },

  [ActionTypes.DECREMENT_COUNTER]({ commit }: { commit: Commit }) {
    commit(MutationTypes.DECREMENT_COUNTER);
  }
}
