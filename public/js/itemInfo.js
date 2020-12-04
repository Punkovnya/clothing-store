


$(document).ready(function () {
    
    $("#img1").click(function(){
    


fetch('items.json')
    .then(response => {
        if (response.status !== 200) {
            console.log('problem. Status Code: ' + response.status);
        }
        else {
            return response.json();
        }
    })
    .then(items => {
        console.log(items);
        const arr = items;
        
        document.getElementById('md').innerHTML = `${arr[0].items}`;
         document.getElementById('footer').innerHTML = `${arr[0].buy}`;
            
        
    })
 
 });
    $("#img2").click(function(){
     
    fetch('items.json')
    .then(response => {
        if (response.status !== 200) {
            console.log('problem. Status Code: ' + response.status);
        }
        else {
            return response.json();
        }
    })
    .then(items => {
        console.log(items);
        const arr = items;
        document.getElementById('md').innerHTML = `${arr[1].items}`;
         document.getElementById('footer').innerHTML = `${arr[1].buy}`;
            
        
    })
 
 });
     $("#img3").click(function(){
    
fetch('items.json')
    .then(response => {
        if (response.status !== 200) {
            console.log('problem. Status Code: ' + response.status);
        }
        else {
            return response.json();
        }
    })
    .then(items => {
        console.log(items);
        const arr = items;
        document.getElementById('md').innerHTML = `${arr[2].items}`;
         document.getElementById('footer').innerHTML = `${arr[2].buy}`;
            
        
    })

 });
      $("#img4").click(function(){
    
fetch('items.json')
    .then(response => {
        if (response.status !== 200) {
            console.log('problem. Status Code: ' + response.status);
        }
        else {
            return response.json();
        }
    })
    .then(items => {
        console.log(items);
        const arr = items;
        document.getElementById('md').innerHTML = `${arr[3].items}`;
          document.getElementById('footer').innerHTML = `${arr[3].buy}`;    
        
    })

 });
       $("#img5").click(function(){
    
fetch('items.json')
    .then(response => {
        if (response.status !== 200) {
            console.log('problem. Status Code: ' + response.status);
        }
        else {
            return response.json();
        }
    })
    .then(items => {
        console.log(items);
        const arr = items;
        document.getElementById('md').innerHTML = `${arr[4].items}`;
          document.getElementById('footer').innerHTML = `${arr[4].buy}`;    
        
    })

 });
        $("#img6").click(function(){
    
fetch('items.json')
    .then(response => {
        if (response.status !== 200) {
            console.log('problem. Status Code: ' + response.status);
        }
        else {
            return response.json();
        }
    })
    .then(items => {
        console.log(items);
        const arr = items;
        document.getElementById('md').innerHTML = `${arr[5].items}`;
          document.getElementById('footer').innerHTML = `${arr[5].buy}`;    
        
    })

 });
         $("#img7").click(function(){
    
fetch('items.json')
    .then(response => {
        if (response.status !== 200) {
            console.log('problem. Status Code: ' + response.status);
        }
        else {
            return response.json();
        }
    })
    .then(items => {
        console.log(items);
        const arr = items
        document.getElementById('md').innerHTML = `${arr[6].items}`;
          document.getElementById('footer').innerHTML = `${arr[6].buy}`;   
        
    })

 });
          $("#img8").click(function(){
    
fetch('items.json')
    .then(response => {
        if (response.status !== 200) {
            console.log('problem. Status Code: ' + response.status);
        }
        else {
            return response.json();
        }
    })
    .then(items => {
        console.log(items);
        const arr = items;
        document.getElementById('md').innerHTML = `${arr[7].items}`;
           document.getElementById('footer').innerHTML = `${arr[7].buy}`;   
        
    })

 });
           $("#img9").click(function(){
    
fetch('items.json')
    .then(response => {
        if (response.status !== 200) {
            console.log('problem. Status Code: ' + response.status);
        }
        else {
            return response.json();
        }
    })
    .then(items => {
        console.log(items);
        const arr = items;
        document.getElementById('md').innerHTML = `${arr[8].items}`;
           document.getElementById('footer').innerHTML = `${arr[8].buy}`;      
        
    })

 });
    
 

});