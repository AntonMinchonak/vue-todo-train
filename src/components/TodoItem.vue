<template>
    <li @click="changeTodoStatement" :class="{complete:todo.completed}">
        <input type="checkbox" name="doneCheck" id="done" :checked="todo.completed" >
        <span class="number">{{todo.order}}</span> <span>{{todo.title}}</span>
        <button @click='$emit("remove-item", todo.id)'>&times;</button>
    </li>
</template>

<script>
export default {
   props: ["todo"],
   methods: {
       changeTodoStatement() {
            this.todo.completed = !this.todo.completed
            this.$emit("change-todo", this.todo.order)
       }
   }
}
</script>


<style scoped>
li {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    border: 1px solid rgb(138, 229, 217);
    padding: 10px;
    background: rgb(253, 253, 253);
    font-size: 18px;
    align-items:center;
    border-top: none;
    border-bottom: none;
    overflow:hidden;
}

.complete {
    background: rgb(243, 248, 247);
    color: rgb(90, 122, 117);
}

span {
    margin-right: auto;

}

button {
    background: white;
    border: 1px solid gray;
    width: 20px;
    height: 20px;
    color: red;
    font-size: 30px;
    line-height: 13px;
    padding: 0;
    border-radius: 3px;
    text-decoration-color: rgba(255, 0, 0, 0);
    transition: 0.3s ease-in-out;
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
</style>