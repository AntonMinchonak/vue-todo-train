<template>
  <form @submit.prevent="onFormSubmit">
    <input type="text" name="" id="" v-model="value" placeholder="Дело..." />
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
    ...mapMutations(['onFormSubmitStore']),
    onFormSubmit() {
       this.onFormSubmitStore({
        completed: false,
        title: this.value,
        id: Date.now(),
        order: 0
       })
       this.value=''
    },
  }
  }
</script>



<style scoped>
div {
  display: flex;
}

input[type="text"] {
width: 100%;
border:1px solid rgb(153, 230, 200);
padding: 5px 10px;
border-radius: 3px; 
}

input[type="text"]:focus {
  outline: none;
  border:1px solid rgb(35, 158, 111);
}


form {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
}

input[type="submit"] {
padding:10px 15px;
background: rgb(35, 158, 111);
border: none;
color: white;
font-size: 16px;
font-weight: bold;
border-radius: 3px;
}

input[type="submit"]:active {
background: rgb(22, 100, 70);
}
</style>