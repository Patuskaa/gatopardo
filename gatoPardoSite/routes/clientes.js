const express = require("express");
let router = express.Router();

let data = new Date();
const crypto = require('crypto');

// SQL -----------------------
var mysql = require("mysql");
// conection to MySQL
var pool = mysql.createPool({
    host: "saturno.esec.pt",
    user: "fsousa",
    password: "UgRN8FzXY4MMBvC5",
    database: "fsousa",
    charset: "utf8",
    multipleStatements: true
});

//TOPO DA PÁGINA CLIENTE

var topo_cliente = "";
topo_cliente += "<head>\n";
topo_cliente += "<html>\n";
topo_cliente += "<!DOCTYPE html>\n";
topo_cliente += "<title>Gato Pardo</title>\n";
topo_cliente += "<meta charset='utf8'>\n";
//FONTAWESOME
topo_cliente += "<script src='https://kit.fontawesome.com/41df33ebd8.js' crossorigin='anonymous'></script> \n";
// BOOTSTRAP 
topo_cliente += "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>\n";
topo_cliente += " <script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js' integrity='sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p' crossorigin='anonymous'></script><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js' integrity='sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF' crossorigin='anonymous'></script>\n";
//LOTTIE 
topo_cliente += "<script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>\n";
//LORDICON ICON-ANIMADOS
topo_cliente += "<script src='https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js'></script>\n";
//BOXICON
topo_cliente += "<link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>\n";
// CSS 
topo_cliente += "<link rel='stylesheet' href='/main.css'>\n";
topo_cliente += "</head>\n";
topo_cliente += "<body>\n";

// NAVBARRA DOS CLIENTESs
var nav_cliente = "";
nav_cliente +="<nav class='sidebar close'>\n";
nav_cliente +="<header>\n";
nav_cliente +="<div class='image-text'>\n";
nav_cliente +="<a href ='homepageClientes' class='gatopardologo'>\n";
nav_cliente +="<span class='image'><img src='/Gato Pardo.svg' alt='logo'></span></a>\n";
nav_cliente +="<div class='text logo-text'><span class='name'>Gato Pardo</span><span class='profession'>Clientes</span></div></div>\n";
nav_cliente +="<i class='bx bx-chevron-right toggle'></i></header>\n";
nav_cliente +="<div class='menu-bar'>\n";
nav_cliente +="<div class='menu'>\n";
nav_cliente +="<ul class='menu-links'>\n";
//PRODUTOS
nav_cliente +="<li class='nav-link'><a href='homepageClientes'><lord-icon class='icon' src='https://cdn.lordicon.com/rwotyanb.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Produtos</span></a></li>\n";
//ARTISTAS
nav_cliente +="<li class='nav-link'><a href='artistas'><lord-icon class='icon' src='https://cdn.lordicon.com/vqmupdxd.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Artistas</span></a></li>\n";
//EVENTOS
nav_cliente +="<li class='nav-link'><a href='eventos'><lord-icon class='icon' src='https://cdn.lordicon.com/kdruzgxz.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Eventos</span></a></li>\n";
//WISHLIST
nav_cliente +="<li class='nav-link'><a href='wishlist'><lord-icon class='icon' src='https://cdn.lordicon.com/rjzlnunf.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Clientes</span></a></li>\n";
//COMPRAS DEO CLIENTE (vendas do negocio)
nav_cliente +="<li class='nav-link'><a href='mostra_carrinho'><lord-icon class='icon' src='https://cdn.lordicon.com/slkvcfos.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Carrinho</span></a></li>\n";
//PERFIL
nav_cliente +="<li class='nav-link'><a href='perfil'><lord-icon class='icon' src='https://cdn.lordicon.com/dxjqoygy.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Perfil</span></a></li>\n";

nav_cliente +="</ul>\n";
nav_cliente +="</div>\n";
//LOGOUT
nav_cliente +="<div class='bottom-content'>\n";
nav_cliente +="<li class='logout'><a href='logout'><lord-icon class='icon' src='https://cdn.lordicon.com/lywgqtim.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Logout</span></a></li>\n";
nav_cliente +="</div></div>\n";
nav_cliente +="</nav>\n";

var fundo_cliente ="";
fundo_cliente += "<script>\n";
fundo_cliente += "const body = document.querySelector('body'),\n";
fundo_cliente += "sidebar = body.querySelector('nav'),\n";
fundo_cliente += "toggle = body.querySelector('.toggle');\n";
fundo_cliente += "toggle.addEventListener('click' , () =>{sidebar.classList.toggle('close');})\n";
fundo_cliente += "</script>\n";
fundo_cliente +="</body>\n";
fundo_cliente += "</html>\n";


router
    .route("/homepageClientes")
    .get((req, res) =>{
  
        var query = " SELECT id_produto, fotografia_produto, titulo_produto, categoria_produto, material_produto, dt_elaboracao_produto, preco_venda, preco_compra,stock_produto, nome_real_artista FROM Produto inner join Artista using(id_artista) order by nome_real_artista; SELECT id_produto FROM Produto_Compra;";
            runQuery(query, function (err, result, fields) {
            var html ="";
            html += topo_cliente;
            html += nav_cliente;
            html += "<section class='home'>\n";
            html += "<div class='container'>\n";
            html += "<div class='product-items row'>\n";
            html += "<h3>Produtos</h3>"
            
            for (var i = 0; i < result[0].length; i++) {
            // COLOCAR AQUI O CICLO FOR PARA VER PRODUTOS
            html += "<div class='wrapper col-3'>\n";
            html += "<div class='product-card'>\n";
            html += " <a class='product-link' href='produto?id_produto=" + result[0][i].id_produto + "'>  \n";
            //IMAGEM 
            html += "<img src='/uploads/" + result[0][i].fotografia_produto
            + "'/>\n";
            html += "<span class='overlay'></span>\n";
            //ID HIDDEN
            html += "<input type='hidden' value='" + req.query.id_produto + "' name='id_produto'>\n";
            //TITULO PRODUTO
            html += " <span class='info'><span class='title'>" + result[0][i].titulo_produto  + "</span>\n";
            //PREÇO PRODUTO
            html += "<span class='price'><span class='currencysymbol'>€</span>"+ result[0][i].preco_venda + "</span></span> </a>\n";
            
            html += " <div class='button-wrap d-inline-flex'>\n";
            //VISUALIZAR BOTÃO
            html += " <a href='produto?id_produto=" + result[0][i].id_produto + "' class='view button'>\n";
            html += "<lord-icon class='icon' src='https://cdn.lordicon.com/tyounuzx.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:35px;height:35px'> </lord-icon></a>\n";
            //WISH BOTÃO
            html += " <a href='processa_adiciona_wishlist?id_produto=" + result[0][i].id_produto + "' class='wish button'>\n";
            html += "<lord-icon class='icon' src='https://cdn.lordicon.com/rjzlnunf.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:35px;height:35px'> </lord-icon></a>\n";
            // ADICIONAR CARRINHO BOTÃO 
            html += " <a href='adiciona_carrinho?id_produto=" + result[0][i].id_produto + "' class='cart button'>\n";
            html += "<lord-icon class='icon' src='https://cdn.lordicon.com/slkvcfos.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:35px;height:35px'> </lord-icon></a>\n";

            html += "</div></div></div>\n";
        }

            html += "</div></div></div>\n";
            html += "</section>\n";
            html += fundo_cliente;
            res.send(html)
        });
    });  
    


