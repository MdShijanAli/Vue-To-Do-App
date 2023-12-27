<template>
  <div >


<input type="checkbox" :id="modal" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box rounded-sm p-10">

  <h2 class="text-center text-3xl font-semibold mb-5">Todo From</h2>

    <form @submit.prevent="handleSubmit">

      <div>
        <label for="title">Title</label>
      <input class="px-5 py-2 block my-2 w-full border " type="text" placeholder="Enter Todo Title" v-model="todoData.title">
      </div>
      <div class="mt-5">
        <label for="title">Description</label>
      <textarea class="px-5 py-2 block my-2 w-full border " type="text" placeholder="Enter Todo Title" v-model="todoData.description" rows="5"></textarea>
       </div>

       
        <div class="modal-action flex items-center justify-end gap-3 mt-5">
          <label :for="modal" class="btn px-5 py-3 text-white bg-black hover:bg-black rounded-sm">Cancel</label>
          <button type="submit" class="px-5 py-3 text-white bg-green-600 rounded-sm">Add</button>
        </div>

    </form>
  </div>
  <label class="modal-backdrop" :for="modal">Close</label>
</div>
  </div>
</template>
<script>
export default {
  props: {
    modal: {
      type: String,
      default: null
    }
  },
  name: "TaskForm",

  data() {
    return {
      todoData: {
        title: ""
      }
    }
  },

  methods: {
    handleSubmit() {
      this.$emit('todoData', this.todoData)
    }
  }
}
</script>
<style>
  
</style>