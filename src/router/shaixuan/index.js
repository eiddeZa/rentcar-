export default{
    path:'/shaixuan',component:()=>import('@/views/shaixuan'),children:[
        {path:'/ssum',component:()=>import('@/views/ssum')},
        {path:'/',component:()=>import('@/views/ssum')},
    ]
    
}