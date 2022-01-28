<template>
  <form class="noteform">
    <router-link class="back" to="/notes"><button>&#8592;</button></router-link>
    <input class="note-create" type="text" name="" id="" v-model="value" placeholder="Дело..." />
    <textarea type="textarea" name="" id="" v-model="valueNote" placeholder="Текст заметки..." />
   <input type="submit" value="Далее" @click.prevent="queryInfo"/>
    
  </form>
</template>

<script>
// import { mapMutations } from "vuex";
export default {
  data() {
    return {
      value: this.$route.query.title ,
      valueNote: this.$route.query.body ,
      link:""
    };
  },
  methods: {
    // ...mapMutations(['newNoteCreate']),
    
    // onFormSubmit() {
    //   if(this.value&&this.valueNote) {
    //    this.link="/note-date"
    //    this.newNoteCreate({
    //     title: this.value,
    //     body: this.valueNote,
    //    })
    //    this.value=''
    //     this.valueNote=''
    // }
    // },
       queryInfo() {
         if(this.value&&this.valueNote) {
      this.$router.push({
        name:'noteDate',
        query: {
          title: this.value,
          body: this.valueNote,
          time: this.$route.query.time,
          date: this.$route.query.date,
          importance: this.$route.query.importance
        },
        params: {
          gayshit: 'u r'
        }
      })
      // this.newNoteCreate({
      //   title: this.value,
      //   body: this.valueNote,
      //  })
    }
  }
  }
  }
</script>



<style scoped>
.note-create {
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

.noteform {
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
 width: auto;
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
  color: black;
}

button {
  border: 1px solid rgb(35, 158, 111);
  background: none;
  color: rgb(35, 158, 111);
  font-size: 20px;
  padding: 2px 20px 2px ;
  border-radius: 3px;
  /* margin-bottom: 20px; */
  cursor: pointer;
}

</style>