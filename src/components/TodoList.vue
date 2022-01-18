<template>
    <div>
       <Spinner v-if="!getLoad" />
        <ul v-else>
           <transition-group name="list-complete" tag="p">
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
           </transition-group>
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

.list-complete-item {
  transition: all 3s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(50px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>