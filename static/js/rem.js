export default{
    setrem(){
       var windoww=document.documentElement.clientWidth||document.body.body.clientWidth;
        var uiw=750;
        document.documentElement.style.fontSize=(windoww/uiw)*100+'px'
    }
}
