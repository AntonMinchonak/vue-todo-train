import axios from 'axios'

export default {
  actions: {
    retriveTNotes(ctx) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts?_limit=11")
        .then((res) => res.data)
        .then((res) => {
          let completedList = res.filter((el) => el.completed);
          let uncompletedList = res.filter((el) => !el.completed);
          //   uncompletedList= uncompletedList.concat(completedList);
          let preTodos = [...uncompletedList, ...completedList];
          //   for (let i = 0; i < preTodos.length; i++) {
          //     preTodos[i].order=i+1;
          //   }
          preTodos.forEach((el, index) => {
            preTodos[index].order = index + 1;
          });
          const notes = [...uncompletedList, ...completedList];
          ctx.commit("updateNotes", notes);
          setTimeout(() => {
            ctx.commit("updateIsLoaded");
          }, 1000);
        });
    },
  },
  mutations: {
    // updateNotes(state, notes) {
    //   state.notes = notes;
    // },
  },
  state: {
    notes: [
      {
        title: "sos",
        body: "sassssssss dasdsa asd",
        order: 1,
        id: 0,
      },
      {
        title: "qwe",
        body: "sassessss dsa dasdsa asd",
        order: 2,
        id: 1,
      },
    ],
  },
  getters: {
    allNotes(state) {
      return state.notes;
    },
  },
};
