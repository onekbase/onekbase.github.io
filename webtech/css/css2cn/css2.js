var eMenu,eItem,eExit,eDesk;

function doMenu(){
eMenu.style.backgroundColor=eDesk.bgcolor;
if ((eItem.offsetLeft+eMenu.offsetWidth-4)<eDesk.offsetWidth) eMenu.style.posLeft=eItem.offsetLeft;
else eMenu.style.posLeft=eDesk.offsetWidth-eMenu.offsetWidth;
eMenu.style.posTop=eDesk.offsetHeight+eDesk.offsetTop;
eMenu.style.visibility='visible';
}

function noMenu(){
if (eMenu && eMenu!=null) {eMenu.style.visibility='hidden';
eMenu.style.posLeft=0;eMenu.style.posTop=0;}
eMenu=eItem=eExit=eDesk=null;
}

function doOver(){
if ("A"==event.srcElement.tagName.toUpperCase()) {
eItem=event.srcElement.parentElement;
eDesk=eItem.parentElement;
eMenu=document.all(eItem.id.replace('item','menu'));
if (eMenu && eMenu!=null) {eMenu.onmouseout=doExit;doMenu();}
else noMenu();}
}

function doExit(){
eExit=event.toElement;
if (eMenu==null || eExit==null) return;
if (!eMenu.contains(eExit) && !eItem.contains(eExit))  noMenu();
}


function doSel(){
var o=event.srcElement;
if ('select'!=o.tagName.toLowerCase()) return;
var s=o.options[o.selectedIndex].value;
o.selectedIndex=0;
if (s!='1') self.location=s;
}

function doWin(l,a,b){
w=window.open(l,'dhtmlet','toolbar=0');
var winx=Math.ceil((window.screen.width-a)/2);
var winy=Math.ceil((window.screen.height-b)/2);
w.resizeTo(a,b);
w.moveTo(winx,winy);
w.focus();
}