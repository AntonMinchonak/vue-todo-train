<template>
    <div>
       <Spinner v-if="!getLoad" />
        <ul v-else>
              <!-- <transition-group class="anime" name="list-complete" tag="p"> -->
            <NoteItem class="itemN" v-for="note in notes" :key="note.id" :note="note" :isTrash="isTrash" />
            <!-- </transition-group> -->
        </ul>
        <p v-if="!notes.length&&!isTrash&&!getError">Список задач пуст. Наконец-то ты свободен.</p>
        <p v-else-if="!notes.length&&isTrash&&!getError">Корзина пуста.</p>
         <p v-if="getError">Ошибка! Не удалось загрузить данные сервера, но вы можете продолжить работать оффлайн.</p>
    </div>
</template>

<script>
import NoteItem from '@/components/NoteItem.vue'
import Spinner from '@/components/Spinner.vue'
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(['getLoad','getError']),
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

@media (max-width: 680px) {
ul>.itemN:last-child {
  margin-left:auto;
}
}

/* 
.list-complete-item {
  transition: all 3s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.list-complete-leave-active {
  position: absolute;
}
.anime {
display:flex;
flex-direction: column;
gap: 10px;
} */
</style>