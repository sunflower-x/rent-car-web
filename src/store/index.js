import { createStore } from "vuex";
import orderManagement from "./modules/orderManagement";
const state = {
  name: "jack",
  isCollapse: false,
  addOrderDialogFormVisible: false,
};
const mutations = {};
const actions = {
  getRoute(store, value) {
    // console.log(value);
  },
};
export default createStore({
  modules: {
    orderManagement,
  },
  state,
  mutations,
  actions,
});
