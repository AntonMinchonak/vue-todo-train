export default {
  actions: {
    retriveTodos(ctx) {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=50")
        .then((res) => res.json())
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
          const todos = [...uncompletedList, ...completedList];
          ctx.commit("updateTodos", todos);
        });
    },
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },
    onFormSubmitStore(state, newTodo) {
      state.todos.unshift(newTodo);
      for (let i = 0; i < state.todos.length; i++) state.todos[i].order = i + 1;
    },
    deleteTodo(state, todoId) {
      state.todos = state.todos.filter((el) => el.id !== todoId);
      for (let i = 0; i < state.todos.length; i++) state.todos[i].order = i + 1;
    },
    changeTodoStatementStore(state, order) {
      state.todos[order - 1].completed = !state.todos[order - 1].completed;
      let typeOfCheck = state.todos[order - 1].completed;
      let sliced = state.todos.splice(order - 1, 1)[0];
      if (!typeOfCheck) {
        state.todos.splice(0, 0, sliced);
      } else {
        state.todos.splice(state.todos.length, 0, sliced);
      }
      for (let i = 0; i < state.todos.length; i++) state.todos[i].order = i + 1;
    },
    filterList(state, filter) {
      state.filter = filter;
    },
  },
  state: {
    todos: [],
    filter: "All",
  },
  getters: {
    allTodos(state) {
      switch (state.filter) {
        case "All":
          return state.todos;
        case "Incompleted":
          return state.todos.filter((el) => !el.completed);
        case "Completed":
          return state.todos.filter((el) => el.completed);
        default:
          return state.todos;
      }
    },
  },
};
