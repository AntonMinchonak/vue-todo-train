<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <select name="" id="" v-model="filterSelected">
      <option value="All">All</option>
      <option value="Incompleted">Incompleted</option>
      <option value="Completed">Completed</option>
    </select>
    <TodoCreate @add-item="createItem"/>
    <TodoList @remover="removeTodo" @changer="changeTodo" :todos="filterList" />
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
    completed: false,
    title: "SOSAT",
    id: 1,
    order: 1
  },
  {
    completed: false,
    title: "LIZAT",
    id: 2,
    order: 2
  },
  {
    completed: false,
    title: "SPAT",
    id: 3,
    order: 3
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
       for (let i=0; i<this.todos.length; i++)  this.todos[i].order = i+1;
  },
  changeTodo(order) {
    let typeOfCheck= this.todos[order-1].completed
    let insertOrder=this.todos.length-1
    let sliced = this.todos.splice(order-1, 1)[0]
    if (!typeOfCheck) {
      this.todos.splice(0,0,sliced)
      } else {
          sliced.order=this.todos.length+1
          this.todos.splice(insertOrder,0,sliced) 
      }
   for (let i=0; i<this.todos.length; i++) {
      this.todos[i].order = i+1;
    }
  },
  createItem(value) {
    let insertOrder=this.todos.length
    value.order=insertOrder+1
    for (let i = 0; i< this.todos.length; i++) {
      if (this.todos[i].completed) {
        insertOrder=i
        value.order=insertOrder+1
        break
      }
    }
    this.todos.splice(insertOrder,0,value)
    for (let i=0; i<this.todos.length; i++) {
      this.todos[i].order = i+1;
    }
  }
}
}


</script>

<style scoped>
.home {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

img {
width: 90px;
align-self: center;
}

select {
  padding:3px;
  align-self: center;
  border: 1px solid rgb(192, 192, 192);
  padding: 5px;
  border-radius: 3px;
}

</style>