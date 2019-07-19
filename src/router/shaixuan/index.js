export default{
    path:'/shaixuan',component:()=>import('@/views/shaixuan'),children:[
        {path:'/ssum',component:()=>import('@/views/ssum')},
        {path:'/jingji',component:()=>import('@/views/jingji')},
        {path:'/haohua',component:()=>import('@/views/haohua')},
        {path:'/shangwu',component:()=>import('@/views/shangwu')},
        {path:'/',component:()=>import('@/views/ssum')},
    ]
    
}