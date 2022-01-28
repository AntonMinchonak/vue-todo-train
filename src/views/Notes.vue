<template>
  <div class="notes">
    <div class="controls">
    <router-link class="link-trash" to="/note-trash"><img src="../assets/icons8-мусор.svg" alt=""></router-link> 
    <select name="" id="" v-model="filterNote" @change="changeFilter">
      <option value="All">All</option>
      <option value="Very">Очень важные</option>
      <option value="Medium">Средневажные</option>
          <option value="Low">Маловажные</option>
    </select>
    <button @click="queryInfo"><span>+</span>Create Note</button>
</div>
    <NoteList :notes="allNotes" />
  </div>
</template>

<script>
import NoteList from "@/components/NoteList.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      filterNote: "All",
    };
  },
  components: {
    NoteList,
  },
  computed: {
    ...mapGetters(["allNotes"]),
  },
  methods: {
    ...mapMutations(["filterNotes"]),
    changeFilter() {
      this.filterNotes(this.filterNote);
    },
    queryInfo() {
      this.$router.push({
        name: "noteCreate",
    //     query: {
    //       1wq23: "213wq",
    //     },
    //     params: {
    //       gayshit: "i am",
    //     },
      });
    },
  },
  // created() {
  //   this.$store.dispatch("retriveNotes");
     
  // },
};
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.notes {
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

span {
  font-size: 40px;
  line-height: 20px;
  vertical-align: bottom;
  margin-right: 5px;
}

select {
  padding: 3px;
  border: 1px solid rgb(178, 255, 226);
  padding: 5px;
  border-radius: 3px;
  order: 1;
  background: none;color: rgb(60, 68, 65);
}

.link-trash {
  order:1;
  height: 25px;
  width: 25px;
  border: 1px solid rgb(35, 158, 111);
  border-radius: 3px;
  display: flex;
}

.link-trash:hover {
  background: rgb(10, 43, 29);;
}

.link-trash>img {
  height: 16px;
 margin:auto auto;
}

button {
  padding: 10px 15px;
  background: rgb(35, 158, 111);
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  margin-right: auto;
}

.link {
  margin-right: auto;
}

@media (max-width: 680px) {
  .link-trash {
  width: 30px;
  height: 30px;
}
}
</style>