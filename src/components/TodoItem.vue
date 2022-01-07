<template>
    <li>
        <input type="checkbox" name="doneCheck" id="done" :checked="todo.completed" @change="changeTodoStatement">
        <span :class="{complete:todo.completed}">{{todo.order}}. {{todo.title}}</span>
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
    justify-content: center;
}
.complete {
    text-decoration: line-through;
}
</style>