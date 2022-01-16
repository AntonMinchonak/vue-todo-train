<template>
    <div>
       <Spinner v-if="!getLoad" />
        <ul v-else>
            <NoteItem v-for="note in notes" :key="note.id" :note="note" />
        </ul>
        <p v-if="!notes.length">Список задач пуст. Наконец-то ты свободен.</p>
    </div>
</template>

<script>
import NoteItem from '@/components/NoteItem.vue'
import Spinner from '@/components/Spinner.vue'
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(['getLoad']),
  components: {
    NoteItem,
    Spinner
  },
  props: ["notes"],
}
</script>


<style scoped>
ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    gap: 20px; 
    margin: 0;
}
</style>