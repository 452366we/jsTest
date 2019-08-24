var todoAdd={
    template:`<div>
      <input v-model="item"><button @click="add">+</button>
    </div>`,
    data:function(){
      return {
        item:''
      }
    },
    props:['names'],
    methods:{
      add:function(){
        this.names.push(this.item);
        this.item=""
      }
    }
  }