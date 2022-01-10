<template>
    <li @click="changeTodoStatement" :class="{complete:todo.completed}">
        <input type="checkbox" name="doneCheck" id="done" :checked="todo.completed" >
        <span class="number">{{todo.order}}</span> <span>{{todo.title}}</span>
        <button @click="removeTodo">&times;</button>
    </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
   props: ["todo"],
   methods: {
       ...mapMutations(['deleteTodo', 'changeTodoStatementStore']),
       changeTodoStatement(event) {
            if(event.target.tagName!=='BUTTON') this.changeTodoStatementStore(this.todo.order)
       },
       removeTodo() {
           this.deleteTodo(this.todo.id)
       }
   }
}
</script>


<style scoped>
li {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    border: 1px solid rgb(200, 255, 243);
    padding: 10px;
    font-size: 18px;
    align-items:center;
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
       overflow: hidden;
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
}

button:active {
    width: 30px;
    height: 30px;
   
}

button:hover {
   background: red;
    color: white;
    border: none;
}

</style>