//=======================================

//     MOSTRAR PRODUTO INDIVIDUAL

//=======================================
router
.route("/produto")
.get((req, res)=>{
    if(req.query.id_produto){
        
        var query = "SELECT titulo_produto, dt_elaboracao_produto, material_produto, preco_venda, stock_produto, fotografia_produto, categoria_produto, id_artista, nome_real_artista, fotografia_artista FROM Produto INNER JOIN Artista using (id_artista) Where id_produto ='" + req.query.id_produto + "';";

        query += "SELECT comentario_class, dt_class, valor_class, nome_cliente FROM Classificacao inner join Cliente using(id_cliente) where id_produto='" + req.query.id_produto + "' order by dt_class DESC, hora_class DESC  limit 1;";
       
       
        runQuery(query, function(err, result, fields){
            
                var html="";
                html += topo_cliente;
                html += nav_cliente;
                html += "<section class='home' id=''>\n";
                html += "<div class='container editaproduto'>\n";
                
                
                html += "<div class='row'>\n";
                html += "  <div class='col-4 imgaltera'>\n";
                html += " <input type='file' id='file' name='fotografia_produto'>\n";
                
                // FOTOGRAFIA inserida dinamicamente
                html += "<img src='/uploads/"+ result[0][0].fotografia_produto + "' width='100%' height='100%'>\n";
                html += " <div class='d-inline-flex artistadt'><a href='artistasindividual?id_artista=" + result[0][0].id_artista + "'>\n";
                html += "<div class='imgartista'>"
                html += "<img src='/uploads/" + result[0][0].fotografia_artista
                + "'/>\n";
                html += "</div>\n";
                html += "<h3 class='nmartista'>de: "+ result[0][0].nome_real_artista
                + "</h3>"
                html += "</a></div>\n";
                
                html += "</div>\n";
                html += "  <div class='col-6 produtdt'>\n";
                //titulo produto
                html += "<h3>" + result[0][0].titulo_produto
                + "</h3>"
                //botao redirediocar para trás
                html += "<a href='homepageClientes' class='closebtn'> <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                html += "<br>"
                
                html += " <div class='button-wrap d-inline-flex btnd'>\n";
                //adicionar wishlist
                html += "<p><a href='processa_adiciona_wishlist?id_produto=" + req.query.id_produto + "' class='wishd' ><lord-icon class='icon' src='https://cdn.lordicon.com/rjzlnunf.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:35px;height:35px'> </lord-icon></a> </p>"
                //adiocionar carrinho 
                html += "<td><p><a href='adiciona_carrinho?id_produto=" + req.query.id_produto + "' class='cartd'><lord-icon class='icon' src='https://cdn.lordicon.com/slkvcfos.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:35px;height:35px'> </lord-icon></a></p></td>";
                html += "</div>"
                
                //data
                html += "<p><span class='infod'>Relalizado a:</span>  "  + new Date(result[0][0].dt_elaboracao_produto).getFullYear() + "/" + (new Date(result[0][0].dt_elaboracao_produto).getMonth() +1) + "/" + new Date(result[0][0].dt_elaboracao_produto).getDate() 
                + "</p>"
                //categoria
                html += "<p><span class='infod'>Categoria:</span>  " + result[0][0].categoria_produto + " </p>"
                //Material
                html += "<p><span class='infod'>Material:</span> " + result[0][0].material_produto + " </p>"
                //PreçO
                html += "<p><span class='infod'>Preço:</span> " + result[0][0].preco_venda+ " € </p>"
                //Stock
                html += "<p><span class='infod'>Stock:</span>" + result[0][0].stock_produto + " </p>"
                html += "<hr>";
                //ULTIMO COMENTARIO REALIZADO AO PRODUTO
                 if(result[1].length  > 0){
                    html += "<div class='lastcomment'>"
                    html += "<h6 class='comment-names'>COMENTÁRIOS DE CLIENTES</h6>"
                    html += "<h6 class='commentcl'> feito por:  " + result[1][0].nome_cliente+ "<span class='star2 '><lord-icon class='icon' src='https://cdn.lordicon.com/mdgrhyca.json' trigger='loop' colors='primary:#e8e230,secondary:#e8e230' stroke='80' style='width:25px;height:25px'></lord-icon></span>  " + result[1][0].valor_class+ "</h6> \n";
                    //CONTEUDO DO COMENTARIO
                    html += "<p class='commentcontent'>" + result[1][0].comentario_class+ "</p>\n";
                    html += "</div>"
                
                    //linha
                html += "<hr>";
                //DEIXAR UM COMENTARIO
                html += "<h6 class='comment-name by-author'>DEIXE AQUI A TUA OPINIÃO</h6>"
                //formulario comentario no produto
                html += " <form name='comentarioFormulario' method='get'  action='comentario_processa'  >\n";
                    //ID produto
                    html += " <input type='hidden' id='quantity' name='id_produto' value='" + req.query.id_produto +"'>\n";

                    //ESTRELAS
                    html += " 1 a 5 &#9733; quantas merece? <input type='number' id='quantity' name='valor_class' min='1' max='5' >\n";
                    //TEXTAREA PARA COMENTAR
                    html += "<textarea name='comentario' id='comentario' cols='40' rows='2'></textarea>\n";
                    html += "<button class='comentbtn' type='submit'>Comentar</button>\n";
                    html += "</form>";
                 }
               
                //fim
                html += "</div></div>\n";
                html += "</section>\n";
                html += fundo_cliente;
                res.send(html)
        }); 
        
    }
    else{
        res.redirect('404page');
    }
}); 

