import { createStore } from "vuex";
import { MyType } from "../types/my-type";

export default createStore({
  state: {
    message: { name: "angel orellana", coordinates: 432 } as MyType,
  },
  mutations: {},
  actions: {},
  modules: {},
});
