<template>
  <form @submit.prevent="onFormSubmit">
    <input
      class="todo-text"
      type="text"
      name=""
      id=""
      v-model="value"
      placeholder="Дело..."
    />
    <input type="submit" value="Создать" />
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapMutations(["onFormSubmitStore"]),

     onFormSubmit() {
      if (this.value) {
         this.onFormSubmitStore({
          completed: false,
          title: this.value,
          id: Date.now(),
          order: 0,
        });
        this.value = "";
        setTimeout(()=> {
          this.$store.dispatch("retriveTodos");
        },0)
      }
    },
  },
};
</script>

<style scoped>
.todo-text {
  width: auto;
  flex-grow: 1;
  border: 1px solid rgb(153, 230, 200);
  padding: 5px 10px;
  border-radius: 3px;
}

input[type="text"]:focus {
  outline: none;
  border: 1px solid rgb(35, 158, 111);
}

form {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
}

input[type="submit"] {
  padding: 10px 15px;
  background: rgb(35, 158, 111);
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 3px;
  flex-grow: 0;
  width: auto;
}

input[type="submit"]:active {
  background: rgb(22, 100, 70);
}

input[type="submit"]:hover {
  cursor: pointer;
}
</style>