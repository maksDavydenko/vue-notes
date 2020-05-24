<template>
    <div>
    <ul>
        <li class="note-block" v-for="note in notes" v-bind:key="note">
            <h2>{{note.title}}</h2>
            <ul><li v-for="todo in note.todoList.slice(0, 2)" :key="todo.id">
                {{todo.name}}
            </li></ul>
            <div @click="popUpDel(note.id)" class="delete">Удалить</div>
        </li>
    </ul>
        <div class="popUp" v-show="popUp">
            <p>Вы дествительно хотите удалить заметку?</p>
            <button @click="removeNote()" class="popUp__btn">Да</button>
            <button @click="reset" class="popUp__btn">Нет</button>
        </div>
    </div>

</template>

<script>
    export default {
    props: {
        notes: {
            require: true
        }
    },
        data() {
            return {
                // notes: JSON.parse(localStorage.getItem('notes')) === null ?
                //     [] : JSON.parse(localStorage.getItem('notes')),
                popUp: false,
                noteId: null,
            }
        },

        methods: {
            popUpDel(id){
                this.popUp = true
                this.noteId = id;
            },
            removeNote() {
                let index;
                this.notes.forEach(i => {
                    if (i.id === this.noteId) {
                        index = this.notes.indexOf(i);
                    }
                })
                this.notes.splice(index, 1);
                localStorage.setItem('notes', JSON.stringify(this.notes));
                this.popUp = false

            },
            reset(){
                this.popUp = false
            }
        }
    }

</script>

<style scoped>
    ul{
        list-style: none;
    }
    h2{
        margin-top: 0;
    }

    .note-block{
        position: relative;
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #000;
    }
    .delete{
        position: absolute;
        bottom: 10px;
        right: 10px;
        padding: 10px;
        background-color: orangered;
        color: #fff;
        cursor: pointer;
    }
    .popUp{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
        z-index: 999;
        border: 1px solid #000;
        padding: 40px;
        text-align: center;
        border-radius: 30px;
        background-color: #fff;
    }
    .popUp__btn{
        padding: 10px 20px;
        margin: 10px;
        cursor: pointer;
    }

</style>
