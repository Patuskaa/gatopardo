const express = require("express");
const crypto = require('crypto');
let router = express.Router();
let data = new Date();

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

//TOPO DA PÁGINA ARTISTA

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

// NAVBARRA DOS ARTISTAS
var nav_cliente = "";
nav_cliente +="<nav class='sidebar close'>\n";
nav_cliente +="<header>\n";
nav_cliente +="<div class='image-text'>\n";
nav_cliente +="<a href ='homepageArtistas' class='gatopardologo'>\n";
nav_cliente +="<span class='image'><img src='/Gato Pardo.svg' alt='logo'></span></a>\n";
nav_cliente +="<div class='text logo-text'><span class='name'>Gato Pardo</span><span class='profession'>Artista</span></div></div>\n";
nav_cliente +="<i class='bx bx-chevron-right toggle'></i></header>\n";
nav_cliente +="<div class='menu-bar'>\n";
nav_cliente +="<div class='menu'>\n";
nav_cliente +="<ul class='menu-links'>\n";
//PRODUTOS
nav_cliente +="<li class='nav-link'><a href='homepageArtistas'><lord-icon class='icon' src='https://cdn.lordicon.com/rwotyanb.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Produtos</span></a></li>\n";
//ADICIONAR PRODUTOS
nav_cliente +="<li class='nav-link'><a href='adicionarproduto'><lord-icon class='icon' src='https://cdn.lordicon.com/mecwbjnp.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'></lord-icon><span class='text nav-text'>Uplaud Produtos</span></a></li>\n";
//ARTISTAS
nav_cliente +="<li class='nav-link'><a href='artistas'><lord-icon class='icon' src='https://cdn.lordicon.com/vqmupdxd.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Artistas</span></a></li>\n";
//EVENTOS
nav_cliente +="<li class='nav-link'><a href='eventos'><lord-icon class='icon' src='https://cdn.lordicon.com/kdruzgxz.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Eventos</span></a></li>\n";
//ADICIONAR eventos
nav_cliente +="<li class='nav-link'><a href='adicionarevento'><lord-icon class='icon' src='https://cdn.lordicon.com/lupuorrc.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'></lord-icon><span class='text nav-text'>Uplaud Produtos</span></a></li>\n";
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
    .route("/homepageArtistas")
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
                
                // FOTOGRAFIA inserida dinamicmente
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
                html += "<a href='homepageArtistas' class='closebtn'> <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                html += "<br>"
                
                
                
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

//     ADICIONAR PRODUTOS

