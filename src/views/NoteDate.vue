<template>
 <form >
    <router-link class="back" to="/note-create"><button>&#8592;</button></router-link>
    <input type="date" name="" id="" v-model="date" />
    <input type="time" name="" id="" v-model="time" />
    <input type="submit" value="Далее" @click="queryInfo"/>
    
  </form>
</template>

<script>
// import {mapMutations} from "vuex"

export default {
    data() {
        return {
            date:"",
            time:"",
            link:""
        }
    },
methods: {
    // ...mapMutations(['newNoteDate']),
    // onFormSubmit() {
    //     if(this.date&&this.time) {
    //         this.link="/note-importance"
    //     this.newNoteDate({
    //         date: this.date,
    //         time: this.time,
        
    //     })
    // }
    // },
       queryInfo() {
           console.log(this.$route.query.value)
      this.$router.push({
        name:'noteImportance',
        query: {
          date: this.date,
          time: this.time,
          title: this.$route.query.value,
          body: this.$route.query.valueNote
        },
        // params: {
        //   title: this.$route.query.value,
        //   body: this.$route.query.valueNote
        // }
      })
        //  this.newNoteDate({
        //     date: this.date,
        //     time: this.time,
        
        // })
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

input:not([type="submit"]) {
    padding: 10px;
}
</style>