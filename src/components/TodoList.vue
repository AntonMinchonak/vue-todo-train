<template>
    <div>
       <Spinner v-if="!getLoad" />
        <ul v-else>
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
        </ul>
        <p v-if="!todos.length">Список задач пуст. Наконец-то ты свободен.</p>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
import Spinner from '@/components/Spinner.vue'
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(['getLoad']),
  components: {
    TodoItem,
    Spinner
  },
  props: ["todos"],
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