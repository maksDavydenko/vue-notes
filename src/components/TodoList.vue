<template>
    <div>
       list
    </div>
</template>

<script>

    export default {
        props: ['todos'],
        name: 'TodoList',
        methods: {
            removeTodo(id){
                this.$emit('remove-todo', id)
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

</style>