//=======================================

//   ADICIONA AO CARRINHO

//=======================================

router
.route("/adiciona_carrinho")
.get((req, res)=>{
        var html='';
        html += topo_cliente;
        html += "<div class='fundobk'>\n";
        html += "<div class='container msgerro'>\n";
        html += "<div class='row'>\n";

        html += "<div class='col-11'>\n";
        if (req.query.id_produto) {
            if (!req.session.carrinho) {
                req.session.carrinho = new Array();
                console.log(req.session.carrinho);
            }
            if (req.session.carrinho[req.query.id_produto]) {
                req.session.carrinho[req.query.id_produto]++;
                console.log(req.session.carrinho);
            }
            else {
                req.session.carrinho[req.query.id_produto] = 1;
            }
            html += "<h3>O produto foi adicionado ao carrinho com sucesso</h3>"
            }
        else {
        html += "<h3>O produto não especificado</h3>\n";
        }

        html+= "<div class='btnmsg'>"
        html += "<a href='homepageClientes'><lord-icon class='icon' src='https://cdn.lordicon.com/pithnlch.json' trigger='morph' colors='primary:#060808,secondary:#060808' stroke='80' style='width:35px;height:35px'> </lord-icon> Continuar a comprar?</a>";
        html += "<a href='mostra_carrinho' ><lord-icon class='icon' src='https://cdn.lordicon.com/slkvcfos.json' trigger='morph' colors='primary:#060808,secondary:#060808' stroke='80' style='width:35px;height:35px'> </lord-icon>Ver carrinho?</a>";
        html += "</div>\n";
    
        html += "</div>\n";
        
        html += "<div class='col-1'>\n";
        html += "<a href='homepageClientes' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
            
        html += "</div>\n";
        html += "</div>\n";
        html += "</div>\n";
        html += "</div>\n";
        html+= fundo_cliente;
        res.send(html)

   
});


//=======================================

//     MOSTRAR CARRINHO

//=======================================

router
.route("/mostra_carrinho")
.get((req, res)=>{
    
        if (req.session.carrinho) {
            if (req.query.operacao == "aumentar") {
                req.session.carrinho[req.query.id_produto]++;
            }
            else if (req.query.operacao == "diminuir") {
                req.session.carrinho[req.query.id_produto]--;
            }
            else if (req.query.operacao == "apagar") {
                req.session.carrinho[req.query.id_produto] = null; 
            }
            // filtrar apenas os álbuns que, no array carrinho, têm uma quantidade associada
            var listaAlbunsCarrinho = new Array();
            for (var i = 0; i < req.session.carrinho.length; i++) {
                if (req.session.carrinho[i]) {
                    listaAlbunsCarrinho.push(i);
                }
            }
            if (listaAlbunsCarrinho.length > 0) {
                var query = "SELECT id_produto, titulo_produto, preco_venda, stock_produto FROM Produto WHERE id_produto IN (";
                for (var i = 0; i < listaAlbunsCarrinho.length - 1; i++) {
                    query += listaAlbunsCarrinho[i] + ", ";
                }
                query += listaAlbunsCarrinho[listaAlbunsCarrinho.length - 1] + ");";
                query += "SELECT id_func From Funcionario order by rand() limit 1;";
                runQuery(query, function (err, result, fields) {
                    var precoTotal = 0;
                    var html = "";
                    html += topo_cliente;
                    html += nav_cliente;
                    html += "<section class='home' id=''>\n";
                    html += "<div class='container tb_artista'>\n";
                   
                    
                    if (result[0] && result[0].length > 0) {
                        html += "<h3>O meu carrinho de compras</h3>\n";
                        html += "<table class='table table-hover'>";
                        html += "<thead><tr>\n";
                        html += " <th scope='col'>Titulo</th>\n";
                        html += " <th scope='col'>Preço</th>\n";
                        html += " <th scope='col' colspan='3'<em>quantidade</em></th>\n";
                        html += " <th scope='col'>Preço parcial</th>\n";
                        html += " <th scope='col'></th>\n";
                        
                        for (var i = 0; i < result[0].length; i++) {
                            // limitar a quantidade máxima de cada álbum ao respectivo stock
                            if (req.session.carrinho[result[0][i].id_produto] > result[0][i].stock_produto) {
                                req.session.carrinho[result[0][i].id_produto] = result[0][i].stock_produto;
                            }
                            html += "<tr>\n";
                            html += "<td>" + result[0][i].titulo_produto + "</td><td>&euro;" + result[0][i].preco_venda + "</td><td><a href='mostra_carrinho?id_produto=" + result[0][i].id_produto + "&operacao=aumentar'>&plus;</a></td><td>" + req.session.carrinho[result[0][i].id_produto] + "</td><td><a href='mostra_carrinho?id_produto=" + result[0][i].id_produto + "&operacao=diminuir'>&minus;</a></td><td>&euro;" + (req.session.carrinho[result[0][i].id_produto] * result[0][i].preco_venda) + "</td><td><a href='mostra_carrinho?id_produto=" + result[0][i].id_produto + "&operacao=apagar'><lord-icon class='icon' src='https://cdn.lordicon.com/gsqxdxog.json' trigger='morph' colors='primary:#bc2a4a,secondary:#bc2a4a' stroke='80' style='width:20px;height:20px'></lord-icon> </a></td>\n";
                            precoTotal += req.session.carrinho[result[0][i].id_produto] * result[0][i].preco_venda;
                            html += "</tr>\n";
                            
                        }

                        html+= "</table>"
                        html += "<p class= 'precototal'><em><strong>PREÇO TOTAL: €" + precoTotal + " </strong></em></p>";
                        html += "<a href='insere_venda?id_func=" + result[1][0].id_func +"' class ='finalizar'><lord-icon class='icon' src='https://cdn.lordicon.com/vaeagfzc.json' trigger='morph' colors='primary:#e8e230,secondary:#e8e230' stroke='80' style='width:20px;height:20px'></lord-icon> Finalizar Compra</a></p>\n";
                        
                    }
                    else {
                        html += "<h3>Carrinho atualmente vazio</h3>\n";
                    }
                    
                  
                    res.send(html);
                });
            }
            else {
                var html = "";
    
                html += topo_cliente;
                html += "<div class='fundobk'>\n";
                html += "<div class='container msgerro'>\n";
                html += "<div class='row'>\n";
            
                html += "<div class='col-11'>\n";
                html += "<h3>Carrinho vazio, nenhum produto que te interesse?</h3>"
                html += "</div>\n";
                
                html += "<div class='col-1'>\n";
                html += "<a href='homepageClientes' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                html += "</div>\n";
                
                html += "</div>\n";
                html += "</div>\n";
                html += "</div>\n";
                html+= fundo_cliente;
               
                res.send(html);
            }
        }
        else {
            var html = "";
            html += topo_cliente;
            html += "<div class='fundobk'>\n";
            html += "<div class='container msgerro'>\n";
            html += "<div class='row'>\n";
        
            html += "<div class='col-11'>\n";
            html += "<h3>Carrinho vazio, nenhum produto que te interesse?</h3>"
            html += "</div>\n";
            
            html += "<div class='col-1'>\n";
            html += "<a href='homepageClientes' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
            html += "</div>\n";
            
            html += "</div>\n";
            html += "</div>\n";
            html += "</div>\n";
            html+= fundo_cliente;
            
            res.send(html);
        }
   
});



