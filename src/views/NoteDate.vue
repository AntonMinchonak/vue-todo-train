<template>
  <form>
    <button class="back" @click.prevent="queryBack">&#8592;</button>
    <div class="date-time-flex">
      <label class="datelabel" for="date">Введите дату: </label
      ><input type="date" name="" id="date" v-model="date" />
    </div>
    <div class="date-time-flex">
      <label class="datelabel" for="time">Введите время: </label
      ><input type="time" name="" id="time" v-model="time" />
    </div>
    <input type="submit" value="Далее" @click.prevent="queryInfo" />
  </form>
</template>

<script>

export default {
  data() {
    return {
      date: this.$route.query.date || this.dateCount(),
      time: this.$route.query.time || this.timeCount(),
      link: "",
    };
  },
  methods: {
    dateCount() {
      var d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return [year, month, day].join("-");
    },
    timeCount() {
      var d = new Date();
      return d.toLocaleTimeString().substr(0, 5);
    },
    queryInfo() {
      if (this.date && this.time) {
        console.log(this.$route.query.value);
        this.$router.push({
          name: "noteImportance",
          query: {
            date: this.date,
            time: this.time,
            title: this.$route.query.value || this.$route.query.title,
            body: this.$route.query.valueNote || this.$route.query.body,
            importance: this.$route.query.importance,
          },
        });
      }
    },
    queryBack() {
      this.$router.push({
        name: "noteCreate",
        query: {
          time: this.time || this.$route.query.time,
          date: this.date || this.$route.query.date,
          title: this.$route.query.title,
          body: this.$route.query.body,
          importance: this.$route.query.importance,
        },
      });
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
}

input[type="submit"] {
  padding: 10px 15px;
  background: rgb(35, 158, 111);
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 3px;
  width: 100%;
}

input[type="submit"]:active {
  background: rgb(22, 100, 70);
}

input[type="submit"]:hover {
  cursor: pointer;
}

.back {
  margin-right: auto;
  cursor: pointer;
  margin-bottom: 20px;
}

button {
  border: 1px solid rgb(35, 158, 111);
  background: none;
  color: rgb(35, 158, 111);
  font-size: 20px;
  padding: 2px 20px 2px;
  border-radius: 3px;
  cursor: pointer;
}

input:not([type="submit"]) {
  padding: 10px;
}

.date-time-flex {
  display: flex;
  align-items: center;
  gap: 10px;
}

#date,
#time {
  flex-grow: 1;
  background: none;
  color: rgb(60, 68, 65);
  text-align: start;
  border: 1px solid rgb(169, 235, 209);
}

.datelabel {
  width: 16%;
  text-align: start;
}
</style>