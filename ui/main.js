var button=document.getElementById('counter');

button.onclick=function() {
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
      {if (request.readyState === XMLHttpRequest.DONE)
        {if (request.status === 200)
          {var counter = request.responseText;
           var span = document.getElementById("count");
           span.innerHTML = counter.toString();
           }
    
         }
    
 
     };
     
request.open('GET', 'http://sandhyamaheswaran.imad.hasura-app.io/counter' ,true);
request.send(null);
};
var nameInput=document.getElementById('name');
     var names=nameInput.value;
     var click=document.getElementById('sub');
     click.onclick=function(){
         var namess=['name1','name2','name3','name4'];
         var list='';
         for(var i=0 ; i<namess.length ; i++)
        {
            list += "<li>" + namess[i] + "</li>";
        }
         var ul=document.getElementById('ulist');
     ul.innerHTML=list;
     };
    