//=======================================

//     INSERE VENDA / FINALIZA COMPRA

//=======================================

router
.route("/insere_venda")
.get((req, res)=>{

                if (req.session.carrinho) {
                    var listaAlbunsCarrinho = new Array();
                    for (var i = 0; i < req.session.carrinho.length; i++) {
                        if (req.session.carrinho[i]) {
                            listaAlbunsCarrinho.push(i);
                        }
                    }
                    var query = "INSERT INTO Venda Values(null, '" + data.getFullYear() + "-" + (data.getMonth() +1) + "-" + data.getDate() +"','" + data.getHours()  +':'+ data.getMinutes() +"', " + req.query.id_func + ", "+ req.session.id_cliente + ");";
                    for (var i = 0; i < listaAlbunsCarrinho.length; i++) {
                      
                        query += "INSERT INTO Produto_Venda Values('" + listaAlbunsCarrinho[i] + "', (SELECT MAX(id_venda) FROM Venda), '" + req.session.carrinho[listaAlbunsCarrinho[i]] + "');"
                    }
                   
                    runQuery(query, function (err, result, fields) {
                        var html = "";
                        html += topo_cliente;
                        html += "<div class='fundobk'>\n";
                        html += "<div class='container msgerro'>\n";
                        html += "<div class='row'>\n";
                    
                        html += "<div class='col-11'>\n";
                       
                        
                       
                    
                        
                        if (result) {
                            if (result.length > 0) {
                                html += "<h3>Venda inserida com sucesso</h3>"
                                html += "</div>\n";
                            }
                            for (var i = 1; i < result.length; i++) {
                                if (result[i].affectedRows > 0) {
                                    html += "<h3>Os seus produtos estão a caminho</h3>"
                                    html += "</div>\n";
                                }
                                else {
                                    html += "<h3>Falha ao finalizar a venda</h3>"
                                    html += "</div>\n";
                                }
                            }
                        }
                        else {
                            html += "<h3>Falha ao finalizar a venda</h3>"
                            html += "</div>\n";
                        }
                        
                        html += "<div class='col-1'>\n";
                        html += "<a href='homepageClientes' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                        html += "</div>\n";
                        
                        html += "</div>\n";
                        html += "</div>\n";
                        html += "</div>\n";
                        html+= fundo_cliente;;
                        res.send(html);
                    });
                }
                else {
                    var html = "";
                    html += topo_cliente;
                    html += "<div class='fundobk'>\n";
                    html += "<div class='container msgerro'>\n";
                    html += "<div class='row'>\n";
                
                    html += "<div class='col-11'>\n";
                    html += "<h3>O seu carrinho de compra deve estar vazio</h3>"
                    html += "</div>\n";
                    
                    html += "<div class='col-1'>\n";
                    html += "<a href='homepageClientes' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                    html += "</div>\n";
                    
                    html += "</div>\n";
                    html += "</div>\n";
                    html += "</div>\n";
                    html+= fundo_cliente;
                    
                    res.send(html);
                }
            
            
     
});


    
//=======================================

//   PROCESSA COMENTARIO  do FORM PRODUTO

//=======================================

router
.route("/comentario_processa")
.get((req, res)=>{
   
        if(req.query.comentario && req.query.valor_class){
            
            
            var query = "INSERT INTO Classificacao VALUES (null, '"+ req.query.valor_class +"', '"+ req.query.comentario +"', '" + data.getFullYear() + "-" + (data.getMonth() +1) + "-" + data.getDate() +" ',' " + data.getHours()  +':'+ data.getMinutes() +" ','"+ req.session.id_cliente + "','" + req.query.id_produto +"');" ;
            
            runQuery(query, function (err, result, fields) {     
                
                if(result && result.affectedRows > 0){
                    res.redirect('homepageClientes');
                }
                else{
                    res.redirect('erroinput');
                }  
            });
            
        }
        else{
            res.redirect('404page');
        }
       
 });



//=======================================

//     PROCESSA WHISLIST do FORM PRODUTO 

//=======================================

router
.route("/processa_adiciona_wishlist")
.get((req, res)=>{
        if(req.query.id_produto){
            var query = "INSERT INTO Wishlist VALUES (null, '" + data.getFullYear() + "-" + (data.getMonth() +1) + "-" + data.getDate() +"','" + data.getHours()  +':'+ data.getMinutes() +"','"+ req.session.id_cliente +"');";
            query += "INSERT INTO Wishlists_Produtos VALUES (LAST_INSERT_ID(),  '" + req.query.id_produto + "');";
           
            console.log(query)
            
            runQuery(query, function (err, result, fields) {     
            
                if(result[0] && result[0].affectedRows > 0){
                    res.redirect('homepageClientes');
                }
                else{
                    res.redirect('erroinput');
                }  
            });    
        }
        else{
            res.redirect('404page');
        }
  
 });
 
//=======================================

//     MOSTRAR ARTISTAS

