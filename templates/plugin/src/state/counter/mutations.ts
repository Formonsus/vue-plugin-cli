import { MutationTree } from "vuex";

import { MutationTypes, CounterMutations, CounterState } from "./interfaces";

export const mutations: MutationTree<CounterState> & CounterMutations = {
  [MutationTypes.INCREMENT_COUNTER](state: CounterState) {
    state.counter++;
  },

  [MutationTypes.DECREMENT_COUNTER](state: CounterState) {
    state.counter--;
  }
}
