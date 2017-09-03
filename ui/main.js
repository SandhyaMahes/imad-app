var button=document.getElementById('counter');

button.onclick=function()
{
    var request=XMLHttpRequest();
    request.onreadystatechange=function()
    {if (request.readystate===XMLHttpRequest.DONE)
    {if (request.status===200)
    {var counter=request.responseText;
    var span=document.getElementById("count");
    span.innerHtml=counter.toString();
    }
    
    }
    
 
};
request.open('GET','http://sandhyamaheswaran.imad.hasura-app.io',true);
request.send(null);
};