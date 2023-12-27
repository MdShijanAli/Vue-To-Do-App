<template>
 <div>
   <div class="max-w-7xl mx-auto px-6 py-20">
       <div class="flex items-center justify-between mb-10">
        <h2 class="text-3xl font-semibold">Todo App</h2>
        <button class="px-5 py-3 bg-green-600 font-semibold text-white hover:bg-green-700 transition duraiton-500 ease-in-out">Add New</button>
       </div>
        <div class="grid grid-cols-3 gap-10">
           <div v-for="todo in todos" :key="todo.id">
               <Task :todo="todo"/>
           </div>
        </div>

   </div>
</div>
</template>
<script>
import Task from './Task.vue';
import { mapState } from 'pinia';
import { useTodoStore } from '../stores/todo';
export default {
  components: { Task },
  name: "TaskList",

  data() {
    return {
      
    }
  },


  computed: {
    ...mapState(useTodoStore, {
      todos: 'allTodos'
    })


  },


}

</script>
<style>
  
</style>