//=======================================
router
.route("/adicionarproduto")
.get((req, res)=>{
    var html="";
    html += topo_cliente;
    html += nav_cliente;
    html += "<section class='home' id=''>\n";
    html += "<div class='container adicionaproduto'>\n";
   
    html += "<form name='formulario' method='post' action='adicionar_produto_processa' enctype='multipart/form-data' >\n";
       
            html += "<div class='row'>\n";
            html += "<div class='col-11'>\n";
            html += "<h3>Adiciona PRODUTO</h3>"
            html += "</div>\n";
            html += "<div class='col-1'>\n";
            html += "<a href='homepageArtistas' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
            html += "</div>\n";
            html += "</div>\n";

            html += "<div class='row imgadiciona'>\n";
            html += "<div class='col-3'>\n";
            html += "<p><lottie-player src='https://assets4.lottiefiles.com/packages/lf20_vyqg2tjs.json'  background='transparent'  speed='1'  style='width: 200px; height: 400px;'  loop  autoplay></lottie-player></p>\n";
            html += "</div>\n";
            html += "<div class='col-9 inputfile'>\n";
            // FICHEIRO IMAGEM
            html += " <p>Para que os clientes vejam o teu produto precisas de colocar uma foto</p>\n";
            html += " <input type='file' id='file' name='fotografia_produto'>\n";
            html += "<label for='file'><lord-icon src='https://cdn.lordicon.com/vixtkkbk.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:30px;height:30px'> </lord-icon> Clica aqui</label>\n";
            html += "</div>\n";
            html += "</div>\n";

            html += "<div class='formproduto'>\n";
            html += "<div class='row'>\n";
            html += "<div class='col-6'>\n";
            //TITULO DO PRODUTO
            html += "<div class='row mb-3 inputproduto'><label for='titulo' class='col-sm-2 col-form-label col-form-label-sm'>Titulo:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='titulo' placeholder='titulo' name='titulo_produto'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-6'>\n";
            //DATA ELABORAÇÃO
            html += "<div class='row mb-3 inputproduto'><label for='data' class='col-sm-5 col-form-label col-form-label-sm'>Data de Elaboração:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='data' placeholder='2020/05/12' name='dt_elaboracao_produto'></div></div>\n";
            html += "</div>\n";
            
            html += "<div class='row'>\n";
            html += "<div class='col-6'>\n";
            //MATERIAL UTILIZADO
            html += "<div class='row mb-3 inputproduto'><label for='material' class='col-sm-5 col-form-label col-form-label-sm'>Material Utilizado:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='material' placeholder='material' name='material_produto'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-6'>\n";
            //CATEGORIA ARTISTICA
            html += "<div class='row mb-3 inputproduto'><label for='categoria' class='col-sm-5 col-form-label col-form-label-sm'>Categoria de arte:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='categoria' placeholder='categoria' name='categoria_produto'></div></div>\n";
            html += "</div>\n";
            
            html += "<div class='row'>\n";
            html += "<div class='col-4'>\n";
            //PREÇO DE VENDA 
            html += "<div class='row mb-3 inputproduto'><label for='preco_venda' class='col-sm-7 col-form-label col-form-label-sm'>Preço de venda:</label><div class='col-sm-5'><input type='number' class='form-control form-control-sm' id='preco_venda' placeholder='50' name='preco_venda'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-4'>\n";
            //PRECO DE COMPRA 
            html += "<div class='row mb-3 inputproduto'><label for='preco_compra' class='col-sm-7 col-form-label col-form-label-sm'>Preço de compra:</label><div class='col-sm-5'><input type='number'' class='form-control form-control-sm' id='preco_compra' placeholder='45' name='preco_compra'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-4'>\n";
            //STOCK 
            html += "<div class='row mb-3 inputproduto'><label for='stock' class='col-sm-2 col-form-label col-form-label-sm'>Stock:</label><div class='col-sm-10'><input type='number' class='form-control form-control-sm' id='stock' placeholder='25' name='stock_produto'></div></div>\n";
            html += "</div>\n";
            
            html +="</div></div>\n"; 
                
            //BOTÃO DE SALVAR 
            html += "<button type='submit'>SALVAR</button>\n";
            html += "</form>\n";
            html += "</div>\n";   

            html += "</div></div>\n";
            html += "</section>\n";
            html += fundo_cliente;
            
            res.send(html)
            
    
});
//=======================================

//     PROCESSA ADICIONAR PRODUTO 

//=======================================

