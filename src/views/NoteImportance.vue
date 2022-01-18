<template>
 <form >
    <router-link class="back" to="/note-date"><button>&#8592;</button></router-link>
    <label for="important">Укажите важность заметки:</label>
    <select name="" id="important" v-model="importance">
        <option :value="1" >Очень важно</option>
        <option :value="2">Средневажно</option>
         <option :value="3">Маловажно</option>
    </select>
   <input type="submit" value="Создать заметку" @click.prevent="queryInfo" />
    
  </form>
</template>

<script>
// import {mapMutations} from "vuex"

export default {
    data() {
        return {
            importance:1,
            link: ""
        }
    },
methods: {
 
    // ...mapMutations(['newNoteImportance']),
    // onFormSubmit() {
    //     if (this.importance) {
    //         this.link = "/notes"
    //     this.newNoteImportance({
    //         importance: this.importance,
    //         id: Date.now()
    //     })
    //     }
    // },
     queryInfo() {
       if(this.importance) {
      this.$router.push({
        name:'Notes',
        query: {
          importance: this.importance,
          title: this.$route.query.title,
          body: this.$route.query.body,
          date: this.$route.query.date,
            time: this.$route.query.time
        },
        params: {
          gayshit: 'we r'
        }
      })
    //    this.newNoteImportance({
    //         importance: this.importance,
    //         id: Date.now()
    //     })
    }
  

     }
}
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 800px;
  margin: 0 auto;
}

label {
    margin-right: auto;
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
  cursor: pointer;
}

button {
  border: 1px solid rgb(35, 158, 111);;
  background: none;
  font-weight:900;
  font-size: 20px;
  padding: 0 20px 4px ;
  border-radius: 3px;
  margin-bottom: 20px;
  cursor: pointer;
}

select {
    padding: 10px;
}
</style>