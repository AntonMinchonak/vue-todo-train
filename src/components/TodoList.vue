<template>
    <div>
        <ul>
            <TodoItem @remove-item="removeTodo" @change-todo="changeTodo" v-for="todo in todos" :key="todo.id" :todo="todo"/>
        </ul>
        <p v-if="todos.length===0">Список задач пуст. Наконец-то ты свободен.</p>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  props: ["todos"],
  methods: {
      removeTodo(id) {
          this.$emit("remover", id)
      },
       changeTodo(order) {
          this.$emit("changer", order)
      }
  }
}
</script>


<style scoped>
ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 10px; 
}
</style>