<template>
  <form>
   <button class="back" @click.prevent="queryBack">&#8592;</button>
    <label for="important">Укажите важность заметки:</label>
    <select name="" id="important" v-model="importance">
      <option :value="1">Очень важно</option>
      <option :value="2">Средневажно</option>
      <option :value="3">Маловажно</option>
    </select>
    <input type="submit" value="Создать заметку" @click.prevent="queryInfo" />
  </form>
</template>

<script>
import {mapMutations} from "vuex"

export default {
  data() {
    return {
      importance: parseInt(this.$route.query.importance) || 1,
      link: "",
    };
  },
  methods: {
    ...mapMutations(['addNote']),
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
      if (this.importance) {
        this.addNote({
            importance: this.importance,
            title: this.$route.query.title,
            body: this.$route.query.body,
            date: this.$route.query.date,
            time: this.$route.query.time,
            isDeleted: false,
            id: Date.now()
          })
        this.$router.push({
          name: "Notes",
          // query: {
          //   importance: this.importance,
          //   title: this.$route.query.title,
          //   body: this.$route.query.body,
          //   date: this.$route.query.date,
          //   time: this.$route.query.time,
          // },
          params: {
            gayshit: "we r",
          },
        });
        //    this.newNoteImportance({
        //         importance: this.importance,
        //         id: Date.now()
        //     })
      }
      
    },
      queryBack() {
       
           console.log(this.$router)
      this.$router.push({
        name:'noteDate',
        query: {
          time: this.$route.query.time,
          date: this.$route.query.date,
          title: this.$route.query.title,
          body: this.$route.query.body,
          importance: this.importance
        },
      })
    
       }
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
}

label {
  margin-right: auto;
}

input[type="submit"] {
  padding: 10px 15px;
  background: rgb(35, 158, 111);
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 3px;
  width: 100%;
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
  border: 1px solid rgb(35, 158, 111);
  background: none;
   color: rgb(35, 158, 111);
  font-size: 20px;
  padding: 2px 20px 2px;
  border-radius: 3px;
  cursor: pointer;
}

select {
  padding: 10px;
  background: none;
  color:rgb(57, 66, 62);
  border: 1px solid rgb(35, 158, 111);
  border-radius: 4px;
}
</style>