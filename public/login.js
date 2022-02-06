//Botões de registo
var btnregistoCliente = document.querySelector('#registo_cliente');
var btnregisto_artista = document.querySelector("#registo_artista");

//formulários style 
var form_artista = document.querySelector('#form_registo_artista');
var form_cliente = document.querySelector ('#form_registo_cliente');

//Botão de login
var btnlogin = document.querySelector("#login");
var container = document.querySelector("#container");


btnregistoCliente.addEventListener('click', function() {  
    container.classList.add("right-panel-active");
    form_artista.style.display = "none";
    form_cliente.style.display = "block";
});


btnregisto_artista.addEventListener('click', () => {
    console.log("ei");
	container.classList.add("right-panel-active");
    form_artista.style.display = "block";
    form_cliente.style.display = "none";
});


btnlogin.addEventListener('click', () => {
    
	container.classList.remove("right-panel-active");
});

