<template>
 <div>
   <div class="max-w-7xl mx-auto px-6 py-20">
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