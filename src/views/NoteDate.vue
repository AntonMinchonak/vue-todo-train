<template>
 <form >
    <router-link class="back" to="/note-create"><button>&#8592;</button></router-link>
    <div class="date-time-flex">
    <label class="datelabel" for="date">Введите дату: </label><input type="date" name="" id="date" v-model="date" /> 
    </div>
    <div class="date-time-flex">
     <label class="datelabel" for="time">Введите время: </label><input type="time" name="" id="time" v-model="time" />
     </div>
    <input type="submit" value="Далее" @click.prevent="queryInfo"/>
   
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
         if(this.date&&this.time) {
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
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
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
  margin-bottom: 20px;
}

button {
  border: 1px solid rgb(35, 158, 111);;
  background: none;
  /* font-weight:900; */
  font-size: 20px;
  padding: 0 20px 4px ;
  border-radius: 3px;
    cursor: pointer;
}

input:not([type="submit"]) {
    padding: 10px;
}

.date-time-flex {
  display: flex;
  align-items: center;
  gap: 10px;
  
}

#date, #time {
  flex-grow: 1;

}

.datelabel {
    width:16%;
    text-align: start;
}
</style>