//======================================= 
router
.route("/artistas")
.get((req, res) =>{

    var query = "SELECT id_artista, nome_artistico_artista, fotografia_artista From Artista;";
        runQuery(query, function (err, result, fields) {
        var html ="";
        html += topo_cliente;
        html += nav_cliente;
        html += "<section class='home'>\n";
        html += "<div class='container'>\n";
        html += "<div class='product-items row'>\n";
        html += "<h3>ARTISTAS</h3>"
        
        for (var i = 0; i < result.length; i++) {
        // COLOCAR AQUI O CICLO FOR PARA VER PRODUTOS
        html += "<div class='wrapper col-3'>\n";
        html += "<div class='product-card'>\n";
        html += " <a class='product-link' href='artistasindividual?id_artista=" + result[i].id_artista + "'>  \n";
        //IMAGEM 
        html += "<img src='/uploads/" + result[i].fotografia_artista
        + "'/>\n";
        html += "<span class='overlay'></span>\n";
        //ID HIDDEN
        html += "<input type='hidden' value='" + result[i].id_artista + "' name='id_artista'>\n";
        //nome artista
        html += " <span class='info'><span class='title'>" + result[i].nome_artistico_artista  + "</span>\n";
        
        html += " <div class='button-wrap d-inline-flex'>\n";
        
        html += " <a href='artistasindividual?id_artista=" + result[i].id_artista + "' class='view button' >\n";

        html += "<lord-icon class='icon' src='https://cdn.lordicon.com/tyounuzx.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:35px;height:35px'> </lord-icon></a>\n";
        
        html += "</div></div></div>\n";
        }
        res.send(html)
    });
}); 

//=======================================

//     MOSTRAR ARTISTA INDIVIVUAL

//=======================================
router
.route("/artistasindividual")
.get((req, res)=>{
    if(req.query.id_artista){
        
        var query = "SELECT nome_artistico_artista, fotografia_artista, localidade_artista, categoria_arte_artista, facebook_artista, instagram_artista, behance_artista, biografia_artista FROM Artista Where id_artista='" + req.query.id_artista + "';";

        query += "SELECT texto_comentario, dt_comentario, nome_cliente FROM Comentario inner join Cliente using(id_cliente) where id_artista='" + req.query.id_artista + "' order by dt_comentario DESC, hora_comentario DESC limit 1;"

       
        runQuery(query, function(err, result, fields){
            
                var html="";
                html += topo_cliente;
                html += nav_cliente;
                html += "<section class='home' id=''>\n";
                html += "<div class='container editaproduto'>\n";
                
                
                html += "<div class='row'>\n";
                html += "  <div class='col-4 imgaltera'>\n";
                html += " <input type='file' id='file' name='fotografia_artista'>\n";
                // FOTOGRAFIA inserida dinamicmente
                html += "<img src='/uploads/"+ result[0][0].fotografia_artista + "' width='100%' height='100%'>\n";
                html += "</div>\n";
                html += "  <div class='col-6 formaltera'>\n";
                //NOME ARTISTA
                html += "<h3>" + result[0][0].nome_artistico_artista + "</h3>"
                //botao redirediocar para trás
                html += "<a href='artistas' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                html += "<br>"
                //categoria
                html += "<p>Categoria:  " + result[0][0].categoria_arte_artista + " </p>"
                //LOCALIDADE
                html += "<p>Localidade : " + result[0][0].localidade_artista + " </p>"
                //BIOGRAFIA
                html += "<p>Biografia : " + result[0][0].biografia_artista + " </p>"
               
                html += "<hr>";

                //ULTIMO COMENTARIO REALIZADO AO PRODUTO
                if(result[1].length  > 0){
                html += "<h6>COMENTÁRIOS DE CLIENTES</h6>"
                html += "<h6> feito por:  " + result[1][0].nome_cliente+ "</h6>\n";
                //CONTEUDO DO COMENTARIO
                html += "<p>'" + result[1][0].texto_comentario+ "'</p>\n";
                }
               
                //linha
                html += "<hr>";
                //DEIXAR UM COMENTARIO
                html += "<h6 class='comment-name by-author'>DEIXE AQUI O SEU COMENTÁRIO</h6>"
                //formulario
                html += " <form name='comentarioFormulario' method='get'  action='comentario_artista_processa'  >\n";
                    //ID artista
                    html += " <input type='hidden' id='quantity' name='id_artista' value='" + req.query.id_artista +"'>\n";

                    //TEXTAREA PARA COMENTAR
                    html += "<textarea name='texto_comentario'  cols='40' rows='2'></textarea>\n";
                    html += "<button class='comentbtn' type='submit'>Comentar</button>\n";
                html += "</form>";
               
                //fim
                html += "</div></div>\n";
                html += "</section>\n";
                html += fundo_cliente;
                res.send(html)
        }); 
        
    }
    else{
        res.redirect('404page');
    }
}); 


//=======================================

//     PROCESSA COMENTARIO DO ARTISTA

//=======================================

router
.route("/comentario_artista_processa")
.get((req, res)=>{

    console.log(req.query.id_artista)
    console.log(req.query.texto_comentario)
    console.log(req.session.id_cliente)
        if(req.query.id_artista && req.query.texto_comentario){
            console.log("query")
            var query = "INSERT INTO Comentario VALUES (null,'"+ req.query.texto_comentario +"', '" + data.getFullYear() + "-" + (data.getMonth() +1) + "-" + data.getDate() +"','" + data.getHours()  +':'+ data.getMinutes() +"',"+ req.session.id_cliente +","+ req.query.id_artista +");";
        
            runQuery(query, function (err, result, fields) {     
            
                if(result && result.affectedRows > 0){
                    res.redirect('artistas');
                }
                else{
                    res.redirect('erroinput');
                }  
            });    
        }
        else{
            console.log("primeiro if")
            res.redirect('404page');
        }
  
 });
//=======================================

//     MOSTRAR EVENTOS

