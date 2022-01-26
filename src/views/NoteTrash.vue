<template>
     <div class="note-trash">
         <div class="trash-title">
           <router-link class="back" to="/notes"><button>&#8592;</button></router-link>
         <h1 class="trash-title">Корзина</h1>
    <button @click="clearAll" class="clear-all" >Очистить корзину</button>
         </div>
     <NoteList :notes="allDeletedNotes" :isTrash="isTrash"/>
     </div>
</template>

<script>

import NoteList from "@/components/NoteList.vue";
import {mapGetters, mapMutations} from "vuex"

export default {
    data(){
        return {
            isTrash: true
        }
    },
computed: {
    ...mapGetters(['allDeletedNotes']),
},
components: {
    NoteList
},
methods: {
    ...mapMutations(['removeAll']),
    clearAll() {
        this.removeAll()
    }
},
created() {
      this.$store.dispatch("retriveNotes");
}

}
</script>

<style>

.note-trash {
    width: 800px;
    margin:0 auto;
}

.trash-title {
    margin:0 auto;
    margin-right: 156px;
   
}

.back {
  cursor: pointer;
}

button {
  border: 1px solid rgb(35, 158, 111);
  background: none;
  font-weight: 900;
  font-size: 20px;
  padding: 0 20px 4px;
  border-radius: 3px;
  cursor: pointer;
}

.trash-title {
    display:flex;
    justify-content: space-between;
    margin: 30px 0 0 0;
    align-items: center;
}

.clear-all {
    font-size: 16px;
    padding: 10px 15px;
    background: rgb(35, 158, 111);
    color: white;
    font-weight: 600;
}
</style>