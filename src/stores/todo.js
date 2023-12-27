import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    allTodos:[
      {
       
        title: "Todo Title 1",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 1
          },
      {
       
        title: "Todo Title 2",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 0
          },
      {
        
        title: "Todo Title 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 1
          },
      {
       
        title: "Todo Title 4",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 0
          },
      {
        
        title: "Todo Title 5",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 1
          },
      {
        
        title: "Todo Title 6",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa animi aliquam ab, hic quos quis deleniti eligendi tempora explicabo quo.",
        status: 0
          },
    ]
  }),
  
  getters: {
    todos: (state) => state.allTodos,
  },



})
