import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

const counter = {
  namespaced: true,
  actions,
  mutations,
  state
}

export default counter;
