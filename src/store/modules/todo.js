export default {
  actions: {
    retriveTodos(ctx) {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
        .then((res) => res.json())
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            res[i].order = i + 1;
            delete res[i].userId;
          }
          const todos = res;
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
  },
  state: {
    todos: [],
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
  },
};