<template>
    <form>
        <input type="text" name="" id="" v-model="value" placeholder="Дело...">
        <input type="submit" value="Создать" @click='$emit("add-item", value)'>
    </form>
</template>

<script>
export default {
    data() {
return {
    value:''
}
}
}
</script>



<style scoped>
div {
    display: flex;
}
</style>