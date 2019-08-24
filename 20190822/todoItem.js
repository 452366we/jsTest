var todoItem={
    template:`<li>
      {{i+1}} - {{item}} <button @click="del">x</button>
    </li>`,
    props:['i','item','names'],
    methods:{
      del(){
        this.names.splice(this.i,1);
      }
    }
  }