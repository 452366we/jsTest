var todoList={
    template:`<ul>
      <todo-item v-for="(item,i) of names" :item="item" :i="i" :names="names" :key="i"></todo-item>
    </ul>`,
    props:["names"],
    components:{
      todoItem
    }
  }