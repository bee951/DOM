document.addEventListener('DOMContentLoaded',function(){
var div1=document.createElement("div");
div1.className="header-container";
var h1=document.createElement("h1");
var h2=document.createElement("h2");
var h3=document.createElement("h3");
var h4=document.createElement("h4");
var h5=document.createElement("h5");
var h6=document.createElement("h6");
var h1text=document.createTextNode('This is an h1');
var h2text=document.createTextNode('This is an h2');
var h3text=document.createTextNode('This is an h3');
var h4text=document.createTextNode('This is an h4');
var h5text=document.createTextNode('This is an h5');
var h6text=document.createTextNode('This is an h6');
h1.className="h1";
div1.appendChild(h1);
h1.appendChild(h1text);
div1.appendChild(h2);
h2.appendChild(h2text);
div1.appendChild(h3);
h3.appendChild(h3text);
div1.appendChild(h4);
h4.appendChild(h4text);
div1.appendChild(h5);
h5.appendChild(h5text);
div1.appendChild(h6);
h6.appendChild(h6text);
document.body.appendChild(div1);
h2.className="h2c";
h3.className="h3c";
h4.className="h4c";
h5.className="h5c";
h6.className="h6c";
var colorset=['red','green','blue','purple','black','violet','pink','orange'];
function getcolor(set) {
    var num=Math.floor(Math.random() * set.length);
    return set[num]; 
};
h1.addEventListener('dblclick',function(){
    var col=getcolor(colorset)
    h1.style.color=col
});
h2.addEventListener('dblclick',function(){
    var col=getcolor(colorset)
    h2.style.color=col
});
h3.addEventListener('dblclick',function(){
    var col=getcolor(colorset)
    h3.style.color=col
});
h4.addEventListener('dblclick',function(){
    var col=getcolor(colorset)
    h4.style.color=col
});
h5.addEventListener('dblclick',function(){
    var col=getcolor(colorset)
    h5.style.color=col
});
h6.addEventListener('dblclick',function(){
    var col=getcolor(colorset)
    h6.style.color=col
});

var button=document.createElement('button');
var btntext=document.createTextNode('Click to add new list item');
button.appendChild(btntext);
div1.appendChild(button);
var lt=1;
var thing=document.createElement("ul");
var lit=document.createElement("li");
lit.className="li";
function clist() {
    div1.appendChild(thing);
    var lit=document.createElement("li");
    var listtext=document.createTextNode('This is list item '+lt);
    thing.appendChild(lit);
    lit.appendChild(listtext);
    lit.className="li";
lit.addEventListener("click",function(){
    var col=getcolor(colorset)
    lit.style.color=col
});
lit.addEventListener("dblclick",function(){
    thing.removeChild(lit)
});
};
button.addEventListener("click",function(){
    clist();
    lt++;

});
})
