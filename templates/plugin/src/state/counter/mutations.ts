import { MutationTree } from "vuex";

import { MutationTypes, CounterMutations, CounterState } from "./interfaces";

export const mutations: MutationTree<CounterState> & CounterMutations = {
  [MutationTypes.SET_COUNTER](state: CounterState, payload: number) {
    state.counter = payload;
  },

  [MutationTypes.RESET_COUNTER](state: CounterState) {
    state.counter = 0;
  }
}
