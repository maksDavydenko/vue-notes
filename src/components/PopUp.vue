<template>
    <div class="popUp" v-show="popUp">
        <p>Вы дествительно хотите удалить заметку?</p>
        <button @click="removeNote()" class="popUp__btn">Да</button>
        <button @click="reset" class="popUp__btn">Нет</button>
    </div>
</template>

<script>
    export default {
        name: 'PopUp',
        popUp: false,
        noteId: null,
        notes: JSON.parse(localStorage.getItem('notes')) === null ?
            [] : JSON.parse(localStorage.getItem('notes')),
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
