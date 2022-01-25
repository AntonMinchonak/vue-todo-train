<template>
  <div class="notes">
    <div class="controls">
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
        query: {
          suka: "pziaed",
        },
        params: {
          gayshit: "i am",
        },
      });
    },
  },
  created() {
    this.$store.dispatch("newNote", this.$route.query);
  },
};
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notes {
  width: 800px;
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
  border: 1px solid rgb(223, 223, 223);
  padding: 5px;
  border-radius: 3px;
  order: 1;
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
}

.link {
  margin-right: auto;
}
</style>