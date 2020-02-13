var content='   w w w . i t e e d u . c o m'
var length=content.length
var posx=new Array(length)
var posy=new Array(length)
var step=10
var curx=0,cury=0
for(i=0;i<length;i++){
    document.write('<div id=pt'+i+' style="position:absolute;top:0;font-size:24px">'+content.charAt(i)+'</div>')
    posx[i]=i*step;posy[i]=0;
}
function follow(){
    posx.unshift(curx);posx.pop();
    posy.unshift(cury);posy.pop();
    for(i=0;i<length;i++){
        var pt=document.getElementById('pt'+i)
         pt.style.top=posy[i];pt.style.left=posx[i]+i*step;
    }
}
function getpos(event){
    curx=event.clientX;cury=event.clientY+document.body.scrollTop
}
window.setInterval(follow,20)


