import axios from "axios";

export default {
  actions: {
    retriveNotes(ctx) {
      axios
        .get("http://127.0.0.1:3000/notes")
        // .get(`http://192.168.0.100:3000/notes` || "http://10.20.5.50:3000/notes" || "http://127.0.0.1:3000/notes")
        .then((res) => res.data)
        .then((res) => {
          let veryList = res.filter((el) => el.importance === 1);
          let midList = res.filter((el) => el.importance === 2);
          let lowList = res.filter((el) => el.importance === 3);

          function listSorter(a, b) {
            if (parseInt(b.date.replace("-", "")) !== parseInt(a.date.replace("-", ""))) {
              return parseInt(b.date.replace("-", "")) - parseInt(a.date.replace("-", ""));
            } else if (parseInt(b.time.replace(":", "")) !== parseInt(a.time.replace(":", ""))) {
              return parseInt(b.time.replace(":", "")) - parseInt(a.time.replace(":", ""));
            } else {
              return b.id - a.id;
            }
          }
          veryList.sort(listSorter);
          midList.sort(listSorter);
          lowList.sort(listSorter);

          const notes = [...veryList, ...midList, ...lowList];
          ctx.commit("updateNotes", notes);
          ctx.commit("changeLoadState");
        })
        .catch((err) => {
          console.log("iuh" + err);
          ctx.commit("changeLoadState");
          ctx.commit("updateIsErrorNote");
        })
        .finally(() => {
          ctx.commit("changeLoadState");
        });
    },
  },
  mutations: {
    addNote(state, content) {
      state.newNote = content;
      let veryList = state.notes.filter((el) => el.importance === 1);
      let midList = state.notes.filter((el) => el.importance === 2);
      let lowList = state.notes.filter((el) => el.importance === 3);
      if (state.newNote.importance === 1) veryList.unshift(state.newNote);
      if (state.newNote.importance === 2) midList.unshift(state.newNote);
      if (state.newNote.importance === 3) lowList.unshift(state.newNote);
      state.notes = [...veryList, ...midList, ...lowList];
      axios.post("http://127.0.0.1:3000/notes", state.newNote);
      state.newNote = {};
    },
    deleteNoteFinall(state, note) {
      state.notes = state.notes.filter((el) => el._id != note._id);
      axios.delete(`http://127.0.0.1:3000/notes/${note._id}`);
    },
    deleteNote(state, note) {
      axios.put(`http://127.0.0.1:3000/notes/${note._id}`, note);
    },
    editNotes(state, note) {
      for (let i = 0; i < state.notes; i++) {
        if (note.id === state.notes[i].id) {
          state.notes[i].title = note.title;
          state.notes[i].body = note.body;
        }
      }
      axios.put(`http://127.0.0.1:3000/notes/${note._id}`, note);
    },
    filterNotes(state, filter) {
      state.filterNote = filter;
    },
    sortNotes(state, sort) {
      let veryList = state.notes.filter((el) => el.importance === 1);
      let midList = state.notes.filter((el) => el.importance === 2);
      let lowList = state.notes.filter((el) => el.importance === 3);
        function listSorter(a, b) {
          if (parseInt(b.date.replace("-", "")) !== parseInt(a.date.replace("-", ""))) {
            return parseInt(b.date.replace("-", "")) - parseInt(a.date.replace("-", ""));
          }
          return parseInt(b.time.replace(":", "")) - parseInt(a.time.replace(":", ""));
        }

      if (sort === "dateTime") {
         veryList.sort(listSorter);
         midList.sort(listSorter);
         lowList.sort(listSorter);
      } else {
        veryList.sort((a, b) => {
          return b.id - a.id;
        });
        midList.sort((a, b) => {
          return b.id - a.id;
        });
        lowList.sort((a, b) => {
          return b.id - a.id;
        });
      }
      state.notes = [...veryList, ...midList, ...lowList];
    },
    changeLoadState(state) {
      state.isLoadedNotes = true;
    },
    updateIsErrorNote(state) {
      state.isErrorNote = true;
    },
    updateNotes(state, content) {
      state.notes = content;
      state.filterNote = "All";
    },
    removeAll(state) {
      for (let i = 0; i < state.notes.length; i++) {
        if (state.notes[i].isDeleted) {
          axios.delete(`http://127.0.0.1:3000/notes/${state.notes[i]._id}`);
        }
      }
      state.notes = state.notes.filter((el) => !el.isDeleted);
    },
    changeImportance(state, note) {
      for (let i = 0; i < state.notes.length; i++) {
        if (state.notes[i].id === note.id) {
          state.notes[i].importance === 3 ? (state.notes[i].importance = 1) : state.notes[i].importance++;
        }
      }
      axios.put(`http://127.0.0.1:3000/notes/${note._id}`, note);
    },
    changePosition(state, note) {
      for (let i = 0; i < state.notes.length; i++) {
        if (state.notes[i].id === note.id) {
          let spliced = state.notes.splice(i, 1)[0];
          let veryList = state.notes.filter((el) => el.importance === 1);
          let midList = state.notes.filter((el) => el.importance === 2);
          let lowList = state.notes.filter((el) => el.importance === 3);
          if (spliced.importance === 1) veryList.unshift(spliced);
          if (spliced.importance === 2) midList.unshift(spliced);
          if (spliced.importance === 3) lowList.unshift(spliced);
          state.notes = [...veryList, ...midList, ...lowList];
        }
      }
    },
  },
  state: {
    notes: [],
    newNote: {},
    filterNote: "All",
    sortNote: "dateTime",
    isLoadedNotes: false,
    isErrorNote: false,
  },
  getters: {
    allNotes(state) {
      let notDeleted = state.notes.filter((el) => !el.isDeleted);
      switch (state.filterNote) {
        case "All":
          return notDeleted;
        case "Very":
          return notDeleted.filter((el) => el.importance === 1);
        case "Medium":
          return notDeleted.filter((el) => el.importance === 2);
        case "Low":
          return notDeleted.filter((el) => el.importance === 3);
        default:
          return notDeleted.filter((el) => !el.isDeleted);
      }
    },
    allDeletedNotes(state) {
      return state.notes.filter((el) => el.isDeleted);
    },
  },
};
