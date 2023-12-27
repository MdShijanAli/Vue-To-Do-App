<template>
  <div>
    <div :class="`border p-10 ${todo && todo.status === 0 ? 'bg-gray-200' : 'bg-white'}`">
      <h1 class="text-2xl font-semibold">{{todo.title}}</h1>

      <p class="text-justify py-5">{{ todo.description }}</p>

      <div class="flex gap-2 items-center">
        <button @click="toggleStatus" :class="`${ todo?.status === 0 ? 'bg-green-500' : 'bg-black' } px-2 py-1 rounded-sm  text-white`">Mark as {{ todo.status === 1? 'Complete' : 'Incomplete' }}</button>
      <button @click="toggleStatus" class="bg-green-600 px-2 py-1 rounded-sm  text-white">Edit</button>
      <button @click="toggleStatus" class="bg-red-500 px-2 py-1 rounded-sm  text-white">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todo:{
      type: Object,
      default: null
     }
  },
  name: 'TaskVue',

  methods: {
    toggleStatus() {
      if (this.todo) {
        this.todo.status = this.todo.status === 1 ? 0 : 1;
      }
    }
   }

}
</script>
<style>
  
</style>