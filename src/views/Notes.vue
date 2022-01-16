<template>
  <div class="notes">
    <select name="" id="" v-model="filterHome" @change="changeFilter">
      <option value="All">All</option>
      <option value="Incompleted">Incompleted</option>
      <option value="Completed">Completed</option>
    </select>
    <router-link class="link" to="/note-create"><button><span>+</span>Create Note </button></router-link>
    <NoteList :notes="allNotes" />
  </div>
</template>

<script>
import NoteList from "@/components/NoteList.vue";
import {mapGetters, mapMutations} from 'vuex';

export default {
 name: "Home",
  data() {
    return { 
        filterHome: 'All',
         }
  },
  mounted() {
      // this.$store.dispatch("retriveNotes")
  },
  components: {
    NoteList,
  },
   computed: {
    ...mapGetters(['allNotes']),
  },
  methods: {
    ...mapMutations(['filterList']),
    changeFilter () {
      this.filterList(this.filterHome)
    }
  }
}
</script>

<style scoped>
.notes {
  width: 800px;
  margin: 0 auto;
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
  align-self: start;
  border: 1px solid rgb(223, 223, 223);
  padding: 5px;
  border-radius: 3px;
}

button {
  padding: 10px 15px;
  background: rgb(35, 158, 111);
  border: none;
  color: white;
  font-weight: 600;
 border-radius:3px ;
 font-size: 16px;
 margin-bottom: 20px;
}

.link {
 margin-right: auto;
}

</style>