<template>
    <div>
       <Spinner v-if="!getLoad" />
        <ul v-else>
            <NoteItem class="itemN" v-for="note in notes" :key="note.id" :note="note" :isTrash="isTrash" />
        </ul>
        <p v-if="!notes.length&&!isTrash">Список задач пуст. Наконец-то ты свободен.</p>
        <p v-else-if="!notes.length&&isTrash">Корзина пуста.</p>
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
  props: ["notes","isTrash"],
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
    margin-top: 20px;
  justify-content: space-evenly;
}

ul>.itemN:last-child {
  margin-right:auto;
}
</style>