//=======================================
router
.route("/eventos")
.get((req, res)=>{

   var query = "Select * from Evento where dt_inicio_evento >= " + data.getFullYear() + "/" + (data.getMonth() +1) + "/" + data.getDate() +";";

   query+= "select id_evento, nome_artistico_artista from Evento inner join Artistas_Eventos using(id_evento) inner join Artista using(id_artista);"
  
  
    runQuery(query, function (err, result, fields) {
        if (result.length > 0) { 
            var html="";
            html += topo_cliente;
            html += nav_cliente;
            html += "<section class='home' id=''>\n";
            html += "<div class='container tb_produto'>\n";
            html += "<h3>EVENTOS PRESENTES E FUTUROS</h3>\n";
            html += "<table class='table table-hover'>\n";
            html += "<thead><tr>\n";
            html += " <th scope='col'>titulo_evento</th>\n";
            html += " <th scope='col'>Descrição</th>\n";
            html += " <th scope='col'>data inicio</th>\n"; 
            html += " <th scope='col'>data fim</th>\n"; 
            html += " <th scope='col'>hora inicio</th>\n"; 
            html += " <th scope='col'>hora fim</th>\n"; 
            html += " <th scope='col'>Local</th>\n";
            html += " <th scope='col'>Morada</th>\n";
            html += " <th scope='col'>Preço</th>\n";
            html += " <th scope='col'>Lotação</th>\n";
            html += " <th scope='col'>Link</th>\n";
            html += "</tr></thead>\n";
            html += " <tbody>\n";
            for (var i = 0; i < result.length; i++) {
                html += "<tr>\n";
                //titulo
                html += "<td>" + result[0][i].titulo_evento+ "</td>\n";
                 //desciçãp
                 html += "<td>" + result[0][i].descricao_evento+ "</td>\n";
                //data incio
                html += "<td>"  + new Date(result[0][i].dt_inicio_evento).getFullYear() + "/" + (new Date(result[0][i].dt_inicio_evento).getMonth() +1) + "/" + new Date(result[0][i].dt_inicio_evento).getDate() 
                + "</td>\n";
                //data fim
                html += "<td>"  + new Date(result[0][i].dt_fim_evento).getFullYear() + "/" + (new Date(result[0][i].dt_fim_evento).getMonth() +1) + "/" + new Date(result[0][i].dt_fim_evento).getDate() 
                + "</td>\n";
                //hora inicio 
                html += "<td>"  + result[0][i].hora_inicio_evento + "</td>\n";
                //hora fim 
                html += "<td>"  + result[0][i].hora_fim_evento + "</td>\n";
                //local
                html += "<td>"  + result[0][i].local_evento + "</td>\n";
                //morada
                html += "<td>"  + result[0][i].morada_evento + "</td>\n";
                //preco
                html += "<td>"  + result[0][i].preco_evento + "</td>\n";
                //preco
                html += "<td>"  + result[0][i].lotacao_evento + "</td>\n";
                //preco
                html += "<td>"  + result[0][i].link_bilhete_evento + "</td>\n";
                html += "<td>";
            
                html += "</td>\n";

            //fim da linha
            html += "</tr>\n";
            }

            //////
            html += "</tbody></table></div>\n";
            html += "</section>\n";
            html += fundo_cliente;

            res.send(html)
        }
        else{
            res.redirect('404page');
        }
    });
});



//=======================================

//     MOSTRAR WISHLIST

//=======================================
router
.route("/wishlist")
.get((req, res)=>{

   var query = "Select id_wishlist, titulo_produto, id_produto, fotografia_produto FROM Wishlists_Produtos inner join Produto using(id_produto) inner join Wishlist using(id_wishlist) inner join Cliente using(id_cliente) WHERE id_cliente = " + req.session.id_cliente + ";";
  
    
    runQuery(query, function (err, result, fields) {
        if (result.length > 0) { 
            var html="";
            html += topo_cliente;
            html += nav_cliente;
            html += "<section class='home' id=''>\n";
            html += "<div class='container'>\n";
            html += "<div class='product-items row'>\n";
            html += "<h3>MINHA WISHLIST</h3>"
            
            for (var i = 0; i < result.length; i++) {
                html += "<div class='wrapper col-3'>\n";
                html += "<div class='product-card'>\n";
                html += " <a class='product-link' href='produto?id_produto=" + result[i].id_produto + "'>  \n";
                //IMAGEM 
                html += "<img src='/uploads/" + result[i].fotografia_produto
                + "'/>\n";
                html += "<span class='overlay'></span>\n";
                 //ID HIDDEN
                html += "<input type='hidden' value='" + result[i].id_wishlist + "' name='id_wishlist'>\n";
                 //nome artista
                html += " <span class='info'><span class='title'>" + result[i].titulo_produto  + "</span>\n";
                html += " <div class='button-wrap d-inline-flex'>\n";
                //APAGAR
                html += " <a href='eliminaproduto?id_wishlist=" + result[i].id_wishlist + "' class='view button' >\n";

                html += "<lord-icon class='icon' src='https://cdn.lordicon.com/gsqxdxog.json' trigger='morph' colors='primary:#bc2a4a,secondary:#bc2a4a' stroke='80' style='width:40px;height:40px'></lord-icon></a>\n";
                
                html += "</div></div></div>\n";
            }

            html += "</section>\n";
            html += fundo_cliente;

            res.send(html)}
        else{
            res.redirect('404page');
        }
    });
});

//=======================================

//     Confirma Elimina PRODUTO  DA WISHLIST

//=======================================
router
.route("/eliminaproduto")
.get((req, res)=>{
    if(req.query.id_wishlist){
        
        var query = "Select  titulo_produto, id_produto, fotografia_produto FROM Wishlists_Produtos inner join Produto using(id_produto) inner join Wishlist using(id_wishlist) inner join Cliente using(id_cliente) WHERE id_wishlist = " + req.query.id_wishlist + ";";

       
        runQuery(query, function(err, result, fields){
            
                var html="";
                html += topo_cliente;
                html += nav_cliente;
                html += "<section class='home' id=''>\n";
                html += "<div class='container editaproduto'>\n";
                
                html += "<form name='formulario' method='get' action='processa_elimina_produto_wishlist' >\n";
                html += "<div class='row'>\n";
                html += "  <div class='col-4 imgaltera'>\n";
                html += " <input type='file' id='file' name='fotografia_produto'>\n";
                // FOTOGRAFIA inserida dinamicmente
                html += "<img src='/uploads/" + result[0].fotografia_produto + "' width='100%' height='100%'>\n";
               
                html += "</div>\n";

                html += "  <div class='col-6 formaltera'>\n";
                //TITULO DO PRODUTO
                html += "<input type='hidden' value='"+ req.query.id_wishlist +"'name='id_wishlist'>"
                html += "<input type='hidden' value='"+ result[0].id_produto +"'name='id_produto'>"

                html += "<h3>Eliminar " +  result[0].titulo_produto + "?</h3>"
                html += "<a href='homepageClientes' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                html += "<br>"
                html += "<p>Confirma a eliminação de: </p>"
                html += "<div class='row mb-3 inputproduto'><label for='Produto' class='col-sm-5 col-form-label col-form-label-sm'>Produto:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='titulo' placeholder='titulo' value=' " + result[0].titulo_produto +"' name='titulo_produto' disabled></div></div>\n";
               
                //BOTÃO DE ELIMINAR 
                html += "<button type='submit'>ELIMINAR</button>\n";
                html += "</form>"
                html += "</div></div>\n";
                html += "</section>\n";
                html += fundo_cliente;
                
                res.send(html)
   
        }); 
        
    }
    else{
        res.redirect('404page');
    }
}); 

