<template>
  <li>
    <div class="title-wrap">
    <textarea class="title" v-model="note.title" :disabled="isEdit" :cols="note.title.length<32 ? 17:note.title.length" :rows="rowCalculate" ref="tit" /> 
     <button class="pen" @click="editNote">
      <img src="../assets/pen.svg" alt="" v-if="isEdit" /><span v-if="!isEdit">&#10003;</span>
    </button>
    <button class="remove" @click="removeNote">&times;</button>
    <p class="imp" :class="[imp1, imp2, imp3]">{{impMessage}}</p>
    </div>
    <div class="line"></div>
    <textarea ref="area"  :rows="note.body.length/32" class="body" v-model="note.body" :disabled="isEdit" />
    <div class="timedate">
      <div >{{note.date}}</div>
      <div >{{note.time}}</div>
    </div>
  </li>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      isEdit:true
    }
  },
  computed: {
    impMessage() {
      switch (this.note.importance) {
        case 1: return "Очень важно"
        case 2: return "Средневажно"
        case 3: return "Маловажно"
        default:return "Средневажно"
      }
    },
    rowCalculate() {
      switch (true) {
        case (this.note.title.length<20): return 1
        case (this.note.title.length>=20&&this.note.title.length<60): return 2
        case (this.note.title.length>=60&&this.note.title.length<120): return this.note.title.length/25
        case (this.note.title.length>=120): return this.note.title.length/33
        default: return 1
      }
    },
    imp1() {
      if ( this.note.importance === 1) {
        return "imp1"
      } else {return false}
      // this.note.importance === 1 ? 'imp1' : "",
    },
     imp2() {
       if ( this.note.importance === 2) {
        return "imp2"
       } else {return false}
    },
     imp3() {
    if ( this.note.importance === 3) {
        return "imp3"
      } else {return false}
    },
  },
  props: ["note"],

  methods: {
   ...mapMutations(['deleteNote', 'editNotes']),
    removeNote() {
      this.deleteNote(this.note)
    },
    editNote() {
      this.isEdit=!this.isEdit
      this.editNotes(this.note)
      setTimeout(()=> {
           this.$refs.tit.focus()
      },0)
    }
  },
}
</script>


<style scoped>
li {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 369px;
  border: 1px solid rgb(161, 223, 209);
  padding: 10px;
  font-size: 18px;
  border-top: none;
  border-right: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.line {
  height: 1px;
  width: 44%;
  background: rgb(211, 241, 232);
  margin-left: -11px;
}

textarea {
  resize: none;
    border: 1px solid rgb(191, 255, 230);
 border-radius: 3px;
  font-size: 16px;
  flex-grow: 1;
  cursor: pointer;
  padding: 4px;
  color: rgb(46, 56, 58);
  font-family: sans-serif;
}

textarea:disabled {
border:none;
border-radius: 3px; 
vertical-align: top;
resize: none;
font-size: 18px;
background: none;
overflow: hidden;
}

textarea:focus {
  outline: none;
  cursor: text;
}

li:hover {
  background: rgb(250, 255, 253);
}

.complete {
  background: rgb(243, 248, 247);
  color: rgb(90, 122, 117);
}

span {
  margin-right: auto;
  overflow: hidden;
  text-align: start;
}

button {
  background: white;
  border: 1px solid rgb(255, 126, 126);
  width: 15px;
  height: 15px;
  color: red;
  font-size: 21px;
  line-height: 13px;
  padding: 0;
  border-radius: 3px;
  text-decoration-color: rgba(255, 0, 0, 0);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  display: none;
}

li:hover button {
display: block;
}

.number {
  font-size: 16px;
  font-weight: bold;
  margin-right: 0;
}

button:active {
  transform: scale(1.3);
}

button:hover {
  background: red;
  color: white;
}

.pen {
  border-color: rgb(35, 158, 111);
  background: white;
  color: rgb(35, 158, 111);
  font-size: 14px;
  vertical-align: center;
  line-height: 15px;
  transition: 0.2 ease-in-out;
  margin-right:4px; 
  margin-left: 3px; 
}

.pen>img {
  width: 10px;
  height: 10px;
}

.pen:hover {
  background: rgb(4, 41, 27);
}

input[disabled] {
  background: none;
  font-weight: 400;
  border: none;
  font-size: 18px;
  color: rgb(15, 29, 32);
}

.title {
  border: 1px solid rgb(191, 255, 230);
  margin-right: auto;
  font-size: 16px;
  font-weight: 600;
  /* flex-grow: 1; */
  cursor: pointer;
  padding: 4px;
  color: rgb(46, 56, 58);
  vertical-align: middle;
  min-height:20px;
  /* width: 200px; */
}

.title:disabled {
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
}

.title:focus {
  outline: none;
  cursor: text;
}

.number {
  padding: 0 3px;
}

.timedate {
  margin-top: auto;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  color: rgb(140, 165, 159);
}

.title-wrap {
  display: flex;
  align-items: center;
  gap:0px;
  flex-wrap: wrap;
}

p {
  font-size: 14px;
}

.imp {
width: 100px;
padding: 0 1px;
border: 1px solid black;
border-radius: 10px;
margin-left: 6px;
}


.imp1 {
  color:rgb(211, 49, 49);
  border-color:rgb(211, 49, 49); 
}

.imp2 {
  color:rgb(168, 168, 24);
   border-color:rgb(168, 168, 24); 
}

.imp3 {
  color:rgb(51, 134, 100);
  border-color:rgb(51, 134, 100); 
}


</style>