import axios from 'axios'

export default {
  actions: {
    retriveNotes(ctx) {
      axios
        .get("http://127.0.0.1:3000/notes")
        .then((res) => res.data)
        .then((res) => {
          let veryList = res.filter(el => el.importance === 1)
          let midList = res.filter((el) => el.importance === 2);
          let lowList = res.filter((el) => el.importance === 3);
          const notes = [...veryList,...midList,...lowList];
          console.log(res)
          ctx.commit("updateNotes", notes);
        
            ctx.commit("changeLoadState");
       
        });
    },
  },
  mutations: {
    addNote(state, content) {
      state.newNote = content
      state.notes.push(state.newNote);
      console.log('add' + content)
      console.log("add" + state.notes);
       axios.post("http://127.0.0.1:3000/notes", state.newNote);
      state.newNote = {};
    },
    deleteNote(state, note) {
      state.notes = state.notes.filter(el => el._id != note._id)
       axios.delete(`http://127.0.0.1:3000/notes/${note._id}`);
    },
    editNotes(state, note) {
      for (let i = 0; i < state.notes; i++) {
        if (note._id === state.notes[i]._id) {
          state.notes[i].title = note.title
          state.notes[i].body = note.body;
        }
      }
      axios.put(`http://127.0.0.1:3000/notes/${note._id}`, note);
    },
    filterNotes(state, filter) {
      state.filterNote = filter
    },
      changeLoadState(state) {
        state.isLoadedNotes = true
    },
    updateNotes(state, content) {
        state.notes = content
      }
  },
  state: {
    notes: [],
    newNote: {},
    filterNote: 'All',
    isLoadedNotes: false
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
