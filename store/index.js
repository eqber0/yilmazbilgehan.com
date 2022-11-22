import axios from "axios";

export const state = () => ({
  yilmazbilgehan: [],
});

export const getters = {};

export const mutations = {
  updateData(state, data) {
    state.yilmazbilgehan = data;
  },
};

export const actions = {
  getData({ commit }) {
    axios
      .get(
        "https://yilmazbilgehan-7c443-default-rtdb.firebaseio.com/yilmazbilgehan/-NHUQnv4RDXCVtDw6iKo.json"
      )
      .then((res) => {
        commit("updateData", res.data);
      });
  },
};
