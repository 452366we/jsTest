Vue.component("todo",{
    template:`<div>
      <h1>待办事项列表</h1>
      <todo-add :names="names"></todo-add>
      <todo-list :names="names"></todo-list>
    </div>`,
    data:function(){
      return {names:['vue','angular','react']}
    },
    components:{
      todoAdd, todoList
    }
  })