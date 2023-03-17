const state = {
  name: "jack1111",
  returnCarDialogFormVisible: false,
  getCarDialogFormVisible: false,
};
const mutations = {
  changeDialogVisible(state, val) {
    // console.log("mutations/changeDialogVisible");
    state.returnCarDialogFormVisible = val;
  },
  changeGetCarDialogVisible(state, val) {
    // console.log("mutations/changeDialogVisible",1111111111);
    state.getCarDialogFormVisible = val;
  },
};
const actions = {
  changeDialogVisible({ commit }, val) {
    // console.log("actions/changeDialogVisible");
    commit("changeDialogVisible", val);
  },
  changeGetCarDialogVisible({ commit }, val) {
    // console.log("actions/changeDialogVisible",11111111);
    commit("changeGetCarDialogVisible", val);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
