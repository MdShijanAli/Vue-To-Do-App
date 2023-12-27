<template>
 <div>
   <div class="max-w-7xl mx-auto px-6 py-20">
       <div class="flex items-center justify-between mb-10">
        <h2 class="text-3xl font-semibold">Todo App</h2>
        <!-- for="toDoFormModal" -->
        <label @click="TodoModalFun"  class="px-5 py-3 bg-green-600 font-semibold text-white hover:bg-green-700 transition duraiton-500 ease-in-out">Add New</label>
       </div>
        <div v-if="todos.length>0" class="grid grid-cols-3 gap-10">
        
            <div v-for="(todo,ind) in todos" :key="todo.id">
               <Task :todo="todo" :ind="ind" @index="handleDelete"/>
           </div>
        
           
        </div>

           <div v-else class="flex h-96 items-center justify-center">
               <h1 class="bg-gray-200 text-3xl font-semibold p-5">No Todo List Available. Please Creat a Todo</h1>
           </div>


        <TaskForm :modalStatus="todoModal" @close="TodoModalFun">
                            <template #addContent>
                                <div @click="TodoModalFun" class="bg-black/40 w-full h-full z-[999] text-white text-2xl font-bold text-center absolute top-0 left-0"></div>
                                <div class="bg-[#f5f5f5] dark:bg-slate-700 absolute w-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] border shadow-xl p-5 rounded">
                                    <div class="flex justify-between items-center pb-5">
                                        <h2 class="text-2xl dark:text-white">Add New Todo</h2>
                                        <button @click="TodoModalFun" class="bg-red-600 hover:bg-red-700 w-8 h-8 flex items-center justify-center rounded-full group">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                          </svg>
                                        </button>
                                    </div>
                                    <div class="grid gap-4 dark:text-white">
                                        
                                            <div class="gap-2">
                                                <p>Title</p>
                                                <input type="hidden"  class="p-2 min-w-[300px] dark:bg-slate-800" required>
                                                <input v-model="todoData.title" type="text" class="p-2 w-full mt-2 dark:bg-slate-800">
                                            </div>
                                         
                                 
                                   
                                        <div class="grid gap-2">
                                            <p>Description</p>
                                            <textarea v-model="todoData.description"  cols="30" rows="3" class="dark:bg-slate-800"></textarea>
                                        </div>
                                 
                                        <div class="flex justify-between gap-10">
                                            <button @click="saveTodo" class="px-5 py-3 text-white bg-green-600 rounded-sm">Confirm</button>
                                            <Button @click="clearData" class="px-5 py-3 text-white bg-black rounded-sm">Clear</Button>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </TaskForm>
   </div>
</div>
</template>
<script>
import Task from './Task.vue';
import { mapState } from 'pinia';
import { useTodoStore } from '../stores/todo';
import TaskForm from './TaskForm.vue'
import { ref ,onMounted} from 'vue';
export default {
  components: { Task, TaskForm },
  name: "TaskList",

  data() {
    return {
      
      todoData: {
        title: '',
        description: '',
        status: 0
      }
    }
  },



  methods: {
    saveTodo() {
      console.log('todo data', this.todoData)  
      this.todos.unshift(this.todoData)
      this.todoModal = false
    },
    handleDelete(ind) {
      console.log(ind)
      this.todos = this.todos.filter((todo,index)=>index !== ind)
    },

    clearData() {
      this.todoData.title = '',
      this.todoData.description = ''
    }
  },


  computed: {
    ...mapState(useTodoStore, {
      todos: 'allTodos'
    })


  },


  setup() {

      const todoStore = useTodoStore();
      const todos = ref([]);

          // Fetch todos from the store after component is mounted
          onMounted(() => {
            todos.value = todoStore.allTodos;
          });





        const todoModal = ref(false);
        const TodoModalFun = () => {
            todoModal.value = !todoModal.value;
        }
        return {
            todoModal,
          TodoModalFun,
          todos
        }
    }
  


}

</script>
<style>
  
</style>