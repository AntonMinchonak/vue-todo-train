<template>
  <form @submit.prevent="onFormSubmit">
    <router-link class="back" to="/notes"><button>&#8592;</button></router-link>
    <input type="text" name="" id="" v-model="value" placeholder="Дело..." />
    <textarea type="textarea" name="" id="" v-model="valueNote" placeholder="Текст заметки..." />
    <router-link class="link" to="/note-date"><input type="submit" value="Далее" /></router-link>
    
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      value: "",
      valueNote: ""
    };
  },
  props:['notes'],
  methods: {
    ...mapMutations(['onFormSubmitStore']),
    
    onFormSubmit() {
      if(this.value) {
       this.onFormSubmitStore({
        completed: false,
        title: this.value,
        body: this.valueNote,
        id: Date.now(),
        order: 0
       })
       this.value=''
    }
    },
  }
  }
</script>



<style scoped>
input[type="text"] {
flex-grow: 1;
border:1px solid rgb(153, 230, 200);
padding: 5px 10px;
border-radius: 3px; 
font-size:  20px;
}

input[type="text"]:focus {
  outline: none;
  border:1px solid rgb(35, 158, 111);
}
textarea {
flex-grow: 1;
border:1px solid rgb(153, 230, 200);
padding: 5px 10px;
border-radius: 3px; 
vertical-align: top;
resize: none;
font-family: sans-serif;
font-size: 18px;
height: 210px;
}

textarea:focus {
 outline: none;
  border:1px solid rgb(35, 158, 111);
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 800px;
  margin: 0 auto;
}

input[type="submit"] {
padding:10px 15px;
background: rgb(35, 158, 111);
border: none;
color: white;
font-size: 16px;
font-weight: bold;
border-radius: 3px;
 width: 100%
}

input[type="submit"]:active {
background: rgb(22, 100, 70);
}

input[type="submit"]:hover {
cursor: pointer;
}

.back {
  margin-right: auto;
  
}

button {
  border: 1px solid rgb(35, 158, 111);;
  background: none;
  font-weight:900;
  font-size: 20px;
  padding: 0 20px 4px ;
  border-radius: 3px;
  margin-bottom: 20px;
}

</style>