//=======================================

//     PROCESSA Elimina  PRODUTO DA WISHLIST

//=======================================
router
    .route("/processa_elimina_produto_wishlist")
    .get((req, res)=>{
        
    if (req.query.id_wishlist) {
        var query = "DELETE FROM  Wishlists_Produtos Where id_wishlist = " + req.query.id_wishlist +';';

        query += "DELETE FROM Wishlist Where id_wishlist = " + req.query.id_wishlist+';';

        console.log(query)
        runQuery(query, function (err, result, fields){
            if (result[0] && result[0].affectedRows > 0) {
                res.redirect('wishlist');
            } else {
                res.redirect('404page');
            }
        });
    } 
    else {
        res.redirect('erroinput3');
    }
});

//=======================================

//     MOSTRAR PERFIL CLIENTE

//=======================================
router
.route("/perfil")
.get((req, res)=>{

    var query = "SELECT nome_cliente, username_cliente, dn_cliente, morada_cliente, mail_cliente, pasword_cliente, profissao_cliente FROM Cliente where id_cliente =" + req.session.id_cliente + ";";
    var html="";
    
    
    runQuery(query, function (err, result, fields) {
        if (result.length > 0) { 
            html += topo_cliente;
            html += nav_cliente;
            html += "<section class='home' id=''>\n";
            html += "<div class='container mostraperfil'>\n";
            
            html += "<div class='row'>\n";
            
            html += " <div class='col-6 perfilfunc'>\n";
            //TITULO DA PÁGINA
            html += "<h3>PERFIL</h3>"
            // INFO DO CLIENTE
            html += "<p>Nome: <span> " + result[0].nome_cliente + "</span></p>"
            html += "<p>Username: <span> " + result[0].username_cliente + "</span></p>"
            html += "<p>Data de nascimento: <span> "  + new Date(result[0].dn_cliente).getFullYear() + "/" + (new Date(result[0].dn_cliente).getMonth() +1) + "/" + new Date(result[0].dn_cliente).getDate() 
            + "</span></p>"
            html += "<p>Morada: <span> " + result[0].morada_cliente + "</span></p>"
            html += "<p>Email: <span>  " + result[0].mail_cliente + "</span></p>"
            html += "<p>Profissão: <span> " + result[0].profissao_cliente + "</span></p>"
                
            html +=  "<form name='formulario' method='get' action='editarperfil'>\n";
            html += "<button type='submit'>EDITAR</button>\n";
            html += "</form>"
            html += "</div>\n";

            html += " <div class='col-6 d-flex align-content-center align-items-center mudapass'>\n";
            html += "<a href='editarpassword'>NOVA PASSWORD</a>\n";
            html += "</div>\n";

            html += "</div>\n";
            html += "</div>\n";
            html += "</section>\n";
            html += fundo_cliente;

            res.send(html)}
        else{
            res.redirect('404page');
        }
    });
});

//=======================================

//     EDITAR PERFIL CLIENTE

//=======================================
router
.route("/editarperfil")
.get((req, res)=>{

    var query = "SELECT nome_cliente, username_cliente, dn_cliente, morada_cliente, mail_cliente, pasword_cliente, profissao_cliente FROM Cliente where id_cliente =" + req.session.id_cliente + ";";
    var html="";
    
    runQuery(query, function (err, result, fields) {
        if(result && result.length > 0) { 
            html += topo_cliente;
            html += nav_cliente;
            html += "<section class='home' id=''>\n";
            html += "<div class='container editaproduto'>\n";
            //form
            html += "<form name='formulario' method='get' action='editar_perfil_processa' >\n";
            //TITULO
            html += "<div class='row'>\n";
            html += "<div class='col-11'>\n";
            html += "<h3>Alterar meu perfil</h3>"
            html += "</div>\n";
            //botao para regressar
            html += "<div class='col-1'>\n";
            html += "<a href='perfil' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
            html += "</div>\n";
            html += "</div>\n";
            
            html += "<div class='formcompra'>\n";
            // NOME DO CLIENTE
            html += "<div class='row mb-3 inputproduto'><label for='nome_clienteunc' class='col-sm-2 col-form-label col-form-label-sm'>Nome:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='nome_cliente' name='nome_cliente' value='" + result[0].nome_cliente + "'></div></div>\n";
            //USERNAME DOCLIENTE
            html += "<div class='row mb-3 inputproduto'><label for='username_cliente' class='col-sm-2 col-form-label col-form-label-sm'>Username:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='username_cliente' name='username_cliente' value='" + result[0].username_cliente + "'></div></div>\n";
            //DATA DE NASCIMENTO
            html += "<div class='row mb-3 inputproduto'><label for='dtn_cliente' class='col-sm-2 col-form-label col-form-label-sm'>Data de Nascimento:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='dtn_cliente' name='dn_cliente' value='"  + new Date(result[0].dn_cliente).getFullYear() + "/" + (new Date(result[0].dn_cliente).getMonth() +1)+ "/" + new Date(result[0].dn_cliente).getDate() 
            + "'></div></div>\n";
            //MORADA 
            html += "<div class='row mb-3 inputproduto'><label for='morada_cliente' class='col-sm-2 col-form-label col-form-label-sm'>Morada:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='morada_cliente' name='morada_cliente' value='" + result[0].morada_cliente + "'></div></div>\n";
            //EMAIL
            html += "<div class='row mb-3 inputproduto'><label for='mail_cliente' class='col-sm-2 col-form-label col-form-label-sm'>Email:</label><div class='col-sm-10'><input type='email' class='form-control form-control-sm' id='mail_cliente' name='mail_cliente' value='" + result[0].mail_cliente + "'></div></div>\n";
            //EMAIL
            html += "<div class='row mb-3 inputproduto'><label for='profissao_cliente' class='col-sm-2 col-form-label col-form-label-sm'>profissao:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='profissao_cliente' name='profissao_cliente' value='" + result[0].profissao_cliente + "'></div></div>\n";

            html += "</div>\n";
            // BOTÃO QUE SALVA AS ALTERAÇÕES
            html += "<button type='submit'>SALVAR</button>\n"; 
            html += "</form>\n";
            html += "</div>\n";
            html += "</div>\n";
            html += "</section>\n";
            html += fundo_cliente;

        
            res.send(html)
        }
        else{
            res.redirect('404page');
        }
    });
}); 

