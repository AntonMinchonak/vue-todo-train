<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <select name="" id="" v-model="filterHome" @change="changeFilter">
      <option value="All">All</option>
      <option value="Incompleted">Incompleted</option>
      <option value="Completed">Completed</option>
    </select>
    <TodoCreate />
    <TodoList :todos="allTodos" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoCreate from "@/components/TodoCreate.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return { filterHome: "All" };
  },
  components: {
    TodoList,
    TodoCreate,
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },
  methods: {
    ...mapMutations(["filterList"]),
    changeFilter() {
      this.filterList(this.filterHome);
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

img {
  width: 90px;
  align-self: center;
  margin-bottom: 60px;
}

select {
  padding: 3px;
  align-self: start;
  border: 1px solid rgb(178, 255, 226);
  padding: 5px;
  border-radius: 3px;
  background: none;
  color: rgb(60, 68, 65);
}
</style>