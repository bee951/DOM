document.addEventListener('DOMContentLoaded',function(){
   var div1=document.createElement("div")
    div1.className="header-container"
    var h1=document.createElement("h1")
var h2=document.createElement("h2")
var h3=document.createElement("h3")
var h4=document.createElement("h4")
var h5=document.createElement("h5")
var h6=document.createElement("h6")
var h1text=document.createTextNode('This is an h1')
var h2text=document.createTextNode('This is an h2')
var h3text=document.createTextNode('This is an h3')
var h4text=document.createTextNode('This is an h4')
var h5text=document.createTextNode('This is an h5')
var h6text=document.createTextNode('This is an h6')
h1.className="h1" 
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
document.body.appendChild(div1)
})
