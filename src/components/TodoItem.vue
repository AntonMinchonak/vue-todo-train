<template>
    <li>
        <input type="checkbox" name="doneCheck" id="done" :checked="todo.completed" @change="todo.completed = !todo.completed">
        <span :class="{complete:todo.completed}">{{todo.title}}</span>
        <button @click='$emit("remove-item", todo.id)'>&times;</button>
    </li>
</template>

<script>
export default {
   props: ["todo"],

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