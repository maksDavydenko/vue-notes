<template>
    <li v-on:click="$emit('edit-todo', todo.id)">
    <span v-bind:class="{done: todo.completed}"><input  v-on:change="todo.completed = !todo.completed" type="checkbox">
    <strong>{{todo.title}}</strong>
    </span>
    <button v-on:click="$emit('remove-todo', todo.id)" class="remove">&times;</button>
   </li>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                require: true
            }
        },
    }
</script>

<style scoped>
    li{
        border: 1px solid #ccc;
        display: flex;
    }

    .remove{
        background-color: red;
        color: #fff;
        border-radius: 50%;
        border: none;
        cursor: pointer;
    }
    input{
        margin-right: 10px;
    }

    .done{
        text-decoration: line-through;
    }

</style>
