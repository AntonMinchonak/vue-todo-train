// import axios from 'axios'

export default {
  actions: {
    // retriveTNotes(ctx) {
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/posts?_limit=11")
    //     .then((res) => res.data)
    //     .then((res) => {
    //       let completedList = res.filter((el) => el.completed);
    //       let uncompletedList = res.filter((el) => !el.completed);
    //       //   uncompletedList= uncompletedList.concat(completedList);
    //       let preTodos = [...uncompletedList, ...completedList];
    //       //   for (let i = 0; i < preTodos.length; i++) {
    //       //     preTodos[i].order=i+1;
    //       //   }
    //       preTodos.forEach((el, index) => {
    //         preTodos[index].order = index + 1;
    //       });
    //       const notes = [...uncompletedList, ...completedList];
    //       ctx.commit("updateNotes", notes);
    //       setTimeout(() => {
    //         ctx.commit("updateIsLoaded");
    //       }, 1000);
    //     });
    // },
    newNote({ commit }, content) {
      commit("addNote", content);
    }
  },
  mutations: {
    // updateNotes(state, notes) {
    //   state.notes = notes;
    // },
    // newNoteCreate(state, content) {
    //   state.newNote.title = content.title;
    //   state.newNote.body = content.body;
    // },
    // newNoteDate(state, content) {
    //   state.newNote.date = content.date;
    //   state.newNote.time = content.time;
    // },
    // newNoteImportance(state, content) {
    //   state.newNote.importance = content.importance;
    //   state.notes.push(state.newNote);
    //   state.newNote = {};
    // },
    addNote(state, content) {
      state.newNote = content
      state.notes.push(state.newNote);
      state.newNote = {};
    },
    deleteNote(state, note) {
      state.notes = state.notes.filter(el => el.id!=note.id)
    },
    editNotes(state, note) {
      for (let i = 0; i < state.notes; i++) {
        if (note.id === state.notes[i].id) {
          state.notes[i].title = note.title
          state.notes[i].body = note.body;
        }
      }
    },
    filterNotes(state, filter) {
      state.filterNote = filter
    }
  },
  state: {
    notes: [
      {
        title: "Allah",
        body: "Я пожилой рэпер",
        order: 1,
        id: 0,
        date: "22.05.1996",
        time: "03:22",
        importance: 1,
      },
      {
        title: "Anime",
        body: "Я пожилой крипер на пудже на миде на спидах на войне под спайсом ",
        order: 2,
        id: 1,
        date: "25.05.1996",
        time: "02:28",
        importance: 2,
      },
      {
        title: "Anime anime chto? da",
        body: "Я пожилой крипер на пудже на миде на спидах на войне под спайсом ааааааа да я адяа дад да дед старый аа ываы ваыва ыва ыва ыва ",
        order: 3,
        id: 2,
        date: "11.05.1996",
        time: "02:38",
        importance: 3,
      },
    ],
    newNote: {},
    filterNote: 'All'
  },
  getters: {
    allNotes(state) {
          switch (state.filterNote) {
            case "All":
              return state.notes;
            case "Very":
              return state.notes.filter((el) => el.importance===1);
            case "Medium":
              return state.notes.filter((el) => el.importance === 2);
            case "Low":
              return state.notes.filter((el) => el.importance === 3);
            default:
              return state.notes;
          }
    },
  },
};