router
.route("/adicionar_produto_processa")
.post((req, res)=>{
        if(req.body.titulo_produto  && req.body.dt_elaboracao_produto && req.body.material_produto && req.body.categoria_produto && req.body.preco_compra && req.body.preco_venda && req.body.stock_produto && req.files.fotografia_produto){ 
            var query = "insert into Produto values(null, '" + req.body.titulo_produto + "', '" + req.body.dt_elaboracao_produto + "', '" + req.body.material_produto + "', '" + req.body.categoria_produto + "', " + req.body.preco_compra + ", " + req.body.preco_venda + ", " + req.body.stock_produto + " , '" + req.files.fotografia_produto.name + "' , " + req.session.id_artista + ");";
        
            runQuery(query, function (err, result, fields) {     
                //adicionar fotografia a pasta
                if(result && result.affectedRows > 0){
                    req.files.fotografia_produto.mv("public/uploads/" + req.files.fotografia_produto.name, function (err) {
                        if (err) console.error(err);
                    });
                    //direcionar para a pagina de produtos
                    res.redirect('homepageArtistas');
                }
                else{
                    res.redirect('erroinput');
                }  
            });
        
        } 
        else{
            res.redirect('erroinput2');
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

//     ADICIONAR EVENTO

//=======================================
router
.route("/adicionarevento")
.get((req, res)=>{
    var html="";
    html += topo_cliente;
    html += nav_cliente;
    html += "<section class='home' id=''>\n";
    html += "<div class='container adicionaprodutos'>\n";
   
    html += "<form name='formulario' method='post' action='adicionar_evento_processa' enctype='multipart/form-data' >\n";
    
    html += "<div class='formprodutos'>"
            html += "<div class='row'>\n";
            html += "<div class='col-11'>\n";
            html += "<h3>Adiciona EVENTO</h3>"
            html += "</div>\n";
            html += "<div class='col-1'>\n";
            html += "<a href='homepageArtistas' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
            html += "</div>\n";
            html += "</div>\n";
            

            
            html += "<div class='row'>\n";
            html += "<div class='col-12'>\n";
            //TITULO DO PRODUTO
            html += "<div class='row mb-3 inputproduto'><label for='titulo' class='col-sm-2 col-form-label col-form-label-sm'>Titulo:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='titulo' placeholder='titulo' name='titulo_evento'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-12'>\n";
            //Descrição evento 
            html += "<div class='row mb-3 inputproduto'><label for='descricao_evento' class='col-sm-2 col-form-label col-form-label-sm'>Biografia:</label> <div class='col-sm-10'><textarea name='descricao_evento' id='descricao_evento' rows='4' cols='100' maxlength='1200'></textarea></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-6'>\n";
            //DATA inicio
            html += "<div class='row mb-3 inputproduto'><label for='datainicio' class='col-sm-5 col-form-label col-form-label-sm'>Data de Inicio:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='datainicio' placeholder='2020/05/12' name='dt_inicio'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-6'>\n";
            //DATA fim
            html += "<div class='row mb-3 inputproduto'><label for='datafim' class='col-sm-5 col-form-label col-form-label-sm'>Data de Fim:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='datafim' placeholder='2020/05/12' name='dt_fim'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-6'>\n";
            //Hora inicio
            html += "<div class='row mb-3 inputproduto'><label for='horainicio' class='col-sm-5 col-form-label col-form-label-sm'>Hora ínicio:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='horainicio' placeholder='19:00' name='hora_inicio'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-6'>\n";
            //Hora fim
            html += "<div class='row mb-3 inputproduto'><label for='horafim' class='col-sm-5 col-form-label col-form-label-sm'>Hora Fim:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='horafim' placeholder='22:00' name='hora_fim'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-6'>\n";
            //LOCAL
            html += "<div class='row mb-3 inputproduto'><label for='local' class='col-sm-5 col-form-label col-form-label-sm'>Local:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='local' name='local_evento'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-6'>\n";
            //MORADA
            html += "<div class='row mb-3 inputproduto'><label for='morada' class='col-sm-5 col-form-label col-form-label-sm'>Morada:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='morada' name='morada_evento'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-6'>\n";
            //Preço
            html += "<div class='row mb-3 inputproduto'><label for='preco' class='col-sm-5 col-form-label col-form-label-sm'>Preço:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='preco' name='preco_evento'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-6'>\n";
            //Lotação
            html += "<div class='row mb-3 inputproduto'><label for='lotacao' class='col-sm-5 col-form-label col-form-label-sm'>Lotação:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='lotacao' name='lotacao_evento'></div></div>\n";
            html += "</div>\n";
            html += "<div class='col-12'>\n";
            //Link para compra bilhete
            html += "<div class='row mb-3 inputproduto'><label for='link' class='col-sm-5 col-form-label col-form-label-sm'>Link compra bilhete:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='link' name='link_evento'></div></div>\n";
            html += "</div>\n";   
            //BOTÃO DE SALVAR 
            html += "<button type='submit'>SALVAR</button>\n";
            html += "</form>\n";
            html += "</div>\n";   

            html += "</div></div>\n";
            html += "</section>\n";
            html += fundo_cliente;
            
            res.send(html)
            
    
});
//=======================================

//     PROCESSA ADICIONAR EVENTO

//=======================================

router
.route("/adicionar_evento_processa")
.post((req, res)=>{
        if(req.body.titulo_evento  && req.body.descricao_evento && req.body.dt_inicio && req.body.dt_fim && req.body.hora_inicio && req.body.hora_fim && req.body.local_evento &&  req.body.morada_evento && req.body.preco_evento && req.body.lotacao_evento &&  req.body.link_evento){ 
            
            
            var query = "insert into Evento values(null, '" + req.body.titulo_evento + "', '" + req.body.dt_inicio + "', '" + req.body.dt_fim + "', '" + req.body.hora_inicio + "', '" +req.body.hora_fim + "', '" + req.body.local_evento + "', '" + req.body.morada_evento + "' , '" + req.body.preco_evento + "' ,'" + req.body.descricao_evento + "','" + req.body.lotacao_evento + "', '" + req.body.link_evento + "'); insert into Artistas_Eventos values ('"+ req.session.id_artista +"', LAST_INSERT_ID());";
        
            console.log(query);
            runQuery(query, function (err, result, fields) {     
                //adicionar fotografia a pasta
                if(result[1] && result[1].affectedRows > 0){
                    
                    //direcionar para a pagina de produtos
                    res.redirect('homepageArtistas');
                }
                else{
                    res.redirect('erroinput');
                }  
            });
        
        } 
        else{
            res.redirect('erroinput2');
        }
 });


//=======================================

//     MOSTRAR PERFIL ARTISTA

//=======================================
router
.route("/perfil")
.get((req, res)=>{

    var query = "SELECT nome_artistico_artista, nome_real_artista, username_artista, categoria_arte_artista, localidade_artista, mail_artista, instagram_artista, behance_artista, facebook_artista, website_artista, biografia_artista, password_artista FROM Artista where id_artista =" + req.session.id_artista + ";";
    var html="";
    
    
    runQuery(query, function (err, result, fields) {
        if (result.length > 0) { 
            html += topo_cliente;
            html += nav_cliente;
            html += "<section class='home' id=''>\n";
            html += "<div class='container mostraperfil'>\n";
            
            html += "<div class='row'>\n";
            
            html += " <div class='col-8 perfilfunc'>\n";
            //TITULO DA PÁGINA
            html += "<h3>PERFIL</h3>"
            // INFO DO Artista
            html += "<p>Nome: <span> " + result[0].nome_real_artista + "</span></p>"
            html += "<p>Nome Artístico: <span> " + result[0].nome_artistico_artista + "</span></p>"
            html += "<p>Username: <span> " + result[0].username_artista + "</span></p>"
            html += "<p>Categoria artística: <span> " + result[0]. categoria_arte_artista + "</span></p>"
            html += "<p>Localidade: <span> " + result[0].localidade_artista + "</span></p>"
            html += "<p>Email: <span>  " + result[0].mail_artista + "</span></p>"
            
            html += " <div class='button-wrap d-inline-flex iconredes'>\n";
            html += "<a href='https://www.facebook.com/ "+ result[0].facebook_artista +"' >facebook</a>\n";
            html += "<a href='https://www.instagram.com/ "+ result[0].instagram_artista +"' >instagram</a>\n";
            html += "<a href='https://www.behance.com/ "+ result[0].behance_artista +"' >behance</a>\n"; 
            html += "<a href='"+ result[0].website_artista +"' >website</a>\n";
            html += "</div>\n";
            
            html += "<p>Biografia: <span>  " + result[0].biografia_artista + "</span></p>"   
            
            html +=  "<form name='formulario' method='get' action='editarperfil'>\n";
            html += "<button type='submit'>EDITAR</button>\n";
            html += "</form>"
            html += "</div>\n";
            html += "<div class='btnpass'> "
            html += "<a href='editarpassword'>NOVA PASSWORD</a>\n";
            html += "</div>\n";
            
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

//     EDITAR PERFIL Artista

//=======================================
router
.route("/editarperfil")
.get((req, res)=>{

    var query = "SELECT nome_artistico_artista, nome_real_artista, username_artista, categoria_arte_artista, localidade_artista, mail_artista, instagram_artista, behance_artista, facebook_artista, website_artista, biografia_artista, password_artista FROM Artista where id_artista =" + req.session.id_artista + ";";
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
            // NOME DO ARTISTA
            html += "<div class='row mb-3 inputproduto'><label for='nome_artista' class='col-sm-2 col-form-label col-form-label-sm'>Nome:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='nome_artista' name='nome_artista' value='" + result[0].nome_real_artista + "'></div></div>\n";
             // NOME ARTISTICO
            html += "<div class='row mb-3 inputproduto'><label for='nome_artistico' class='col-sm-2 col-form-label col-form-label-sm'>Nome artístico:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='nome_artistico' name='nome_artistico' value='" + result[0].nome_artistico_artista + "'></div></div>\n";
            //USERNAME DO ARTISTA
            html += "<div class='row mb-3 inputproduto'><label for='username_artista' class='col-sm-2 col-form-label col-form-label-sm'>Username:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='username_artista' name='username_artista' value='" + result[0].username_artista + "'></div></div>\n";
            //CATEGORIA
            html += "<div class='row mb-3 inputproduto'><label for='categoria_arte_artista' class='col-sm-2 col-form-label col-form-label-sm'>Categoria artística:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='categoria_arte_artista' name='categoria_arte_artista' value='" + result[0].categoria_arte_artista + "'></div></div>\n";
            //LOCALIDADE
            html += "<div class='row mb-3 inputproduto'><label for='localidade_artista' class='col-sm-2 col-form-label col-form-label-sm'>Localidade:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='localidade_artista' name='localidade_artista' value='" + result[0].localidade_artista + "'></div></div>\n";
            //EMAIL
            html += "<div class='row mb-3 inputproduto'><label for='mail_artista' class='col-sm-2 col-form-label col-form-label-sm'>Email:</label><div class='col-sm-10'><input type='email' class='form-control form-control-sm' id='mail_artista' name='mail_artista' value='" + result[0].mail_artista + "'></div></div>\n";
    
            //REDES SOCIAIS
            html += "<div class='row mb-3 inputproduto'><label for='facebook_artista' class='col-sm-2 col-form-label col-form-label-sm'>Facebook</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='facebook_artista' name='facebook_artista' value='" + result[0].facebook_artista + "'></div></div>\n";
            html += "<div class='row mb-3 inputproduto'><label for='instagram_artista' class='col-sm-2 col-form-label col-form-label-sm'>Instagram:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='instagram_artista' name='instagram_artista' value='" + result[0].instagram_artista + "'></div></div>\n";
            html += "<div class='row mb-3 inputproduto'><label for='behance_artista' class='col-sm-2 col-form-label col-form-label-sm'>Behance:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='behance_artista' name='behance_artista' value='" + result[0].behance_artista + "'></div></div>\n";
            //WEBSITE
            html += "<div class='row mb-3 inputproduto'><label for='website_artista' class='col-sm-2 col-form-label col-form-label-sm'>Website:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='website_artista' name='website_artista' value='" + result[0].website_artista + "'></div></div>\n";

            //BIOGRAFIA
            html += "<div class='row mb-3 inputproduto'><label for='biografia_artista' class='col-sm-2 col-form-label col-form-label-sm'>Biografia:</label> <div class='col-sm-10'><textarea name='biografia_artista' id='biografia_artista' rows='4' cols='100' maxlength='1200'>" + result[0].biografia_artista + "</textarea></div></div>\n";

            console.log(result[0].biografia_artista);
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

//     ALTERA PASSWORD ARTISTA
//=======================================
router
.route("/editarpassword")
.get((req, res)=>{

  
    var query = "SELECT password_artista FROM Artista WHERE id_artista =" + req.session.id_artista + ";"

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
        html += "<div class='col-6'><label></label><input type='hidden' name='password_escondida' value='"+result[0].password_artista +"'></div>\n"; 

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
    var query = "UPDATE Artista SET password_artista=sha('" + req.query.nova_password_cliente + "') WHERE id_artista =" + req.session.id_artista + ";"
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

    var query = "UPDATE Artista SET nome_real_artista='" + req.query.nome_artista + "', nome_artistico_artista ='"+ req.query.nome_artistico + "', username_artista='" + req.query.username_artista + "', categoria_arte_artista = '"+ req.query.categoria_arte_artista + "', mail_artista='" + req.query.mail_artista + "', localidade_artista='" + req.query.localidade_artista + "',facebook_artista='" + req.query.facebook_artista + "', instagram_artista='" + req.query.instagram_artista + "', behance_artista='" + req.query.behance_artista + "', website_artista='" + req.query.website_artista + "',  biografia_artista='" + req.query.biografia_artista + "' WHERE id_artista= " + req.session.id_artista + ";";
    var html="";
    console.log(query);
    if(req.query.nome_artista && req.query.username_artista && req.query.categoria_arte_artista && req.query.mail_artista && req.query.localidade_artista && req.query.biografia_artista)
        
        runQuery(query, function (err, result, fields) {
       
            if(result && result.affectedRows > 0){
                res.redirect('perfil');
            }
            else{
                res.redirect('404page');
            }            
        });
    else{
        res.redirect('erroinput');
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
    html += "<a href='homepageArtistas' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
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
    html += "<a href='homepageArtistas' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
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
    html += "<a href='homepageArtistas' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
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
    html += "<a href='homepageArtistas' class='closebtn' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
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