//=======================================

//     ALTERA PASSWORD CLIENTE

//=======================================
router
.route("/editarpassword")
.get((req, res)=>{

  
    var query = "SELECT pasword_cliente FROM Cliente WHERE id_cliente =" + req.session.id_cliente + ";"

    var html="";
    runQuery(query, function (err, result, fields) {
        html += topo_cliente;
        html += nav_cliente;
        html += "<section class='home' id=''>\n";
        html += "<div class='container violeta'>\n";
        html += "<div class='perfilfunc'>\n";
        html += " <div class='input_func row'>\n";

        //form
        html +=  "<form name='formulario' method='get' action='edita_passsword_processa'>\n";
        
        //hash da passsword antiga escondida
        html += "<div class='col-6'><label></label><input type='hidden' name='password_escondida' value='"+result[0].pasword_cliente +"'></div>\n"; 

        //ANTIGA PASSWORD
        html += "<div class='col-6'><label>Password Antiga:</label><input class='form-control form-control-sm' type='password' name='password_cliente_antiga' </div>\n";

        //NOVA PASSWORD
        html += "<div class='col-6'><label>Nova password:</label><input class='form-control form-control-sm' type='password' name='nova_password_cliente'></div>\n";
        html += "</div>\n";
        // BOTÃO QUE SALVA AS ALTERAÇÕES

        html += "<button type='submit'>SALVAR</button>\n"; 
        html += "</div>\n";
        html += "</div>\n";
        html += "</form>\n";
        html += "</section>\n";
        html += fundo_cliente;

        res.send(html)
    });
});

//=======================================

//     PROCESSA PASSWORD CLIENTE

//=======================================
router
.route("/edita_passsword_processa")
.get((req, res)=>{
    
    
    let password = crypto.createHash("sha1").update(req.query.password_cliente_antiga).digest('hex');
    
    var query = "UPDATE Cliente SET pasword_cliente=sha('" + req.query.nova_password_cliente + "') WHERE id_cliente =" + req.session.id_cliente + ";"
    var html="";
    
    if(password == req.query.password_escondida){
       
       runQuery(query, function (err, result, fields) {
            
        if (result && result.affectedRows > 0) {
            //direcionar para a pagina de produtos
            res.redirect('perfil');

        } else {
            res.redirect('404page');
        }
            
        });
    } else{
        res.redirect('erroinput');
    }  
    
});





//=======================================

//    PROCESSSA EDITAR PERFIL FUNCIONARIO

//=======================================
router
.route("/editar_perfil_processa")
.get((req, res)=>{

    var query = "UPDATE Cliente SET nome_cliente='" + req.query.nome_cliente + "', username_cliente='" + req.query.username_cliente + "', mail_cliente='" + req.query.mail_cliente + "', morada_cliente='" + req.query.morada_cliente + "',dn_cliente='" + req.query.dn_cliente + "', profissao_cliente='" + req.query.profissao_cliente + "' WHERE id_cliente= " + req.session.id_cliente + ";";
    
    if(req.query.nome_cliente && req.query.username_cliente && req.query.mail_cliente && req.query.morada_cliente && req.query.dn_cliente && req.query.profissao_cliente)
        runQuery(query, function (err, result, fields) {
       
            if(result && result.affectedRows > 0){
                res.redirect('perfil');
            }
            else{
                res.redirect('404page');
            }            
        });
    else{
        res.redirect('404page');
   }
}); 


//=======================================

//     PÁGINA DE ERRO

//=======================================
router
.route("/erroinput")
.get((req, res)=>{
    var html='';
    html += topo_cliente;
    html += "<div class='fundobk'>\n";
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Verifica se inseriste corretamente os dados</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='homepageClientes' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    html += "</div>\n";
    html+= fundo_cliente;
    res.send(html)
});

router
.route("/erroinput2")
.get((req, res)=>{
    var html='';
    html += topo_cliente;
    html += "<div class='fundobk'>\n";
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Tens que preencher todos os campos</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='homepageClientes' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    html += "</div>\n";
    html+= fundo_cliente;
    res.send(html)
});

router
.route("/erroinput3")
.get((req, res)=>{
    var html='';
    html += topo_cliente;
    html += "<div class='fundobk'>\n";
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Tens que selecionar o que pretendes eliminar</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='homepageClientes' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    html += "</div>\n";
    html+= fundo_cliente;
    res.send(html)
});

router
.route("/404page")
.get((req, res)=>{
    var html='';
    html += topo_cliente;
    
    html += "<div class='container errpage'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11 gatoerr'>\n";
    html += "<lottie-player src='https://assets4.lottiefiles.com/packages/lf20_ueovf9mk.json'  background='transparent'  speed='1'  style='width: 600px; height: 600px;' autoplay></lottie-player>"
    html += "<h3>Ops...Alguma coisa correu mal</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='homepageClientes' class='closebtn' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    
    html += "</div>\n";
    html += "</div>\n";
    html+= fundo_cliente;
    res.send(html)
});

//=======================================

//     LOGOUT

//=======================================
router
.route("/logout")
.get((req, res)=>{
    res.redirect('../'); 
    req.session.destroy();
    });
  



//******************************************************************************************************************/
// função para a execução das queries, garantindo que o código que depende dos seus resultados aguarda pelos mesmos
function runQuery(query, callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.error(err);
        }
        connection.query(query, function (err, result, fields) {
            if (err) {
                console.error(err);
            }
            connection.release();
            return callback(err, result, fields);
        });
    });
}

module.exports = router;