var button=document.getElementById('counter');

button.onclick=function() {
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
      {if (request.readyState === XMLHttpRequest.DONE)
        {if (request.status === 200)
          {var names=request.responseText;
          names=JSON.parese(names);
         var list='';
         for(var i=0 ; i<names.length ; i++)
        {
            list += "<li>" + names[i] + "</li>";
        }
         var ul=document.getElementById('ulist');
         ul.innerHTML = list;
           }
    
         }
    
 
     };
     
request.open('GET', 'http://sandhyamaheswaran.imad.hasura-app.io/submit-name?name='+name ,true);
request.send(null);
};
var nameInput=document.getElementById('name');
     var name=nameInput.value;
     var click=document.getElementById('submit');
     click.onclick=function(){
         
     };
    