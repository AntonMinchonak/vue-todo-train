<template>
  <form @submit.prevent="onFormSubmit">
    <input type="text" name="" id="" v-model="value" placeholder="Дело..." />
    <input type="submit" value="Создать" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onFormSubmit() {
        if (!this.value.length) return
      let newTodo = {
        completed: false,
        title: this.value,
        id: Date.now(),
      };
      this.$emit("add-item", newTodo);
      this.value = "";
    },
  },
};
</script>



<style scoped>
div {
  display: flex;
}
</style>