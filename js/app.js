var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal-1');
var btn = document.getElementById('mybtn');
var btn2 = document.getElementById('mybtn-2');
var btn3 = document.getElementById('mybtn-3');

var btn1 = document.getElementById('mybtn-1');

btn.onclick = function(){
modal.style.display = "block";
    
}

btn1.onclick = function(){
 modal1.style.display = "block";
    
}

btn2.onclick = function(){
    modal1.style.display = "block";
}

btn3.onclick = function(){
    modal.style.display = "block";
}



window.onclick = function(event){
    if (event.target === modal){
     modal.style.display = "none";
        
    }
        if (event.target === modal1){
     modal1.style.display = "none";
        
    }
}

