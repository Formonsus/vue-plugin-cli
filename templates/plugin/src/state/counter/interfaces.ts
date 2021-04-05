import { Commit } from "vuex";


export interface IRootState {
  root: boolean,
  version: string
}

export interface CounterState {
  counter: number;
}

export type CounterMutations<S = CounterState> = {
  [MutationTypes.SET_COUNTER](state: S, payload: number): void;
  [MutationTypes.RESET_COUNTER](state: S): void;
}

export enum MutationTypes {
  SET_COUNTER = "SET_COUNTER",
  RESET_COUNTER = "RESET_COUNTER"
}

export enum ActionTypes {
  SET_COUNTER = "SET_COUNTER",
  RESET_COUNTER = "RESETS_COUNTER"
}

export interface CounterActions {
  [ActionTypes.SET_COUNTER]({ commit }: { commit: Commit}, payload: number): void;
  [ActionTypes.RESET_COUNTER]({ commit }: { commit: Commit }): void;
}
