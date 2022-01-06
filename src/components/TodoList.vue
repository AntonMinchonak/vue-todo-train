<template>
    <div>
        <ul>
            <TodoItem @remove-item="removeTodo" v-for="todo in todos" :key="todo.id" :todo="todo"/>
        </ul>
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
      }
  }
}
</script>


<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px; 
}
</style>