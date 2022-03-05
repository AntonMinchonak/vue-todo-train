import axios from "axios";

export default {
  actions: {
    retriveTodos(ctx) {
      axios
        .get("http://192.168.0.100:3000/products" || "http://10.20.5.50:3000/products" || "http://127.0.0.1:3000/products")
        .then((res) => res.data)
        .then((res) => {
          res = res.reverse();
          let completedList = res.filter((el) => el.completed);
          completedList = completedList.reverse();
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
          ctx.commit("updateIsLoaded");
        })
        .catch((err) => {
          console.log("iuh" + err);
          ctx.commit("updateIsLoaded");
          ctx.commit("updateIsError");
        })
        .finally(() => {
          ctx.commit("updateIsLoaded");
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
       axios.post("http://192.168.0.100:3000/products" || "http://10.20.5.50:3000/products" || "http://127.0.0.1:3000/products", newTodo);
    },
    deleteTodo(state, todo) {
      state.todos = state.todos.filter((el) => el.id !== todo.id);
      for (let i = 0; i < state.todos.length; i++) state.todos[i].order = i + 1;
      axios.delete(
        `http://192.168.0.100:3000/products/${todo._id}` || `http://10.20.5.50:3000/products/${todo._id}` || `http://127.0.0.1:3000/products/${todo._id}`
      );
    },
    changeTodoStatementStore(state, item) {
      state.todos[item.order - 1].completed = !state.todos[item.order - 1].completed;
      let typeOfCheck = state.todos[item.order - 1].completed;
      let sliced = state.todos.splice(item.order - 1, 1)[0];
      if (!typeOfCheck) {
        state.todos.splice(0, 0, sliced);
      } else {
        state.todos.splice(state.todos.length, 0, sliced);
      }
      for (let i = 0; i < state.todos.length; i++) state.todos[i].order = i + 1;
      axios.put(
        `http://192.168.0.100:3000/products/${item._id}` || `http://10.20.5.50:3000/products/${item._id}` || `http://127.0.0.1:3000/products/${item._id}`,
        item
      );
    },
    filterList(state, filter) {
      state.filter = filter;
    },
    updateIsLoaded(state) {
      state.isLoaded = true;
    },
    updateIsError(state) {
      state.isError = true;
    },
    editedTodo(state, item) {
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === item.id) state.todos[i].title = item.title;
      }
      axios.put(
        `http://192.168.0.100:3000/products/${item._id}` || `http://10.20.5.50:3000/products/${item._id}` || `http://127.0.0.1:3000/products/${item._id}`,
        item
      );
    },
  },
  state: {
    todos: [],
    filter: "All",
    isLoaded: false,
    isError: false,
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
    getLoad(state) {
      return state.isLoaded;
    },
    getError(state) {
      return state.isError;
    },
  },
};
