<template>

  <li @click="changeTodoStatement" :class="{ complete: todo.completed }" :aria-disabled="isEdit">
    <input
      class="checkbox"
      type="checkbox"
      name="doneCheck"
      id="done"
      :checked="todo.completed"
      :disabled="!isEdit"
    />
    <span class="number" v-if="!todo.completed">{{ todo.order }}</span>
    <span class="check" v-if="todo.completed">&#10003;</span>
    <input
      class="title"
      :class="{ complete: todo.completed }"
      v-model="todo.title"
      :disabled="isEdit"
      ref="tit"
      @keyup.enter="editTitle"
    />
    <button class="pen" @click="editTitle">
      <img src="../assets/pen.svg" alt="" v-if="isEdit" /><span v-if="!isEdit"
        >&#10003;</span
      >
    </button>
    <button class="remove" @click="removeTodo">&times;</button>
  </li>
  
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return { isEdit: true };
  },
  props: ["todo"],
  methods: {
    ...mapMutations(["deleteTodo", "changeTodoStatementStore", "editedTodo"]),
    changeTodoStatement(event) {
      if (event.target.classList.contains("checkbox"))
        this.changeTodoStatementStore(this.todo.order);
      if (
        event.target.tagName !== "BUTTON" &&
        event.target.tagName !== "IMG" &&(
        event.target.disabled||event.target.ariaDisabled)
      )
        this.changeTodoStatementStore(this.todo);
    },
    removeTodo() {
      
      this.deleteTodo(this.todo._id);
    },
    editTitle() {
      this.isEdit = !this.isEdit;
      setInterval(()=>{
        this.$refs.tit.focus()
      },0)
        this.editedTodo(this.todo)
      
    },
  },
};
</script>


<style scoped>
li {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  border: 1px solid rgb(200, 255, 243);
  padding: 10px;
  font-size: 18px;
  align-items: center;
  border-top: none;
  border-right: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

li:hover {
  background: rgb(250, 255, 253);
}

.complete {
  background: rgb(243, 248, 247);
  color: rgb(90, 122, 117);
}

span {
  margin-right: auto;

  text-align: start;
}

button {
  background: white;
  border: 1px solid rgb(255, 126, 126);
  width: 20px;
  height: 20px;
  color: red;
  font-size: 30px;
  line-height: 13px;
  padding: 0;
  border-radius: 3px;
  text-decoration-color: rgba(255, 0, 0, 0);
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.number {
  font-size: 16px;
  font-weight: bold;
  margin-right: 0;
   padding: 0 3px;
  margin-left: 9px;
}

.check {
   margin-left: 9px;
   color: rgb(0, 189, 116);
}

button:active {
  transform: scale(1.5);
}

button:hover {
  background: red;
  color: white;
}

.pen {
  border-color: rgb(35, 158, 111);
  width: 20px;
  height: 20px;
  background: white;
  color: rgb(35, 158, 111);
  font-size: 16px;
  vertical-align: center;
  line-height: 21px;
  transition: 0.2 ease-in-out;
}

.pen:hover {
  background: rgb(4, 41, 27);
}

.pen:active {
  width: 20px;
  height: 20px;
}

input[disabled] {
  background: none;
  font-weight: 400;
  border: none;
  font-size: 18px;
  color: rgb(15, 29, 32) !important;
  opacity: 1 !important;
  -webkit-text-fill-color: #240202 !important;
  -webkit-opacity: 1 !important;
  background: none !important ;
}

.title {
  border: 1px solid rgb(191, 255, 230);
  margin-right: auto;
  font-size: 16px;
  flex-grow:1;
  font-weight: 600;
  cursor: pointer;
  padding: 4px;
  color: rgb(46, 56, 58);
}

.title:focus {
  outline: none;
  cursor: text;
}


.checkbox {
display: none;
}

@media (max-width: 410px) {
li {
gap:10px;
}

.number, .check {
  margin-left: 6px;
}
}

</style>