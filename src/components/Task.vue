<template>
  <div>
    <div :class="`border p-10 ${todo && todo.status === 1 ? 'bg-gray-200' : 'bg-white'}`">
      <h1 class="text-2xl font-semibold">{{todo.title}}</h1>

      <p class="text-justify py-5 break-words">{{ todo.description }}</p>

      <div class="flex flex-col md:flex-row gap-5 md:justify-between items-center">
<div class="text-center">
  <button @click="store.updateStatus(todo.status,todo.id)" :class="`${ todo?.status === 0 ? 'bg-green-500' : 'bg-black' } px-2 py-1 rounded-sm  text-white`">Mark as {{ todo.status === 0? 'Complete' : 'Incomplete' }}</button>
</div>
      <div class="flex gap-3">
        <button @click="editTodo(todo)" class="bg-green-600 p-2 rounded-full  text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      </button>
      <button @click="deleteTodo(todo)" class="bg-red-500 p-2 rounded-full  text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
      </button>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useTodoStore } from '@/stores/todo'

export default {
  props: {
    todo:{
      type: Object,
      default: null
    },
    ind: {
      typeof: Number,
      default: null
    }
  },
  name: 'TaskVue',

  methods: {

    deleteTodo(todo) {
      this.$emit('delete', todo)
    },

    editTodo(todo) {
      this.$emit('edit', todo)
    }
  },

  setup() {
    const store = useTodoStore()

    return {
      store
    }
  }

}
</script>
<style>
  
</style>