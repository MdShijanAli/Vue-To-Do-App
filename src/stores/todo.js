import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos:[
      {
       id: 1,
        title: "Todo Title 1",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 1
          },
      {
        id: 2,
        title: "Todo Title 2",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 0
          },
      {
        id: 3,
        title: "Todo Title 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 1
          },
      {
        id: 4,
        title: "Todo Title 4",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 0
          },
      {
        id: 5,
        title: "Todo Title 5",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 1
          },
      {
        id: 6,
        title: "Todo Title 6",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 0
          },
    ]
  }),


  


  actions: {
    addTodo(todo) {
      this.todos = [
        {
          ...todo,
          id: this.todos.length > 0 ? this.todos[0].id + 1 : 1
        },
        ...this.todos
      ];
    },
     

    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId)
    },
    updateTodo(updatedTodo) {
      const index = this.todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        this.todos.splice(index, 1, { ...updatedTodo });
      }
    },
    updateStatus(todoStatus,id) {
      const updatedStatus = todoStatus === 0 ? 1 : 0;
      const index = this.todos.findIndex((todo) => todo.id === id);
  
      if (index !== -1) {
        this.todos[index].status = updatedStatus;
      }
    },

  }



})
