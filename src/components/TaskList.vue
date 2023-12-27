<template>
 <div>
   <div class="max-w-7xl mx-auto px-6 py-20">
       <div class="flex items-center justify-between mb-10">
        <h2 class="text-3xl font-semibold">Todo App</h2>
        <label for="toDoFormModal" class="px-5 py-3 bg-green-600 font-semibold text-white hover:bg-green-700 transition duraiton-500 ease-in-out">Add New</label>
       </div>
        <div class="grid grid-cols-3 gap-10">
           <div v-for="todo in todos" :key="todo.id">
               <Task :todo="todo"/>
           </div>
        </div>


        <TaskForm modal="toDoFormModal" @todoData="handleTodoData"/>
   </div>
</div>
</template>
<script>
import Task from './Task.vue';
import { mapState } from 'pinia';
import { useTodoStore } from '../stores/todo';
import TaskForm from './TaskForm.vue'
export default {
  components: { Task,TaskForm },
  name: "TaskList",

  data() {
    return {
     
    }
  },

  methods: {
    handleTodoData(todoData) {
      // Handle the emitted todoData here
      console.log('Received todoData:', todoData);
      this.todos.push(todoData)
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