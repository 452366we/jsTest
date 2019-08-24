var routes=[
    {path:"/",component:index},
    {path:"/index",component:index},
    {path:"/details/:lid",component:details,props:true},
    {path:"/login",component:login},
    {path:"/*",component:{
        template:`<main>
        <h2>404 Not Found</h2>
        </main>`
    }}
];

var router=new VueRouter({
    routes
})