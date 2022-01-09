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
        }
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos
        }
    },
    state: {
        todos: []
    },
    getters: {
        allTodos(state) {
            return state.todos
        }
    }
}