import Vue from "vue";
import Vuex from "vuex";
import todo from "./modules/todo"
import notes from "./modules/notes";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todo,
        notes
}
})

