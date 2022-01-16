<template>
  <li>
    <input class="title" v-model="note.title" disabled />
    <textarea @input="resize" ref="area"  :rows="note.body.length/23" class="body" v-model="note.body" disabled />
    <div class="timedate">
      <div >{{note.date}}</div>
      <div >{{note.time}}</div>
    </div>
    <!-- <button class="pen" @click="editTitle">
      <img src="../assets/pen.svg" alt="" v-if="isEdit" /><span v-if="!isEdit">&#10003;</span>
    </button>
    <button class="remove" @click="removeTodo">&times;</button> -->
  </li>
</template>

<script>

export default {
  // data() {
  //   return {
      
  //   }
  // }
  props: ["note"],

  methods: {
    resize() {
      this.$refs.area.rows=1
    }
  },
  mounted: {
    res() {
      this.$refs.area.style.height="100px"
    }
  }
}
</script>


<style scoped>
li {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 369px;
  border: 1px solid rgb(200, 255, 243);
  padding: 10px;
  font-size: 18px;
  border-top: none;
  border-right: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

textarea:disabled {
border:none;
border-radius: 3px; 
vertical-align: top;
resize: none;
font-family: sans-serif;
font-size: 18px;
background: none;
overflow: hidden;
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
  width: 20px;
  height: 20px;
  color: red;
  font-size: 30px;
  line-height: 13px;
  padding: 0;
  border-radius: 3px;
  text-decoration-color: rgba(255, 0, 0, 0);
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.number {
  font-size: 16px;
  font-weight: bold;
  margin-right: 0;
}

button:active {
  width: 30px;
  height: 30px;
}

button:hover {
  background: red;
  color: white;
}

.pen {
  border-color: rgb(35, 158, 111);
  width: 20px;
  height: 20px;
  background: white;
  color: rgb(35, 158, 111);
  font-size: 16px;
  vertical-align: center;
  line-height: 21px;
  transition: 0.2 ease-in-out;
}

.pen:hover {
  background: rgb(4, 41, 27);
}

.pen:active {
  width: 20px;
  height: 20px;
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
  cursor: pointer;
  padding: 4px;
  color: rgb(46, 56, 58);
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


</style>