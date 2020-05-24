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
<!--        <div class="popUp" v-show="popUp">-->
<!--            <p>Вы дествительно хотите удалить заметку?</p>-->
<!--            <button @click="removeNote()" class="popUp__btn">Да</button>-->
<!--            <button @click="reset" class="popUp__btn">Нет</button>-->
<!--        </div>-->
        <pop-up v-if="popUpVisible" :popUp="popUp" :notes="notes" :noteId="noteId" @closePopUp="closePopUp" ></pop-up>
    </div>

</template>

<script>
    import PopUp from './PopUp';
    export default {
        components: {PopUp},
        props: {
        notes: {
            require: true
        }
    },
        data() {
            return {
                noteId: null,
                popUpVisible: false,
            }
        },

        methods: {
            popUpDel(id){
                this.popUpVisible = true
                this.noteId = id;
            },
    closePopUp(){
        this.popUpVisible = false
    }
        //     removeNote() {
        //         let index;
        //         this.notes.forEach(i => {
        //             if (i.id === this.noteId) {
        //                 index = this.notes.indexOf(i);
        //             }
        //         })
        //         this.notes.splice(index, 1);
        //         localStorage.setItem('notes', JSON.stringify(this.notes));
        //         this.popUp = false
        //
        //     },
        //     reset(){
        //         this.popUp = false
        //     }
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

</style>
