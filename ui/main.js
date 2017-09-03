var button=document.gatElementById('counter');
var counter;
button.onclick=function()
{
 counter+=1;
 var span=document.getElementById("count");
 span.innerHTML=counter.toString();
};