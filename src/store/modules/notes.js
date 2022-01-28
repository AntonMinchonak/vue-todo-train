import axios from "axios";


export default {
  actions: {
    retriveNotes(ctx) {
      axios
        .get("http://10.20.5.50:3000/notes" || "http://127.0.0.1:3000/notes")
        .then((res) => res.data)
        .then((res) => {
          let veryList = res.filter((el) => el.importance === 1);
          let midList = res.filter((el) => el.importance === 2);
          let lowList = res.filter((el) => el.importance === 3);
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
      axios.post("http://10.20.5.50:3000/notes" || "http://127.0.0.1:3000/notes", state.newNote);
      state.newNote = {};
    },
    deleteNoteFinall(state, note) {
      state.notes = state.notes.filter((el) => el._id != note._id);
      axios.delete(`http://10.20.5.50:3000/notes/${note._id}` || `http://127.0.0.1:3000/notes/${note._id}`);
    },
    deleteNote(state, note) {
      axios.put(`http://10.20.5.50:3000/notes/${note._id}` || `http://127.0.0.1:3000/notes/${note._id}`, note);
    },
    editNotes(state, note) {
      if (!state.isErrorNote) {
        for (let i = 0; i < state.notes; i++) {
          if (note._id === state.notes[i]._id) {
            state.notes[i].title = note.title;
            state.notes[i].body = note.body;
          }
        }
      } else {
         for (let i = 0; i < state.notes; i++) {
           if (note.id === state.notes[i].id) {
             state.notes[i].title = note.title;
             state.notes[i].body = note.body;
           }
         }
      }
      axios.put(`http://10.20.5.50:3000/notes/${note._id}` || `http://127.0.0.1:3000/notes/${note._id}`, note);
    },
    filterNotes(state, filter) {
      state.filterNote = filter;
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
          axios.delete(`http://10.20.5.50:3000/notes/${state.notes[i]._id}` || `http://127.0.0.1:3000/notes/${state.notes[i]._id}`);
        }
      }
      state.notes = state.notes.filter((el) => !el.isDeleted);
    },
    changeImportance(state, note) {
        console.log(note + "stato");
      if (!state.isErrorNote) {
           console.log(this.isErrorNote + "noerrro");
        for (let i = 0; i < state.notes.length; i++) {
          if (state.notes[i]._id === note._id) {
            state.notes[i].importance === 3 ? (state.notes[i].importance = 1) : state.notes[i].importance++;
          }
        }
      } else {
        console.log(note + "errro");
          for (let i = 0; i < state.notes.length; i++) {
            if (state.notes[i].id === note.id) {
              state.notes[i].importance === 3 ? (state.notes[i].importance = 1) : state.notes[i].importance++;
            }
          } 
      }
    },
    changePosition(state, note) {
      console.log(note + "noerr");
      if (!state.isErrorNote) {
        for (let i = 0; i < state.notes.length; i++) {
          if (state.notes[i]._id === note._id) {
             console.log(note + "noerr");
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
      } else {
           for (let i = 0; i < state.notes.length; i++) {
             if (state.notes[i].id === note.id) {
               console.log(note+'errro')
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
      }
      // for (let i = 0; i < state.notes.length; i++) {
      //   if (state.notes[i]._id === note._id) {
      //     let spliced = state.notes.splice(i, 1)[0]
      //     if (spliced.importance === 1) state.notes.unshift(spliced)
      //     for (let impNum = 2; impNum < 4; impNum++) {
      //     console.log(spliced);
      //     if (spliced.importance === impNum) {
      //       let index = state.notes.findIndex((el) => el.importance === impNum);
      //       if (index !== -1) {
      //         state.notes.splice(index, 0, spliced);
      //       } else {
      //         if (state.notes.length === 0) state.notes.unshift(spliced);
      //         if (impNum === 3) state.notes.push(spliced)
      //         if (impNum === 2) {
      //           if (state.notes.findIndex((el) => el.importance === 1) > -1) {
      //             console.log('state.note[j].importance');
      //           for (let j = 0; j < state.notes.length; j++) {
      //             console.log(state.notes[j].importance);
      //             if (state.notes[j].importance !== 1) {
      //               state.notes.splice(j, 0, spliced);
      //               break
      //             }
      //           }
      //           } else {
      //             state.notes.unshift(spliced);
      //         }
      //       }
      //       }
      //     }
      //     }
      //   }
      // }
    },
  },
  state: {
    notes: [],
    newNote: {},
    filterNote: "All",
    isLoadedNotes: false,
    isErrorNote:false
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
