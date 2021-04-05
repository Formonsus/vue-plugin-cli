import { Commit } from "vuex";

export interface IRootState {
  root: boolean,
  version: string
}

export interface CounterState {
  counter: number;
}

export enum MutationTypes {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

export enum ActionTypes {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

export type CounterMutations<S = CounterState> = {
  [MutationTypes.INCREMENT_COUNTER](state: S): void;
  [MutationTypes.DECREMENT_COUNTER](state: S): void;
}
export interface CounterActions {
  [ActionTypes.INCREMENT_COUNTER]({ commit }: { commit: Commit}): void;
  [ActionTypes.DECREMENT_COUNTER]({ commit }: { commit: Commit }): void;
}
