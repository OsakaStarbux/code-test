<template>
  <div class="container">
    <!-- input -->
      <b-input-group prepend="Todo" class="mt-3">
    <b-form-input v-model="txtInput"></b-form-input>
    <b-input-group-append>
      <b-button @click="writeToFirestore" variant="outline-success">Add</b-button>
    </b-input-group-append>
  </b-input-group>
  <!-- list -->
  <b-list-group v-for="todo in todos" v-bind:key="todo.id">
  <b-list-group-item>{{ todo.todo_text }}</b-list-group-item>
  </b-list-group>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase.js"
import { collection, onSnapshot,doc, addDoc, setDoc, getDoc } from 'firebase/firestore'
export default {
  data(){
    return {
      txtInput: "",
      todos: []
    }
    
  },
  created(){
    this.getTodos()
  },
  methods: {
    async writeToFirestore() {
      console.log("writing to firestore", this.txtInput)
      const ref = collection(db, "todos")
      const document = {
        todo_text: this.txtInput,
      };
    try {
        const docRef = await addDoc(ref, document)
        console.log("Document written with ID: ", docRef.id)
        alert("Success!")
    } catch (e) {
        alert("Error!")
        console.error(e)
      }
    },
     async getTodos() {
      
      // register realtime listener for changes on document
      onSnapshot(
  collection(db, "todos"), 
  (snapshot) => {
    // ...
    this.todos = []
    this.txtInput = ""
    snapshot.forEach((doc) => {
    this.todos.push(doc.data())
    console.log(doc.id, " => ", doc.data());
});
  },
  (error) => {
    // ...
    console.log(error)
  });

    },
  },
}
</script>
