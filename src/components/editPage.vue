<template>
    <div class="note-wrap">
        <div class="note-item" v-for="note in notes" :key="note.id">
            <h2 v-if="!note.editing">{{note.title}}</h2>
            <input v-else v-model="note.title">
            <div class="addTodo" v-if="note.editing">
                <h3>Добавить задачу</h3>
                <input type="text" placeholder="введите новую задачу" v-model="todoName">
                <button @click="addTodoToArr(note.id)">+</button>
            </div>
            <ul>
                <li class="todo" v-for="todo in note.todoList" :key="todo.id">
                    <div class="todo__inner">
                        <input type="checkbox" v-model="todo.completed">
                        <div :class="{completed : todo.completed}" v-if="!note.editing" @dblclick="editTodo(todo)">
                            {{todo.name}}
                        </div>
                        <input v-else type="text" v-model="todo.name">
                    </div>

                    <div class="delete" v-if="note.editing" @click="deleteTodo(note.id, todo.id)">&times;</div>
                </li>
            </ul>
            <div class="nav-buttons">
                <button v-if="!note.editing" class="btn edit" @click="editNote(note)">Изменить</button>
                <button v-else class="btn save" @click="saveNote(note)">Сохранить</button>
                <button class="btn remove" @click="popUpDel(note.id)">Удалить</button>
            </div>
        </div>
        <pop-up v-if="popUpVisible" :popUp="popUp" :notes="notes" :noteId="noteId" @closePopUp="closePopUp"></pop-up>
    </div>
</template>

<script>

    import PopUp from './PopUp';

    export default {
        components: {PopUp},
        data() {
            let dataList = JSON.parse(localStorage.getItem('notes')) === null ?
                [] : JSON.parse(localStorage.getItem('notes'));
            return {
                notes: dataList,
                noteId: null,
                popUpVisible: false,
            }
        },
        btn: true,
        name: 'editPage',

        methods: {
            addTodoToArr(note) {
                let indexNote = null;

                this.notes.forEach(i => {
                    if (i.id === note) {
                        indexNote = this.notes.indexOf(i);
                    }
                })

                this.notes[indexNote].todoList.push({
                    id: Date.now(),
                    name: this.todoName,
                    editing: false,
                    completed: false
                });
                localStorage.setItem('notes', JSON.stringify(this.notes));

            },
            editNote(note) {
                note.editing = true
                localStorage.setItem('notes', JSON.stringify(this.notes));
            },

            saveNote(note) {
                note.editing = false
                localStorage.setItem('notes', JSON.stringify(this.notes));
            },
            deleteTodo(note, todo) {
                let indexNote;
                let indexTodo;

                this.notes.forEach(i => {
                    if (i.id === note) {
                        indexNote = this.notes.indexOf(i);
                    }
                })

                this.notes[indexNote].todoList.forEach(i => {
                    if (i.id === todo) {
                        indexTodo = this.notes[indexNote].todoList.indexOf(i);
                    }
                })

                this.notes[indexNote].todoList.splice(indexTodo, 1);
            },
            popUpDel(id) {
                this.popUpVisible = true;
                this.noteId = id;

            },
            closePopUp() {
                this.popUpVisible = false
            }
        }
    }

</script>

<style scoped>

    ul {
        list-style: none;
    }

    .note-wrap {
    }

    .todo {
        display: flex;
        justify-content: space-between;
        border: 1px solid #000;
        margin-bottom: 15px;
        padding: 10px;
    }

    .edit {
        background-color: dodgerblue;
    }

    .remove {
        background-color: orangered;
    }

    .save {
        background-color: lawngreen;
    }

    .todo__inner {
        display: flex;
    }

    .note-item {
        border: 1px solid #000;
        margin-bottom: 20px;
        padding: 10px;
    }

    .nav-buttons {
        display: flex;
        justify-content: space-between;
    }

    .btn {
        padding: 10px;
        cursor: pointer;
        border: none;
        color: #fff;
    }

    .delete {
        cursor: pointer;
    }

</style>
