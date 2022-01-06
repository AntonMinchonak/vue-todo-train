<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoCreate @add-item="createItem"/>
    <TodoList @remover="removeTodo" :todos="todos" />
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
  ]
}
},
methods: {
  removeTodo(id) {
    this.todos = this.todos.filter(el => el.id !== id)
  },
  createItem(value) {
    console.log(this.todos)
    this.todos.push({
       completed: false,
        title: value,
         id: Date.now()    
    })
     console.log(this.todos)
  }
}
}


</script>

