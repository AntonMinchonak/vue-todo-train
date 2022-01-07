<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <select name="" id="" v-model="filterSelected">
      <option value="All">All</option>
      <option value="Incompleted">Incompleted</option>
      <option value="Completed">Completed</option>
    </select>
    <TodoCreate @add-item="createItem"/>
    <TodoList @remover="removeTodo" :todos="filterList" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import TodoCreate from "@/components/TodoCreate.vue";

export default {
  name: 'Home',
  components: {
  TodoList,
  TodoCreate
  },
  data() {
return {
  todos: [
    {
    completed: true,
    title: "SOSAT",
    id: 1
  },
  {
    completed: false,
    title: "LIZAT",
    id: 2
  },
  {
    completed: false,
    title: "SPAT",
    id: 3
  }
  ],
  filterSelected: 'All'
}
},
computed: {
  filterList() {
    switch (this.filterSelected) {
      case "All" : return this.todos
      case "Incompleted":  return this.todos.filter(el => !el.completed)
      case "Completed":  return this.todos.filter(el => el.completed)
      default: return this.todos
    }
    }
  },
methods: {
  removeTodo(id) {
    this.todos = this.todos.filter(el => el.id !== id)
  },
  createItem(value) {
    this.todos.push(value)
  }
}
}


</script>

