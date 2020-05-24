<template>
    <div>
        <h2 class="subtitle">Создать новою заметку</h2>
        <form class="form">
            <input class="addItem" type="text" placeholder="Введите заголовок заметки" v-model="title">
            <h2>Имя заметки: {{title}}</h2>
            <input class="addItem" type="text" placeholder="Введите название задачи" v-model="todoName"><button v-on:click.prevent="addToArr" class="btn" type="submit" >+</button>
            <ul class="todoList">
                <li class="todo-item" v-for="item of todos" v-bind:key="item">
                    <div class="todo-item__inner">
                        <div v-if="!item.editing" @dblclick="editTodo(item)">{{item.name}}</div>
                        <input v-else type="text" v-model="item.name" @blur="doneEdit(item)">
                        <div class="delete-btn" @click="removeTodo(item.id)">&times;</div>
                    </div>
                </li>
            </ul>
            <button class="btn submitBtn" type="submit" @click.prevent="addNote" >Добавить заметку</button>
        </form>
        <h2 class="subtitle">Список заметок:</h2>
        <Notes :notes="notes"></Notes>
    </div>

</template>

<script>
    import Notes from './Notes';
    export default {
        name: 'MainPage',
        data(){
            const dataList = JSON.parse(localStorage.getItem('notes')) === null ?
                [] : JSON.parse(localStorage.getItem('notes'));
            return {
                notes: dataList,
                todos:[],
                item: {name: ''},
                title: ''
            }
        },
        components: {
            Notes,
        },

        methods: {
            addToArr(){
                if(this.todoName.length !== 0){
                    this.todos.push({ id: Date.now(), name: this.todoName, editing: false, completed: false});
                    this.todoName = '';
                }
            },

            removeTodo(id){
                let index;
                this.todos.forEach(i => {
                    if(i.id ===id){
                        index = this.todos.indexOf(i);
                    }
                })

                this.todos.splice(index ,1);
            },

            editTodo(todo){
                todo.editing = true
            },
            doneEdit(todo){
                todo.editing = false
            },
            addNote(){
                this.notes.push({id: Date.now(), title: this.title, todoList: this.todos, editing: false});
                localStorage.setItem('notes', JSON.stringify( this.notes));
                this.todos = [];
                this.title = '';
                this.todoName = ''
            }
        }
    }
</script>

<style >
    .subtitle{
        text-align: center;
    }
    .form{
        border: 1px solid #000;
        padding: 20px;
        text-align: center;
    }
    .todo-item{
        list-style: none;
        margin: 0px auto;
        max-width: 60%;
    }

    .todo-item__inner{
        border: 1px solid #000;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        padding: 5px;
        min-width: 300px;
    }
    .delete-btn{
        padding: 0px 7px;
        margin-left: 7px;
        color: red;
        cursor: pointer;
    }
    .addItem{
        padding: 7px;

    }
    .btn{
        padding: 9px;
        background-color: dodgerblue;
        border: none;
        color: #fff;
        cursor: pointer;

    }
    .submitBtn{

        padding: 10px;
    }
</style>
