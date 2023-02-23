//Menu
var menu_visible = false;
let menu = document.getElementById("nav");
function showMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

let popup = document.getElementById("popup");
function abrirPopup(){
    popup.classList.add("abrir-popup");
}

function cerrarPopup(){
    popup.classList.remove("abrir-popup");
}

function enviarMensaje(){               
    sleep(1000).then(() => {     
        alert("Gracias por contactarse");        
        popup.classList.remove("abrir-popup");
    });    
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
