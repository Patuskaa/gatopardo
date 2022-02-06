"use strict";

const express = require("express");
const crypto = require('crypto');
const { htmlPrefilter } = require("jquery");
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

// TOPO DA PAGINA FUNCIONÁRIO 
var topo_func = "";
topo_func += "<head>\n";
topo_func += "<html>\n";
topo_func += "<!DOCTYPE html>\n";
topo_func += "<title>Gato Pardo</title>\n";
topo_func += "<meta charset='utf8'>\n";
//FONTAWESOME
topo_func += "<script src='https://kit.fontawesome.com/41df33ebd8.js' crossorigin='anonymous'></script> \n";
// BOOTSTRAP 
topo_func += "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>\n";
//LORDICON ICON-ANIMADOS
topo_func += "<script src='https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js'></script>\n";
topo_func += "<script src=https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js></script>\n";
//BOXICON
topo_func += "<link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>\n";
// CSS 
topo_func += "<link rel='stylesheet' href='/main.css'>\n";
topo_func += "</head>\n";
topo_func += "<body>\n";

// NAVBARRA DOS FUNCIONARIOS 
var nav_func = "";
nav_func +="<nav class='sidebar close'>\n";
nav_func +="<header>\n";
nav_func +="<div class='image-text'>\n";
nav_func +="<a href ='homepageFuncionarios' class='gatopardologo'>\n";
nav_func +="<span class='image'><img src='/Gato Pardo.svg' alt='logo'></span></a>\n";
nav_func +="<div class='text logo-text'><span class='name'>Gato Pardo</span><span class='profession'>Funcionário</span></div></div>\n";
nav_func +="<i class='bx bx-chevron-right toggle'></i></header>\n";
nav_func +="<div class='menu-bar'>\n";
nav_func +="<div class='menu'>\n";
nav_func +="<ul class='menu-links'>\n";
//PRODUTOS
nav_func +="<li class='nav-link'><a href='produtos'><lord-icon class='icon' src='https://cdn.lordicon.com/rwotyanb.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Produtos</span></a></li>\n";
//ARTISTAS
nav_func +="<li class='nav-link'><a href='artistas'><lord-icon class='icon' src='https://cdn.lordicon.com/vqmupdxd.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Artistas</span></a></li>\n";
//EVENTOS
nav_func +="<li class='nav-link'><a href='eventos'><lord-icon class='icon' src='https://cdn.lordicon.com/kdruzgxz.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Eventos</span></a></li>\n";
//CLIENTES
nav_func +="<li class='nav-link'><a href='clientes'><lord-icon class='icon' src='https://cdn.lordicon.com/uukerzzv.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Clientes</span></a></li>\n";
//FUNCIONARIOS
nav_func +="<li class='nav-link'><a href='funcionarios'><lord-icon class='icon' src='https://cdn.lordicon.com/eszyyflr.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Funcionários</span></a></li>\n";
//COMPRAS
nav_func +="<li class='nav-link'><a href='compras'><lord-icon class='icon' src='https://cdn.lordicon.com/cjieiyzp.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Compras</span></a></li>\n";
//VENDAS
nav_func +="<li class='nav-link'><a href='vendas'><lord-icon class='icon' src='https://cdn.lordicon.com/slkvcfos.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Vendas</span></a></li>\n";
//PERFIL 
nav_func +="<li class='nav-link'><a href='perfil'><lord-icon class='icon' src='https://cdn.lordicon.com/dxjqoygy.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Perfil</span></a></li>\n";
nav_func +="</ul>\n";
nav_func +="</div>\n";
//LOGOUT
nav_func +="<div class='bottom-content'>\n";
nav_func +="<li class='logout'><a href='logout'><lord-icon class='icon' src='https://cdn.lordicon.com/lywgqtim.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:50px;height:50px'> </lord-icon><span class='text nav-text'>Logout</span></a></li>\n";
nav_func +="</div></div>\n";
nav_func +="</nav>\n";

var fundo_func ="";
fundo_func += "<script>\n";
fundo_func += "const body = document.querySelector('body'),\n";
fundo_func += "sidebar = body.querySelector('nav'),\n";
fundo_func += "toggle = body.querySelector('.toggle');\n";
fundo_func += "toggle.addEventListener('click' , () =>{sidebar.classList.toggle('close');})\n";
fundo_func += "</script>\n";
fundo_func +="</body>\n";
fundo_func += "</html>\n";

//rotas para funcionarios após login
router
    .route("/homepageFuncionarios")
    .get((req, res)=>{
        //querys para dashboard principal 

        //total de clientes
        var query = "SELECT count(id_cliente) AS totalClientes FROM Cliente;";
        
        //total Artistas
        query +="SELECT count(id_artista) AS totalArtistas FROM Artista; ";
        
        //total Eventos
        query +="SELECT count(id_evento) AS totalEventos FROM Evento;";
        
        //Total Funcionarios
        query +="SELECT count(id_func) AS totalFuncionarios FROM Funcionario;";
        
        //total Vendas
        query += "SELECT count(id_venda) AS totalVendas FROM Venda where dt_venda like '" + data.getFullYear() + "-" + '0' + (data.getMonth() +1) + "-__';";
        
        //total compras
        query += "SELECT count(id_compra) AS totalCompras FROM Compra where dt_compra like '" + data.getFullYear() + "-" + '0'+ (data.getMonth() +1) + "-__';";
        
        //lucro Mensal
        query += "SELECT vendas - compras as lucroTotal FROM (select sum(total_vendas) as vendas from (select titulo_produto, sum(unidades_vendidas * preco_venda) as total_vendas from Produto inner join Produto_Venda using(id_produto) inner join Venda using(id_venda) where dt_venda like '" + data.getFullYear() + "-" + '0'+ (data.getMonth() +1) + "-__' group by titulo_produto) as subconsulta_a) as subsubconsulta_a, (select sum(total_compras) as compras from (select titulo_produto, sum(unidades_compradas * preco_compra) as total_compras  from Produto inner join Produto_Compra using(id_produto) inner join Compra using(id_compra) where dt_compra like '" + data.getFullYear() + "-" + '0'+ (data.getMonth() +1) + "-__' group by titulo_produto) as subconsulta_b) as subsubconsulta_b;";
        
        //Idade média dos clientes
        query += "SELECT round(avg(floor(datediff(now(),dn_cliente) / 365.25))) as idadeMedia from Cliente;";
        
        //localidades com mais vendas 
        query+= "SELECT morada_cliente from Cliente group by morada_cliente having count(morada_cliente) = ( select max(conta) from (select morada_cliente, count(morada_cliente) as conta from Cliente group by morada_cliente) as cons);";
        
        //genero com mais vendas
        query += " SELECT genero_cliente as maisVendasGenero from Cliente group by genero_cliente having count(id_cliente) = (select max(conta) from (select genero_cliente, count(id_cliente) as conta from Cliente group by genero_cliente) as cons);";
        
        //produto mais vendido do mês
        query += "SELECT titulo_produto as produtoMaisVendido from Produto inner join Produto_Venda using(id_produto) inner join Venda using(id_venda) where dt_venda like '" + data.getFullYear() + "-" + '0'+ (data.getMonth() +1) + "-__'  GROUP BY titulo_produto having sum(unidades_vendidas)  = (select max(conta) from (select titulo_produto, sum(unidades_vendidas) as conta from Produto_Venda inner join Produto using(id_produto) inner join Venda using(id_venda) where dt_venda like '" + data.getFullYear() + "-" + '0'+ (data.getMonth() +1) + "-__' GROUP BY titulo_produto) as suconsulta);";
        
        //melhor funcionario do mês
        query += " select nome_func as melhorFuncionario from Funcionario inner join Venda using(id_func) where dt_venda like '" + data.getFullYear() + "-" + '0'+ (data.getMonth() +1) + "-__' group by nome_func having count(id_venda) = (select max(total_vendas) from (select nome_func, count(id_venda) as total_vendas from Funcionario inner join Venda using(id_func) where dt_venda like '" + data.getFullYear() + "-" + '0'+ (data.getMonth() +1) + "-__' group by nome_func) as subconsulta);";

       
        runQuery(query, function (err, result, fields) {
            var html="";
            html += topo_func;
            html += nav_func;
            
            html += "<section class='home'>\n";
            html += "<div class='container'>\n";
            html += " <div class='row'>\n";
            
            //TOTAL CLIENTES
            html += "<div class='col card_dash'><div class='number'><p class='quantidade'>" + result[0][0].totalClientes + "</p></div><div class='titulo'><h2>Total de Clientes</h2></div></div>\n";
            //TOTAL ARTISTAS
            html += "<div class='col card_dash'><div class='number'><p class='quantidade'>" + result[1][0].totalArtistas + "</p></div><div class='titulo'><h2>Total de Artistas</h2></div></div>\n";
            //TOTAL DE EVENTOS
            html += "<div class='col card_dash'><div class='number'><p class='quantidade'>" + result[2][0].totalEventos + "</p></div><div class='titulo'><h2>Total de Eventos </h2></div></div>\n";
            //TOTAL FUNCIONARIOS
            html += "<div class='col card_dash'><div class='number'><p class='quantidade'>" + result[3][0].totalFuncionarios + "</p></div><div class='titulo'><h2>Total de Funcionários </h2></div></div>\n";
            html += "</div> <div class='row'>\n";
            //TOTAL DE VENDAS por mês
            html += "<div class='col card_dash'><div class='number'><p class='quantidade'>" + result[4][0].totalVendas + "</p></div><div class='titulo'><h2>Total de Vendas Mensal </h2></div></div>\n";
            // TOTAL DE COMPRAS por mês
            html += "<div class='col card_dash'><div class='number'><p class='quantidade'>" + result[5][0].totalCompras + "</p></div><div class='titulo'><h2>Total de Compras Mensal</h2></div></div>\n";
            //LUCRO TOTAL MENSAL
            html += "<div class='col card_dash'><div class='number'><p class='quantidade'>" + result[6][0].lucroTotal + "</p></div><div class='titulo'><h2>Lucro Total Mensal</h2></div></div>\n";
            //MÉDIA DE IDADES CLIENTES
            html += "<div class='col card_dash'><div class='number'><p class='quantidade'>" + result[7][0].idadeMedia + "</p></div><div class='titulo'><h2>Idade Média dos Clientes</h2></div></div>\n";
            html += "</div> <div class='row'>\n";
            // LOCALIDADE COM MAIS VENDAS
            html += "<div class='col card_dash'><div class='titulo_info'><h2>Localidade com mais vendas</h2></div><div class='info_dash'><p class='quantidade'>" + result[8][0].morada_cliente + "</p></div></div>\n";
            //GENERO COM MAIS VENDAS
            html += "<div class='col card_dash'><div class='titulo_info'><h2>Gênero com mais vendas</h2></div><div class='info_dash'><p class='quantidade'>" + result[9][0].maisVendasGenero + "</p></div></div>\n";
            //FAIXA ETÁRIA COM MAIS VENDAS
            html += "<div class='col card_dash'><div class='titulo_info'><h2>Produto do mês</h2></div><div class='info_dash'><p class='quantidade'>" + result[10][0].produtoMaisVendido + "</p></div></div>\n";
            //MELHOR CLIENTE
            html += "<div class='col card_dash'><div class='titulo_info'><h2>Funcionário do mês</h2></div><div class='info_dash'><p class='quantidade'>" + result[11][0].melhorFuncionario + "</p></div></div>\n";
            html += "</div></div></section>\n";

            html += fundo_func;
            res.send(html)
            
        });
    });

//=======================================

//     MOSTRAR PRODUTOS

//=======================================
    router
    .route("/produtos")
    .get((req, res)=>{
        var query = " SELECT id_produto, fotografia_produto, titulo_produto, categoria_produto, material_produto, dt_elaboracao_produto, preco_venda, preco_compra,stock_produto, nome_real_artista FROM Produto inner join Artista using(id_artista) order by nome_real_artista; SELECT id_produto FROM Produto_Compra;";

        runQuery(query, function (err, result, fields) {
            if (result.length > 0) {    
                var html="";
                html += topo_func;
                html += nav_func;
                html += "<section class='home' id=''>\n";
                html += "<div class='container tb_artista'>\n";
                html += "<h3>Todos os Produtos</h3>"
                html += "<table class='table table-hover'>\n";
                html += "<thead><tr>\n";
                html += " <th scope='col'style='display:none'>id</th>\n";
                html += " <th scope='col'>Imagem</th>\n";
                html += " <th scope='col'>Produto</th>\n";
                html += " <th scope='col'>Artista </th>\n";
                html += " <th scope='col'>Data de Elaboração</th>\n";
                html += " <th scope='col'>Material</th>\n";
                html += " <th scope='col'>Categoria</th>\n";
                html += " <th scope='col'>Preço de Venda</th>\n";
                html += " <th scope='col'>Preço de Compra</th>\n";
                html += " <th scope='col'>Stock</th>\n"; 
                html += "<td> <a href='adicionarproduto'><lord-icon class='icon' src='https://cdn.lordicon.com/mecwbjnp.json' trigger='morph' colors='primary:#00AE8E,secondary:#00AE8E' stroke='80' style='width:20px;height:20px'></lord-icon></a></td>\n";

                html += " <th scope='col'></th>\n";
                html += " <th scope='col'></th>\n";
                html += " <th scope='col'></th>\n";
                html += "</tr></thead>\n";
                html += " <tbody>\n";
                // CRIAR AQUI O CICLO FOR PARA COLOCAR INFO
                for (var i = 0; i < result[0].length; i++) {
                    html += "<tr>\n";
                    html += "<th scope='row' style='display:none'>" + result[0][i].id_produto + "</th>\n";
                    html += "<td><img width='25px' src='/uploads/" + result[0][i].fotografia_produto
                    + "'></td>\n";
                    html += "<td>" + result[0][i].titulo_produto  + "</td>\n";
                    html += "<td>" + result[0][i].nome_real_artista +"</td>\n";
                    html += "<td>"  + new Date(result[0][i].dt_elaboracao_produto).getFullYear() + "/" + (new Date(result[0][i].dt_elaboracao_produto).getMonth() +1) + "/" + new Date(result[0][i].dt_elaboracao_produto).getDate() 
                    + "</td>\n";
                    html += "<td>" + result[0][i].material_produto + "</td>\n";
                    html += "<td>" + result[0][i].categoria_produto + "</td>\n";
                    html += "<td>"+ result[0][i].preco_venda + "€</td>\n";
                    html += "<td>"+ result[0][i].preco_compra + "€</td>\n";
                    html += "<td>"+ result[0][i].stock_produto + "</td>\n";
                    
                    //botao editar
                    html += "<td><a href='editarproduto?id_produto=" + result[0][i].id_produto + "'><lord-icon class='icon' src='https://cdn.lordicon.com/wloilxuq.json' trigger='loop'colors='primary:#4267B2,secondary:#4267B2' stroke='60' style='width:20px;height:20px'> </lord-icon></a></td>\n";
                    //botao apagar
                    html += "<td><a href='eliminaproduto?id_produto=" + result[0][i].id_produto + "'><lord-icon class='icon' src='https://cdn.lordicon.com/gsqxdxog.json' trigger='morph' colors='primary:#bc2a4a,secondary:#bc2a4a' stroke='80' style='width:20px;height:20px'></lord-icon></a></td>";
                    //tentativa de imprimimr botao apagar em produtos que nao se encontram na tabela compras
                    /*
                    for(var j = 0; j < result[1].length; j++){
                        if(result[0][i].id_produto != result[1][j].id_produto){
                            //insere icone do caixote do lixo
                            html += "<td><a href='eliminaproduto?id_produto=" + result[0][i].id_produto + "'><lord-icon class='icon' src='https://cdn.lordicon.com/gsqxdxog.json' trigger='morph' colors='primary:#bc2a4a,secondary:#bc2a4a' stroke='80' style='width:20px;height:20px'></lord-icon></a></td>";   
                        }  
                    }*/
                    html += "</tr>\n"; 
                    //fim de ciclo for
                }

                html += "</tbody></table></div>\n";
                html += "</section>\n";
                html += fundo_func;
                res.send(html)
            }
            else{
                res.redirect('erroinput');
            }
        });
    
    });    
   
//=======================================

//     EDITA PRODUTO

//=======================================
    
    router
    .route("/editarproduto")
    .get((req, res)=>{
        if(req.query.id_produto){
            
            var query = "SELECT id_produto, titulo_produto, dt_elaboracao_produto, material_produto, categoria_produto, preco_compra, preco_venda, stock_produto, fotografia_produto, nome_artistico_artista FROM Produto inner join Artista using(id_artista) Where id_produto =" + req.query.id_produto +";";

            runQuery(query, function(err, result, fields){
                if(result && result.length > 0) {    
                    var html="";
                    html += topo_func;
                    html += nav_func;
                    html += "<section class='home' id=''>\n";
                    html += "<div class='container editaproduto'>\n";
                   
                    html += "<form name='formulario' method='post' action='editar_produto_processa' enctype='multipart/form-data' >\n";
                    html += "  <div class='row'>\n";
                    // FICHEIRO IMAGEM
                    html += "  <div class='col-4 imgaltera'>\n";
                    html += " <input type='file' id='file' name='fotografia_produto'>\n";
                    // FOTOGRAFIA inserida dinamicmente
                    html += "<img src='/uploads/" + result[0].fotografia_produto + "' width='100%' height='100%'>\n";
                    //icone da fotografia
                    html += "<label for='file'><lord-icon src='https://cdn.lordicon.com/vixtkkbk.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:30px;height:30px'> </lord-icon> Atualizar a foto? </label>\n";
                    html += "</div>\n"; 
                    html += "  <div class='col-6 formaltera'>\n";
                    //ID_PRODUTO HIDDEN
                    html += "<input type='hidden' value='" + req.query.id_produto + "' name='id_produto'>\n";
                    html += "<h3>Alterar " +  result[0].titulo_produto + "</h3>"
                    html += "<a href='produtos' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                    //TITULO DO PRODUTO
                    html += "<div class='row mb-3 inputproduto'><label for='titulo' class='col-sm-2 col-form-label col-form-label-sm'>Titulo:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='titulo' placeholder='titulo' value='"+ result[0].titulo_produto +"'  name='titulo_produto'></div></div>\n";
                    //DATA ELABORAÇÃO
                    html += "<div class='row mb-3 inputproduto'><label for='data' class='col-sm-6 col-form-label col-form-label-sm'>Data de Elaboração:</label><div class='col-sm-6'><input class='form-control form-control-sm' id='data' value='"+ new Date(result[0].dt_elaboracao_produto).getFullYear() + "/" + (new Date(result[0].dt_elaboracao_produto).getMonth() +1 )+ "/" + new Date(result[0].dt_elaboracao_produto).getDate()  +"' name='dt_elaboracao_produto'></div></div>\n";
                    //MATERIAL UTILIZADO
                    html += "<div class='row mb-3 inputproduto'><label for='material' class='col-sm-4 col-form-label col-form-label-sm'>Material Utilizado:</label><div class='col-sm-8'><input type='text' class='form-control form-control-sm' id='material' placeholder='material' value='"+ result[0].material_produto +" 'name='material_produto'></div></div>\n";
                    //CATEGORIA ARTISTICA
                    html += "<div class='row mb-3 inputproduto'><label for='categoria' class='col-sm-4 col-form-label col-form-label-sm'>Categoria de arte:</label><div class='col-sm-8'><input type='text' class='form-control form-control-sm' id='categoria' value='"+ result[0].categoria_produto +"' name='categoria_produto'></div></div>\n";
                    //PREÇO DE VENDA 
                    html += "<div class='row mb-3 inputproduto'><label for='preco_venda' class='col-sm-8 col-form-label col-form-label-sm'>Preço de venda:</label><div class='col-sm-4'><input type='number' class='form-control form-control-sm' id='preco_venda' placeholder='50' value='"+ result[0].preco_venda +"' name='preco_venda'></div></div>\n";
                    //PRECO DE COMPRA 
                    html += "<div class='row mb-3 inputproduto'><label for='preco_compra' class='col-sm-8 col-form-label col-form-label-sm'>Preço de compra:</label><div class='col-sm-4'><input type='number'' class='form-control form-control-sm' id='preco_compra' placeholder='45' value='"+ result[0].preco_compra +"' name='preco_compra'></div></div>\n";
                    //STOCK 
                    html += "<div class='row mb-3 inputproduto'><label for='stock' class='col-sm-8 col-form-label col-form-label-sm'>Stock:</label><div class='col-sm-4'><input type='number' class='form-control form-control-sm' id='stock' placeholder='25' value='"+ result[0].stock_produto +"' name='stock_produto'></div></div>\n";
                    //NOME DO ARTISTA
                    html += "<div class='row mb-3 inputproduto'><label for='artista' class='col-sm-2 col-form-label col-form-label-sm'>Artista:</label><div class='col-sm-10 select'> <select name='id_artista'>\n";
                    for (var i = 0; i < result.length; i++) {
                        html += "<option value='" + result[i].id_artista + "'>" + result[i].nome_artistico_artista + "</option>\n";
                    }
                    html += "</select>\n";
                    html += "</div>\n";
                    //BOTÃO DE SALVAR 
                    html += "<button>SALVAR</button>\n";
                    html += "</form>"
                    html += "</section>\n";
                    html += fundo_func; 
                    res.send(html)
                }
            }); 
            
        }
        else{
            res.redirect('404page');
        }
    }); 

//=======================================

//    PROCESSA EDITA PRODUTO

//=======================================
router
.route("/editar_produto_processa")
.post((req, res)=>{
     
    //Caso não se adicione nova fotografia, faz isto:
    if(!req.files && req.body.titulo_produto  && req.body.dt_elaboracao_produto && req.body.material_produto && req.body.categoria_produto && req.body.preco_compra && req.body.preco_venda && req.body.stock_produto){
        //Update de dados sem fotografia
        var query = "UPDATE Produto SET titulo_produto = " + mysql.escape(req.body.titulo_produto) + ", dt_elaboracao_produto = " + mysql.escape(req.body.dt_elaboracao_produto) + ", material_produto = " + mysql.escape(req.body.material_produto) + ", categoria_produto = " + mysql.escape(req.body.categoria_produto) + ", preco_compra = " + mysql.escape(req.body.preco_compra) + ", stock_produto = " + mysql.escape(req.body.stock_produto) + ", id_produto= "+ mysql.escape(req.body.id_produto) + ", preco_venda = " + mysql.escape(req.body.preco_venda) + " WHERE id_produto ="+ mysql.escape(req.body.id_produto) + ";" ;

        runQuery(query, function (err, result, fields) {    
          if(result && result.affectedRows > 0){
                res.redirect('produtos');
           }
           else{
                res.redirect('erroinput');
           }         
        });            
    }

    //Caso se adicione nova fotografia, faz isto:
    else  if(req.files && req.body.titulo_produto  && req.body.dt_elaboracao_produto && req.body.material_produto && req.body.categoria_produto && req.body.preco_compra && req.body.preco_venda && req.body.stock_produto){
        var query = "UPDATE Produto SET titulo_produto = " + mysql.escape(req.body.titulo_produto) + ", dt_elaboracao_produto = " + mysql.escape(req.body.dt_elaboracao_produto) + ", material_produto = " + mysql.escape(req.body.material_produto) + ", categoria_produto = " + mysql.escape(req.body.categoria_produto) + ", preco_compra = " + mysql.escape(req.body.preco_compra) + ", stock_produto = " + mysql.escape(req.body.stock_produto) + ", id_produto= "+ mysql.escape(req.body.id_produto) + ", fotografia_produto= "+ mysql.escape(req.files.fotografia_produto.name) + " WHERE id_produto ="+ mysql.escape(req.body.id_produto) + ";" ;
        
        runQuery(query, function (err, result, fields) {     
            //adicionar fotografia a pasta
            if(result && result.affectedRows > 0){
            req.files.fotografia_produto.mv("public/uploads/" + req.files.fotografia_produto.name, function (err) {
                if (err) console.error(err);
            });
            //direcionar para a pagina de produtos
            res.redirect('produtos');
            }
            else{
            res.redirect('erroinput');
            }  
        });
    } 

    //SE falta de preenchimento de dados         
    else{
        res.redirect('erroinput2');
    }
            
 });


//=======================================

//     ADICIONA PRODUTO

//=======================================

    router
    .route("/adicionarproduto")
    .get((req, res)=>{
        var html="";
        html += topo_func;
        html += nav_func;
        html += "<section class='home' id=''>\n";
        html += "<div class='container adicionaproduto'>\n";
       
        html += "<form name='formulario' method='post' action='adicionar_produto_processa' enctype='multipart/form-data' >\n";
        var query = "SELECT id_artista, nome_artistico_artista FROM Artista ORDER BY nome_artistico_artista;";
        runQuery(query, function (err, result, fields) {
            if (result.length > 0) {    
                html += "<div class='row'>\n";
                html += "<div class='col-11'>\n";
                html += "<h3>Adiciona PRODUTO</h3>"
                html += "</div>\n";
                html += "<div class='col-1'>\n";
                html += "<a href='produtos' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
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
                
                    
                //NOME DO ARTISTA
                html += "<div class='row mb-3 inputproduto'><label for='artista' class='col-sm-2 col-form-label col-form-label-sm'>Artista:</label><div class='col-sm-10'> <select name='id_artista'>\n";
                    for (var i = 0; i < result.length; i++) {
                        html += "<option value='" + result[i].id_artista + "'>" + result[i].nome_artistico_artista + "</option>\n";
                    }
                html += "</select>\n";
                html +="</div></div>\n"; 
                    
                //BOTÃO DE SALVAR 
                html += "<button type='submit'>SALVAR</button>\n";
                html += "</form>\n";
                html += "</div>\n";   

                html += "</div></div>\n";
                html += "</section>\n";
                html += fundo_func;
                
                res.send(html)
                }
            else{
                    res.redirect('erroinput');
                }
        });
        
    });

//=======================================

//     PROCESSA ADICIONAR PRODUTO 

//=======================================

router
.route("/adicionar_produto_processa")
.post((req, res)=>{
        if(req.body.titulo_produto  && req.body.dt_elaboracao_produto && req.body.material_produto && req.body.categoria_produto && req.body.preco_compra && req.body.preco_venda && req.body.stock_produto && req.files.fotografia_produto && req.body.id_artista){ 
            var query = "insert into Produto values(null, '" + req.body.titulo_produto + "', '" + req.body.dt_elaboracao_produto + "', '" + req.body.material_produto + "', '" + req.body.categoria_produto + "', " + req.body.preco_compra + ", " + req.body.preco_venda + ", " + req.body.stock_produto + " , '" + req.files.fotografia_produto.name + "' , " + req.body.id_artista + ");";
        
            runQuery(query, function (err, result, fields) {     
                //adicionar fotografia a pasta
                if(result && result.affectedRows > 0){
                    req.files.fotografia_produto.mv("public/uploads/" + req.files.fotografia_produto.name, function (err) {
                        if (err) console.error(err);
                    });
                    //direcionar para a pagina de produtos
                    res.redirect('produtos');
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

//     Confirma Elimina  PRODUTO 

//=======================================


    router
    .route("/eliminaproduto")
    .get((req, res)=>{
        if(req.query.id_produto){
            
            var query = "SELECT id_produto, titulo_produto, fotografia_produto, nome_artistico_artista FROM Produto inner join Artista using(id_artista) Where id_produto =" + req.query.id_produto +";";

            runQuery(query, function(err, result, fields){
                if(result && result.length > 0) {    
                    var html="";
                    html += topo_func;
                    html += nav_func;
                    html += "<section class='home' id=''>\n";
                    html += "<div class='container editaproduto'>\n";
                    
                    html += "<form name='formulario' method='get' action='processa_elimina_produto' >\n";
                    html += "<div class='row'>\n";
                    html += "  <div class='col-4 imgaltera'>\n";
                    html += " <input type='file' id='file' name='fotografia_produto'>\n";
                    // FOTOGRAFIA inserida dinamicmente
                    html += "<img src='/uploads/" + result[0].fotografia_produto + "' width='100%' height='100%'>\n";
                   
                    html += "</div>\n";

                    html += "  <div class='col-6 formaltera'>\n";
                    //TITULO DO PRODUTO
                    html += "<input type='hidden' value='"+ req.query.id_produto +"'name='id_produto'>"

                    html += "<h3>Eliminar " +  result[0].titulo_produto + "?</h3>"
                    html += "<a href='produtos' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                    html += "<br>"
                    html += "<p>Confirma a eliminação de: </p>"
                    html += "<div class='row mb-3 inputproduto'><label for='Produto' class='col-sm-5 col-form-label col-form-label-sm'>Produto:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='titulo' placeholder='titulo' value=' " + result[0].titulo_produto +"' name='titulo_produto' disabled></div></div>\n";
                    //NOME DO ARTISTA
                    html += "<div class='row mb-3 inputproduto'><label for='artista' class='col-sm-5 col-form-label col-form-label-sm'>Da artista:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='artista' placeholder='nome artista' value='" + result[0].nome_artistico_artista + "' name='nome_artistico_artista' disabled> </div></div>\n";
                    //BOTÃO DE ELIMINAR 
                    html += "<button type='submit'>ELIMINAR</button>\n";
                    html += "</form>"
                    html += "</div></div>\n";
                    html += "</section>\n";
                    html += fundo_func;
                    
                    res.send(html)
                }
                else{
                    res.redirect('404page');
               }
            }); 
            
        }
        else{
            res.redirect('404page');
        }
    }); 

//=======================================

//     PROCESSA ELIMINA  PRODUTO 

//=======================================
router
    .route("/processa_elimina_produto")
    .get((req, res)=>{
        
    if (req.query.id_produto) {
        var query = "DELETE FROM Produto WHERE id_produto = " + req.query.id_produto;

        runQuery(query, function (err, result, fields){
            if (result && result.affectedRows > 0) {
                res.redirect('produtos');
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

//     MOSTRAR ARTISTAS

//=======================================
    router
    .route("/artistas")
    .get((req, res)=>{
        var query = " SELECT id_artista, localidade_artista, fotografia_artista, nome_artistico_artista, nome_real_artista, categoria_arte_artista, facebook_artista, instagram_artista, behance_artista, website_artista, biografia_artista, mail_artista, username_artista FROM Artista order by nome_artistico_artista;";

        runQuery(query, function (err, result, fields) {
            if (result.length > 1) {
                var html="";
                html += topo_func;
                html += nav_func;
                html += "<section class='home' id=''>\n";
                html += "<div class='container tb_artista'>\n";
                html += "<h3>Todos os artistas</h3>\n";
                html += "<table class='table table-hover'>\n";
                html += "<thead><tr>\n";
                html += " <th scope='col'style='display:none'>id</th>\n";
                html += " <th scope='col'>Fotografia</th>\n";
                html += " <th scope='col'>Nome Artístico</th>\n";
                html += " <th scope='col'>Nome Real</th>\n";
                html += " <th scope='col'>Localidade</th>\n";
                html += " <th scope='col'>Categoria Artística</th>\n";
                html += " <th scope='col'><span ><i class='fab fa-facebook'></i></span></th>\n";
                html += " <th scope='col'><span ><i class='fab fa-instagram'></i></span></th>\n";
                html += " <th scope='col'><span ><i class='fab fa-behance'></i></span></th>\n";
                html += " <th scope='col'>Website</th>\n";
                //html += " <th scope='col'>Biografia</th>\n";
                html += " <th scope='col'>Email</th>\n";
                html += " <th scope='col'>Username</th>\n";
                html += " <th scope='col'></th>\n";
                html += "</tr></thead>\n";
                html += " <tbody>\n";
                // CRIAR AQUI O CICLO FOR PARA COLOCAR INFO
                for (var i = 0; i < result.length; i++) {
                    html += "<tr>\n";
                    html += "<th scope='row' style='display:none'>" + result[i].id_artista + "</th>\n";
                    html += "<td><img width='25px' src='/uploads/" + result[i].fotografia_artista
                    + "'></td>\n";
                    html += "<td> " + result[i].nome_artistico_artista + "</td>\n";
                    html += "<td>" + result[i].nome_real_artista + "</td>\n";
                    html += "<td> " + result[i].localidade_artista + "</td>\n";
                    html += "<td> " + result[i].categoria_arte_artista + "</td>\n";
                    html += "<td> " + result[i].facebook_artista + "</td>\n";
                    html += "<td> " + result[i].instagram_artista + "</td>\n";
                    html += "<td> " + result[i].behance_artista + "</td>\n";
                    html += "<td> " + result[i].website_artista + " </td>\n";
                    //html += "<td> " + result[i].biografia_artista + "</td>\n";
                    html += "<td> " + result[i].mail_artista+ "</td>\n";
                    html += "<td> " + result[i].username_artista + "</td>\n";
                    //ELIMINAR
                    html += "<td><a href='eliminaartista?id_artista=" + result[i].id_artista + "'><lord-icon class='icon' src='https://cdn.lordicon.com/gsqxdxog.json' trigger='morph' colors='primary:#bc2a4a,secondary:#bc2a4a' stroke='80' style='width:20px;height:20px'></lord-icon></a></td>\n";
                    html += "</tr>\n";
                }
                //////
                html += "</tbody></table></div>\n";
                html += "</section>\n";
                html += fundo_func;
                res.send(html)
            }
            else{
                res.redirect('erroinput');
            }
        });
    }); 
    
//=======================================

//     CONFIRMA APAGA ARTISTA

//=======================================
router
.route("/eliminaartista")
.get((req, res)=>{
    if(req.query.id_artista){
        
        var query = "SELECT id_artista, nome_artistico_artista, website_artista, biografia_artista, mail_artista, username_artista FROM Artista Where id_artista =" + req.query.id_artista +";";

        runQuery(query, function(err, result, fields){
            if(result && result.length > 0) {    
                var html="";
                html += topo_func;
                html += nav_func;
                html += "<section class='home' id=''>\n";
                html += "<div class='container editaproduto'>\n";
                html+= "<form name='formulario' method='get' action='processa_elimina_artista'> "
                html += "<input type='hidden' value='"+ req.query.id_artista +"'name='id_artista'>"
                html += "<div class='row'>"
                html += "<div class='col-11'>"
                html += "<h3>Confirma a eliminação de: </h3>"
                html += "</div>\n";
                html += "<div class='col-1'>"
                html += "<a href='artistas' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                html += "</div>\n";

                 //NOME artista
                html += "<div class='formaelimina'>"
                html += "<div class='row mb-3 inputproduto'><label for='artista' class='col-sm-5 col-form-label col-form-label-sm'>artista:</label><div class='col-sm-7'><input type='text' class='form-control form-control-sm' id='titulo' placeholder='titulo' value=' " + result[0].nome_artistico_artista +"' name='nome_artistico_artista' disabled></div></div>\n";

                //BOTÃO DE ELIMINAR 
                html += "<button>ELIMINAR</button>\n";
                html += "</form>"
                html += "</div>"
                html += "</div></div>\n";
                html += "</section>\n";
                html += fundo_func;
                res.send(html)
            }
        }); 
        
    }
    else{
        res.redirect('404page');
    }
}); 


//=======================================

//    PROCESSA APAGA  ARTISTAS

//=======================================
router
    .route("/processa_elimina_artista")
    .get((req, res)=>{
        
    if (req.query.id_artista) {
        var query = "DELETE FROM Artista WHERE id_artista = " + req.query.id_artista;
        runQuery(query, function (err, result, fields) {
            if (result && result.affectedRows > 0) {
                //direcionar para a pagina de artistas
                res.redirect('artistas');
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

//     MOSTRAR EVENTOS

//=======================================
router
.route("/eventos")
.get((req, res)=>{
    var query = "SELECT id_evento, titulo_evento, dt_inicio_evento, dt_fim_evento, hora_inicio_evento, hora_fim_evento, local_evento, morada_evento, preco_evento, descricao_evento, lotacao_evento, link_bilhete_evento, nome_artistico_artista  FROM Evento left join Artistas_Eventos using(id_evento) left join Artista using(id_artista);";

    runQuery(query, function (err, result, fields) {
        var html="";
        html += topo_func;
        html += nav_func;
        html += "<section class='home' id=''>\n";
        html += "<div class='container tb_artista'>\n";
        html += "<h3>Todos os Eventos</h3>\n";
        html += "<table class='table table-hover'>\n";
        html += "<thead><tr>\n";
        html += " <th scope='col' style='display:none'>id</th>\n";
        html += " <th scope='col'>Titulo</th>\n";
        html += " <th scope='col'>Data de ínicio</th>\n";
        html += " <th scope='col'>Data de fim</th>\n";
        html += " <th scope='col'>Hora de ínicio</th>\n";
        html += " <th scope='col'>Hora do fim</th>\n";
        html += " <th scope='col'>Local</th>\n";
        html += " <th scope='col'>Morada</th>\n";
        html += " <th scope='col'>Preço</th>\n";
        html += " <th scope='col'>Descrição</th>\n";
        html += " <th scope='col'>Lotação máxima</th>\n";
        html += " <th scope='col'>Link para bilhete</th>\n";
        html += " <th scope='col'>Artistas</th>\n";
        html += " <th scope='col'></th>\n";
        html += "</tr></thead>\n";
        html += " <tbody>\n";
        // CRIAR AQUI O CICLO FOR PARA COLOCAR INFO
        for (var i = 0; i < result.length; i++) {
            html += "<tr>\n";
            html += "<th scope='row' style='display:none'> " + result[i].id_evento + "</th>\n";
            html += "<td>" + result[i].titulo_evento + "</td>\n";
            html += "<td>" + new Date(result[i].dt_inicio_evento).getFullYear() + "/" + (new Date(result[i].dt_inicio_evento).getMonth() +1) + "/" + new Date(result[i].dt_inicio_evento).getDate() 
            + "</td>\n";
            html += "<td>" + new Date(result[i].dt_fim_evento).getFullYear() + "/" + (new Date(result[i].dt_fim_evento).getMonth() + 1)+ "/" + new Date(result[i].dt_fim_evento).getDate() 
            + "</td>\n";
            html += "<td>" + result[i].hora_inicio_evento + "</td>\n";
            html += "<td> " + result[i].hora_fim_evento + "</td>\n";
            html += "<td> " + result[i].local_evento + "</td>\n";
            html += "<td> " + result[i].morada_evento + "</td>\n";
            html += "<td> " + result[i].preco_evento + "</td>\n";
            html += "<td> " + result[i].descricao_evento + "</td>\n";
            html += "<td> " + result[i].lotacao_evento + "</td>\n";
            html += "<td> " + result[i].link_bilhete_evento + "</td>\n";
            html += "<td> " + result[i].nome_artistico_artista + "</td>\n";
            //ELIMINAR
            html += "<td><a href='eliminaevento?id_evento=" + result[i].id_evento + "'><lord-icon class='icon' src='https://cdn.lordicon.com/gsqxdxog.json' trigger='morph' colors='primary:#bc2a4a,secondary:#bc2a4a' stroke='80' style='width:20px;height:20px'></lord-icon></a></td>\n";
            html += "</tr>\n";
        }
        //////
        html += "</tbody></table></div>\n";
        html += "</section>\n";
        html += fundo_func;
        res.send(html)
    });
});  

//=======================================

//     CONFIRMA APAGA EVENTO

//=======================================
router
.route("/eliminaevento")
.get((req, res)=>{
    if(req.query.id_evento){
        
        var query = "SELECT id_evento, titulo_evento FROM Evento Where id_evento =" + req.query.id_evento +";";

        runQuery(query, function(err, result, fields){
            if(result && result.length > 0) {    
                var html="";
                html += topo_func;
                html += nav_func;
                html += "<section class='home' id=''>\n";
                html += "<div class='container editaproduto'>\n";
                html+= "<form name='formulario' method='get' action='processa_elimina_evento'> "
                html += "<input type='hidden' value='"+ req.query.id_evento +"'name='id_evento'>"
               
                html += "<div class='row'>"
                html += "<div class='col-11'>"
                html += "<h3>Confirma a eliminação de: </h3>"
                html += "</div>\n";
                html += "<div class='col-1'>"
                html += "<a href='eventos' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                html += "</div>\n";

                html += "<div class='formaelimina'>"
                html += "<div class='row mb-3 inputproduto'><label for='evento' class='col-sm-2 col-form-label col-form-label-sm'>evento:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='titulo' value=' " + result[0].titulo_evento +"' name='titulo_evento' disabled></div></div>\n";

                //BOTÃO DE ELIMINAR 
                html += "<button>ELIMINAR</button>\n";
                html += "</form>"
                html += "</div>"
                html += "</div></div>\n";
                html += "</section>\n";
                html += fundo_func;
                
                res.send(html)
            }
        }); 
        
    }
    else{
        res.redirect('404page');
    }
}); 


//=======================================

//    PROCESSA APAGA  EVENTOS

//=======================================
router
    .route("/processa_elimina_evento")
    .get((req, res)=>{
        
    if (req.query.id_evento) {
        var query = "DELETE FROM Evento WHERE id_evento = " + req.query.id_evento;

        runQuery(query, function (err, result, fields) {
            var html = "";
          
            if (result && result.affectedRows > 0) {
                //direcionar para a pagina de eventos
                res.redirect('eventos');

            } else {
                res.redirect('404page');
            }
         
        });
    } else {
        res.redirect('erroinput3');
    }
});

    
//=======================================

//     MOSTRAR CLIENTES

//=======================================
    router
    .route("/clientes")
    .get((req, res)=>{
        var query = " SELECT id_cliente, nome_cliente, username_cliente, genero_cliente, dn_cliente, morada_cliente, profissao_cliente, nif_cliente, mail_cliente FROM Cliente order by nome_cliente;";

        runQuery(query, function (err, result, fields) {
            if (result.length > 0) {  
                var html="";
                html += topo_func;
                html += nav_func;
                html += "<section class='home' id=''>\n";
                html += "<div class='container tb_produto'>\n";
                html += "<h3>Todos os Clientes</h3>\n";
                html += "<table class='table table-hover'>\n";
                html += "<thead><tr>\n";
                html += " <th scope='col' style='display:none'>id</th>\n";
                html += " <th scope='col'>Nome</th>\n";
                html += " <th scope='col'>Username</th>\n";
                html += " <th scope='col'>Gênero</th>\n";
                html += " <th scope='col'>Data de Nascimento</th>\n";

                //ACHAS INTERESSANTE COLOCAR A IDADE TAMBÉM???? 

                html += " <th scope='col'>Morada</th>\n";
                html += " <th scope='col'>Profissão</th>\n";
                html += " <th scope='col'>Nif</th>\n";
                html += " <th scope='col'>Email</th>\n";
                html += " <th scope='col'></th>\n";
                html += "</tr></thead>\n";
                html += " <tbody>\n";
                // CRIAR AQUI O CICLO FOR PARA COLOCAR INFO
                for (var i = 0; i < result.length; i++) {
                    html += "<tr>\n";
                    html += "<th scope='row' style='display:none'>" + result[i].id_cliente + "</th>\n";
                    html += "<td>" + result[i].nome_cliente + "</td>\n";
                    html += "<td>" + result[i].username_cliente + "</td>\n";
                    html += "<td>" + result[i].genero_cliente + "</td>\n";
                    html += "<td>" + new Date(result[i].dn_cliente).getFullYear() + "/" + (new Date(result[i].dn_cliente).getMonth() +1) + "/" + new Date(result[i].dn_cliente).getDate() 
                    + "</td>\n";
                    html += "<td>" + result[i].morada_cliente + "</td>\n";
                    html += "<td>" + result[i].profissao_cliente + "</td>\n";
                    html += "<td>" + result[i].nif_cliente + "</td>\n";
                    html += "<td>" + result[i].mail_cliente + "</td>\n";
                    html += "<td><a href='eliminacliente?id_cliente=" + result[i].id_cliente + "'><lord-icon class='icon' src='https://cdn.lordicon.com/gsqxdxog.json' trigger='morph' colors='primary:#bc2a4a,secondary:#bc2a4a' stroke='80' style='width:20px;height:20px'></lord-icon></a></td>\n";
                    html += "</tr>\n";
                }
                //////

                html += "</tbody></table></div>\n";
                html += "</section>\n";
                html += fundo_func;
                res.send(html)
            }
            else{
                res.redirect('404page');
            }
        });
    });  

//=======================================

//     CONFIRMA APAGA CLIENTES

//=======================================
router
.route("/eliminacliente")
.get((req, res)=>{
    if(req.query.id_cliente){
        
        var query = "SELECT id_cliente, nome_cliente, username_cliente, genero_cliente, dn_cliente, morada_cliente, profissao_cliente, nif_cliente, mail_cliente FROM Cliente Where id_cliente =" + req.query.id_cliente +";";

        runQuery(query, function(err, result, fields){
            if(result && result.length > 0) {    
                var html="";
                html += topo_func;
                html += nav_func;
                html += "<section class='home' id=''>\n";
                html += "<div class='container editaproduto'>\n";
                html+= "<form name='formulario' method='get' action='processa_elimina_cliente'> "
                html += "<input type='hidden' value='"+ req.query.id_cliente +"'name='id_cliente'>"

                html += "<div class='row'>"
                html += "<div class='col-11'>"
                html += "<h3>Confirma a eliminação de: </h3>"
                html += "</div>\n";
                html += "<div class='col-1'>"
                html += "<a href='clientes' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                html += "</div>\n";

                html += "<div class='formaelimina'>"
                html += "<div class='row mb-3 inputproduto'><label for='Cliente' class='col-sm-2 col-form-label col-form-label-sm'>Cliente:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='titulo' placeholder='titulo' value=' " + result[0].nome_cliente+"' name='nome_cliente' disabled></div></div>\n";
               
                //BOTÃO DE ELIMINAR 
                html += "<button>ELIMINAR</button>\n";
                html += "</form>"
                html += "</div>"
                html += "</div></div>\n";
                html += "</section>\n";
                html += fundo_func;
                
                res.send(html)
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

//    PROCESSA APAGA  CLIENTES

//=======================================
router
    .route("/processa_elimina_cliente")
    .get((req, res)=>{
        
    if(req.query.id_cliente){
     var query = "DELETE FROM Cliente WHERE id_cliente = " + req.query.id_cliente;

        runQuery(query, function (err, result, fields) {
          
            if (result && result.affectedRows > 0) {
                //direcionar para a pagina de clientes
                res.redirect('clientes');

            } else {
                res.redirect('404page');
            }
         
        });
    } 
    else{
        res.redirect('erroinput3');
    }
});


    
//=======================================

//     MOSTRAR FUNCIONARIO

//=======================================
    router
    .route("/funcionarios")
    .get((req, res)=>{
        var query = "SELECT id_func, nome_func, username_func, dn_func, morada_func, mail_func, contacto_func FROM Funcionario order by nome_func;";

        runQuery(query, function(err, result, fields){
            if (result.length > 0) { 
                var html="";
                html += topo_func;
                html += nav_func;
                html += "<section class='home' id=''>\n";
                html += "<div class='container tb_produto'>\n";
                html += "<h3>Todos os Funcionários</h3>\n";
                html += "<table class='table table-hover'>\n";
                html += "<thead><tr>\n";
                html += " <th scope='col' style='display:none'>id</th>\n";
                html += " <th scope='col'>Nome</th>\n";
                html += " <th scope='col'>Username</th>\n";
                html += " <th scope='col'>Data de Nascimento</th>\n";

                //ACHAS INTERESSANTE COLOCAR A IDADE TAMBÉM???? 

                html += " <th scope='col'>Morada</th>\n";
                html += " <th scope='col'>Email</th>\n";
                html += " <th scope='col'>Contacto</th>\n";
                html += " <th scope='col'></th>\n";
                html += "</tr></thead>\n";
                html += " <tbody>\n";
                // CRIAR AQUI O CICLO FOR PARA COLOCAR INFO
                for (var i = 0; i < result.length; i++) {
                    html += "<tr>\n";
                    html += "<th scope='row' style='display:none'>" + result[i].id_func + "</th>\n";
                    html += "<td>" + result[i].nome_func + "</td>\n";
                    html += "<td>" + result[i].username_func + "</td>\n";
                    html += "<td>" + new Date(result[i].dn_func).getFullYear() + "/" + (new Date(result[i].dn_func).getMonth() +1) + "/" + new Date(result[i].dn_func).getDate() 
                    + "</td>\n";
                    html += "<td>" + result[i].morada_func + "</td>\n";
                    html += "<td>" + result[i].mail_func + "</td>\n";
                    html += "<td>" + result[i].contacto_func + "</td>\n";
                    html += "<td><a href='eliminafuncionarios?id_func=" + result[i].id_func + "'><lord-icon class='icon' src='https://cdn.lordicon.com/gsqxdxog.json' trigger='morph' colors='primary:#bc2a4a,secondary:#bc2a4a' stroke='80' style='width:20px;height:20px'></lord-icon></a></td>\n";
                    html += "</tr>\n";
                }
                //////
                html += "</tbody></table></div>\n";
                html += "</section>\n";
                html += fundo_func;
                res.send(html)
            }
            else{
                res.redirect('erroinput');
            }
        }); 
            
    });




//=======================================

//     ELIMINA FUNCIONARIO

//=======================================
router
.route("/eliminafuncionarios")
.get((req, res)=>{
    if(req.query.id_func){
        var query = "SELECT id_func, nome_func, username_func, dn_func, morada_func, mail_func, contacto_func FROM Funcionario Where id_func =" + req.query.id_func +";";

        runQuery(query, function(err, result, fields){
            if(result && result.length > 0) {    
                var html="";
                html += topo_func;
                html += nav_func;
                html += "<section class='home' id=''>\n";
                html += "<div class='container editaproduto'>\n";
                html+= "<form name='formulario' method='get' action='processa_elimina_funcionarios'> "
                html += "<input type='hidden' value='"+ req.query.id_func +"'name='id_func'>"
                
                html += "<div class='row'>"
                html += "<div class='col-11'>"
                html += "<h3>Confirma a eliminação de: </h3>"
                html += "</div>\n";
                html += "<div class='col-1'>"
                html += "<a href='funcionarios' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                html += "</div>\n";
               
                html += "<div class='formaelimina'>"
                html += "<div class='row mb-3 inputproduto'><label for='func' class='col-sm-2 col-form-label col-form-label-sm'>func:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='titulo' placeholder='titulo' value=' " + result[0].nome_func+"' name='nome_func' disabled></div></div>\n";
               
                //BOTÃO DE ELIMINAR 
                html += "<button>ELIMINAR</button>\n";
                html += "</form>"
                html += "</div>"
                html += "</div></div>\n";
                html += "</section>\n";
                html += fundo_func;
             
                res.send(html)
            }
        }); 
        
    }
    else{
        res.redirect('404page');
    }
}); 


//=======================================

//    PROCESSA ELIMINA FUNCIONARIO

//=======================================
router
    .route("/processa_elimina_funcionarios")
    .get((req, res)=>{
        
    if (req.query.id_func) {
        var query = "DELETE FROM Funcionario WHERE id_func = " + req.query.id_func;

        runQuery(query, function (err, result, fields) {          
            if (result && result.affectedRows > 0) {
                res.redirect('funcionarios');
            } 
            else {
                res.redirect('404page');
            }
         
        });

    } 
    else {
        res.redirect('erroinput3');
    }
});


//=======================================

//     MOSTRAR COMPRAS

//=======================================
    router
    .route("/compras")
    .get((req, res)=>{

        var query = "SELECT id_compra, titulo_produto, nome_artistico_artista, unidades_compradas, dt_compra, hora_compra, nome_func, (unidades_compradas * preco_compra) as preco_compra  FROM Compra inner join Funcionario using(id_func) inner join Produto_Compra using(id_compra) inner join Produto using(id_produto) inner join Artista using(id_artista) order by dt_compra DESC;";

        runQuery(query, function (err, result, fields) {
            var html="";
            html += topo_func;
            html += nav_func;
            html += "<section class='home' id=''>\n";
            html += "<div class='container tb_produto'>\n";
            html += "<h3>Todas as Compras --> artistas</h3>\n";
            html += "<table class='table table-hover'>\n";
            html += "<thead><tr>\n";
            html += " <th scope='col' style='display:none'>id</th>\n";
            html += " <th scope='col'>Produto</th>\n";
            html += " <th scope='col'>Unidades Compradas</th>\n";
            html += " <th scope='col'>Preço da Compra</th>\n";
            html += " <th scope='col'>Artista</th>\n";
            html += " <th scope='col'>Funcionário</th>\n"; //?? 
            html += " <th scope='col'>Data</th>\n"; //??
            html += " <th scope='col'>Hora</th>\n"; //??
           
            html += "<td> <a href='adicionarcompra'><lord-icon class='icon' src='https://cdn.lordicon.com/mecwbjnp.json' trigger='morph' colors='primary:#00AE8E,secondary:#00AE8E' stroke='80' style='width:20px;height:20px'></lord-icon></a></td>\n";
            html += "</tr></thead>\n";
            html += " <tbody>\n";
            // CRIAR AQUI O CICLO FOR PARA COLOCAR INFO
            for (var i = 0; i < result.length; i++) {
                html += "<tr>\n";
                html += "<th scope='row' style='display:none'>" + result[i].id_compra + "</th>\n";
                html += "<td> " + result[i].titulo_produto + " </td>\n";
                html += "<td> " + result[i].unidades_compradas + " </td>\n";
                html += "<td> " + result[i].preco_compra + " €</td>\n";
                html += "<td> " + result[i].nome_artistico_artista + " </td>\n";
                html += "<td> " + result[i].nome_func + " </td>\n";
                html += "<td> " + new Date(result[i].dt_compra).getFullYear() + "/" + (new Date(result[i].dt_compra).getMonth() + 1)+ "/" + new Date(result[i].dt_compra).getDate() 
                + "</td>\n";
                html += "<td> " + result[i].hora_compra + " </td>\n";

                html += "<td><a href='editarcompra?id_compra=" + result[i].id_compra + "'><lord-icon class='icon' src='https://cdn.lordicon.com/wloilxuq.json' trigger='loop'colors='primary:#4267B2,secondary:#4267B2' stroke='60' style='width:20px;height:20px'> </lord-icon></a></td>\n";
                html += "</tr>\n";
            }
            //////
            html += "</tbody></table></div>\n";
            html += "</section>\n";
            html += fundo_func;
            res.send(html)
        });
    });

//=======================================

//     ADICIONA COMPRA

//=======================================

router
.route("/adicionarcompra")
.get((req, res)=>{
    var html="";
    html += topo_func;
    html += nav_func;
    html += "<section class='home' id=''>\n";
    html += "<div class='violeta editaproduto'><div class='alteraproduto'>\n";
    
    //inicio do formulario

    var query = "SELECT id_func, nome_func FROM Funcionario; SELECT id_produto, titulo_produto FROM Produto;";
    runQuery(query, function (err, result, fields) {
        if (result.length > 0) { 
            //form
            html += "<form name='formulario' method='get' action='adicionar_compra_processa' >\n";
            
            //DATA ELABORAÇÃO
            html += "<div class='row mb-3 inputproduto'><label for='data' class='col-sm-2 col-form-label col-form-label-sm'>Data de Compra:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='data' placeholder='2020/05/12' name='dt_compra'></div></div>\n";
            //HORA da CCOMPRA
            html += "<div class='row mb-3 inputproduto'><label for='material' class='col-sm-2 col-form-label col-form-label-sm'>Hora da Compra:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='material' placeholder='19:00' name='hora_compra'></div></div>\n";
            //NOME DO FUNCIONARIO
            html += "<div class='row mb-3 inputproduto'><label for='artista' class='col-sm-2 col-form-label col-form-label-sm'>Nome Funcionario:</label><div class='col-sm-10'> <select name='id_func'>\n";
            for (var i = 0; i < result[0].length; i++) {
                html += "<option value='" + result[0][i].id_func + "'>" + result[0][i].nome_func + "</option>\n";
            }
            html += "</select></td></tr>\n";
            html +="</div></div>\n"; 
            //NOME Produto
            html += "<div class='row mb-3 inputproduto'><label for='produto' class='col-sm-2 col-form-label col-form-label-sm'>Produto:</label><div class='col-sm-10'> <select name='id_produto'>\n";
            for (var i = 0; i < result[1].length; i++) {
                html += "<option value='" + result[1][i].id_produto + "'>" + result[1][i].titulo_produto + "</option>\n";
            }
            html += "</select></td></tr>\n";
            html +="</div></div>\n"; 
            
            //unidades compradas 
            html += "<div class='row mb-3 inputproduto'><label for='stock' class='col-sm-2 col-form-label col-form-label-sm'>Unidades:</label><div class='col-sm-10'><input type='number' class='form-control form-control-sm' id='stock' placeholder='escrever numero de unidades' name='unidades_compradas'></div></div>\n";
            
            //BOTÃO DE SALVAR 
            html += "<button type='submit'>ADICIONAR</button>\n";
            html += "</form>\n";

            html += "</div></div>\n";
            html += "</section>\n";
            html += fundo_func;
            res.send(html)
        }
        else{
            res.redirect('erroinput');
        }
    });
    
});




//=======================================

//     PROCESSA ADICIONAR COMPRA

//=======================================

router
.route("/adicionar_compra_processa")
.get((req, res)=>{
        //verificar se os campos foram preenchidos
        if(req.query.unidades_compradas && req.query.dt_compra && req.query.hora_compra && req.query.id_func &&req.query.id_produto ){ 
            
         var query = "insert INTO Compra values(null, '" + req.query.dt_compra + "',  '" + req.query.hora_compra + "',  '" + req.query.id_func + "'); insert INTO Produto_Compra values(LAST_INSERT_ID(),  '" + req.query.id_produto + "','" + req.query.unidades_compradas + "'); ";
            
            runQuery(query, function (err, result, fields) {     
                //adicionar fotografia a pasta
                if(result[1] && result[1].affectedRows > 0){
                    //direcionar para a pagina de produtos
                    res.redirect('compras'); 
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

//     EDITA COMPRA

//=======================================
router
    .route("/editarcompra")
    .get((req, res)=>{
        if(req.query.id_compra){
            
            var query = "SELECT dt_compra, hora_compra, unidades_compradas FROM Compra inner join Produto_Compra using(id_compra) Where id_compra =" + req.query.id_compra +";SELECT id_func, nome_func FROM Funcionario; SELECT id_produto, titulo_produto FROM Produto;";

            runQuery(query, function(err, result, fields){
                if(result && result.length > 0) {    
                    var html="";
                    html += topo_func;
                    html += nav_func;
                    html += "<section class='home' id=''>\n";
                    html += "<div class='container editaproduto'>\n";
                  
                    
                    //form
                    html += "<form name='formulario' method='get' action='editar_compra_processa' >\n";
                    
                    //ID_PRODUTO HIDDEN
                    html += "<input type='hidden' value='" + req.query.id_compra + "' name='id_compra'>\n";
                    html += "<div class='row'>\n";
                    html += "<div class='col-11'>\n";
                    html += "<h3>Alterar Compra</h3>"
                    html += "</div>\n";
                    html += "<div class='col-1'>\n";
                    html += "<a href='compras' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                    html += "</div>\n";
                    html += "</div>\n";
                    
                    html += "<div class='formcompra'>\n";

                    //DATA ELABORAÇÃO
                    html += "<div class='row mb-3 inputproduto'><label for='data' class='col-sm-2 col-form-label col-form-label-sm'>Data de Compra:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='data' name='dt_compra' value='"  + new Date(result[0][0].dt_compra).getFullYear() + "/" + (new Date(result[0][0].dt_compra).getMonth() +1) + "/" + new Date(result[0][0].dt_compra).getDate() 
                    + "'></div></div>\n";
                    //HORA da CCOMPRA
                    html += "<div class='row mb-3 inputproduto'><label for='material' class='col-sm-2 col-form-label col-form-label-sm'>Hora da Compra:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='material' value='" + result[0][0].hora_compra + "' name='hora_compra'></div></div>\n";
                    //NOME DO FUNCIONARIO
                    html += "<div class='row mb-3 inputproduto'><label for='artista' class='col-sm-2 col-form-label col-form-label-sm'>Nome Funcionario:</label><div class='col-sm-10'> <select name='id_func'>\n";
                    for (var i = 0; i < result[1].length; i++) {
                        html += "<option value='" + result[1][i].id_func + "'>" + result[1][i].nome_func + "</option>\n";
                    }
                    html += "</select></td></tr>\n";
                    html +="</div></div>\n"; 
                    
                    
                    //unidades compradas 
                    html += "<div class='row mb-3 inputproduto'><label for='stock' class='col-sm-2 col-form-label col-form-label-sm'>Unidades:</label><div class='col-sm-10'><input type='number' class='form-control form-control-sm' id='stock'  name='unidades_compradas' value='" + result[0][0].unidades_compradas + "'></div></div>\n";
                    
                    //BOTÃO DE SALVAR 
                    html += "<button type='submit'>SALVAR</button>\n";
                    html += "</form>\n";

                    html += "</div>\n";
                    html += "</div>\n";
                    html += "</section>\n";
                    html += fundo_func;
                    res.send(html)
                }else{
                    res.redirect('404page');
                }
            }); 
            
        }
        else{
            res.redirect('404page');
        }
    }); 

//=======================================

//     PROCESSA EDITA COMPRA

//=======================================

router
.route("/editar_compra_processa")
.get((req, res)=>{
        //verificar se os campos foram preenchidos
        if(req.query.unidades_compradas && req.query.dt_compra && req.query.id_func && req.query.id_compra && req.query.unidades_compradas){ 
            
         var query ="UPDATE Compra SET dt_compra = '" + req.query.dt_compra + "', hora_compra = '" + req.query.hora_compra + "', id_func = '" + req.query.id_func + "' WHERE id_compra ='" + req.query.id_compra + "'; UPDATE Produto_Compra SET unidades_compradas = '" + req.query.unidades_compradas + "' WHERE id_compra ='" + req.query.id_compra + "';";   
         
            runQuery(query, function (err, result, fields) {     
               
                if(result[1] && result[1].affectedRows > 0){
                    //direcionar para a pagina de produtos
                    res.redirect('compras'); 
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

//     MOSTRAR VENDAS

//=======================================
    router
    .route("/vendas")
    .get((req, res)=>{
        var query = "SELECT id_venda, dt_venda, hora_venda, nome_func, unidades_vendidas, titulo_produto, nome_cliente, (unidades_vendidas*preco_venda) as preco_total  from Venda inner join Funcionario using(id_func) inner join Produto_Venda using(id_venda) inner join Produto using(id_produto) inner join Cliente using(id_cliente) order by dt_venda DESC;";
         
        runQuery(query, function (err, result, fields) {
        if (result.length > 0) { 
            var html="";
            html += topo_func;
            html += nav_func;
            html += "<section class='home' id=''>\n";
            html += "<div class='container tb_produto'>\n";
            html += "<h3>Todas as Vendas --> clientes</h3>\n";
            html += "<table class='table table-hover'>\n";
            html += "<thead><tr>\n";
            html += " <th scope='col' style='display:none'>id</th>\n";
            html += " <th scope='col'>Produtos Vendidos</th>\n"; //?? 
            html += " <th scope='col'>Unidades Vendidas</th>\n"; //??
            html += " <th scope='col'>Preço da Venda</th>\n";
            html += " <th scope='col'>Cliente</th>\n"; 
            html += " <th scope='col'>Funcionário</th>\n";
            html += " <th scope='col'>Data da Venda</th>\n";
            html += " <th scope='col'>Hora da Venda</th>\n";
            html += " <th scope='col'></th>\n";
            html += "<td> <a href='adicionarvenda'><lord-icon class='icon' src='https://cdn.lordicon.com/mecwbjnp.json' trigger='morph' colors='primary:#00AE8E,secondary:#00AE8E' stroke='80' style='width:20px;height:20px'></lord-icon></a></td>\n";
            html += "</tr></thead>\n";
            html += " <tbody>\n";
            for (var i = 0; i < result.length; i++) {
                html += "<tr>\n";
                html += "<td style='display:none'> " + result[i].id_venda+ "</td>\n";
                html += "<td>" + result[i].titulo_produto + "</td>\n"; 
                html += "<td>" + result[i].unidades_vendidas + "</td>\n";
                html += "<td>" + result[i].preco_total + "€</td>\n";
                html += "<td>" + result[i].nome_cliente+ "</td>\n";
                html += "<td>" + result[i].nome_func + "</td>\n";
                html += "<td>"  + new Date(result[i].dt_venda).getFullYear() + "/" +  (new Date(result[i].dt_venda).getMonth() + 1)+ "/" + new Date(result[i].dt_venda).getDate() 
                + "</td>\n";
                html += "<td>" + result[i].hora_venda + "</td>\n";
                html += "<td><a href='editarvenda?id_venda=" + result[i].id_venda + "'><lord-icon class='icon' src='https://cdn.lordicon.com/wloilxuq.json' trigger='loop'colors='primary:#4267B2,secondary:#4267B2' stroke='60' style='width:20px;height:20px'> </lord-icon></a></td>\n";
                html += "</tr>\n";
            }
            //////
            html += "</tbody></table></div>\n";
            html += "</section>\n";
            html += fundo_func;
            res.send(html)
        }
        else{
            res.redirect('erroinput');
        }
            
        });
    });


 //=======================================

//     EDITA VENDA

//=======================================
router
    .route("/editarvenda")
    .get((req, res)=>{
        if(req.query.id_venda){
            
            var query = "SELECT dt_venda, hora_venda, nome_func, nome_cliente, unidades_vendidas  from Venda inner join Funcionario using(id_func) inner join Produto_Venda using(id_venda) inner join Produto using(id_produto) inner join Cliente using(id_cliente) Where id_venda =" + req.query.id_venda  + ";SELECT id_func, nome_func FROM Funcionario; SELECT id_produto, titulo_produto FROM Produto;";

            runQuery(query, function(err, result, fields){
                if(result && result.length > 0) {    
                    var html="";
                    html += topo_func;
                    html += nav_func;
                    html += "<section class='home' id=''>\n";
                    html += "<div class='container editaproduto'>\n";
                  
                    //form
                    html += "<form name='formulario' method='get' action='editar_venda_processa' >\n";
                    
                    //ID_PRODUTO HIDDEN
                    html += "<input type='hidden' value='" + req.query.id_venda + "' name='id_venda'>\n";

                    html += "<div class='row'>\n";
                    html += "<div class='col-11'>\n";
                    html += "<h3>Alterar Venda</h3>"
                    html += "</div>\n";
                    html += "<div class='col-1'>\n";
                    html += "<a href='vendas' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
                    html += "</div>\n";
                    html += "</div>\n";
                    
                    html += "<div class='formcompra'>\n";

                    //DATA ELABORAÇÃO
                    html += "<div class='row mb-3 inputproduto'><label for='data' class='col-sm-2 col-form-label col-form-label-sm'>Data de venda:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='data' name='dt_venda' value='"  + new Date(result[0][0].dt_venda).getFullYear() + "/" + (new Date(result[0][0].dt_venda).getMonth() +1)+ "/" + new Date(result[0][0].dt_venda).getDate() 
                    + "'></div></div>\n";
                    //HORA da Cvenda
                    html += "<div class='row mb-3 inputproduto'><label for='material' class='col-sm-2 col-form-label col-form-label-sm'>Hora da venda:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='material' value='" + result[0][0].hora_venda + "' name='hora_venda'></div></div>\n";
                    //NOME DO FUNCIONARIO
                    html += "<div class='row mb-3 inputproduto'><label for='artista' class='col-sm-2 col-form-label col-form-label-sm'>Nome Funcionario:</label><div class='col-sm-10'> <select name='id_func'>\n";
                    for (var i = 0; i < result[1].length; i++) {
                        html += "<option value='" + result[1][i].id_func + "'>" + result[1][i].nome_func + "</option>\n";
                    }
                    html += "</select></td></tr>\n";
                    html +="</div></div>\n"; 
                    /*
                    //NOME Produto
                    html += "<div class='row mb-3 inputproduto'><label for='produto' class='col-sm-2 col-form-label col-form-label-sm'>Produto:</label><div class='col-sm-10'> <select name='id_produto'>\n";
                    for (var i = 0; i < result[2].length; i++) {
                        html += "<option value='" + result[2][i].id_produto + "'>" + result[2][i].titulo_produto + "</option>\n";
                    }
                    html += "</select></td></tr>\n";
                    html +="</div></div>\n"; */
                    
                    //unidades vendadas 
                    html += "<div class='row mb-3 inputproduto'><label for='stock' class='col-sm-2 col-form-label col-form-label-sm'>Unidades:</label><div class='col-sm-10'><input type='number' class='form-control form-control-sm' id='stock'  name='unidades_vendidas' value='" + result[0][0].unidades_vendidas + "'></div></div>\n";
                    
                    //BOTÃO DE SALVAR 
                    html += "<button type='submit'>SALVAR</button>\n";
                    html += "</form>\n";

                    html += "</div></div>\n";
                    html += "</section>\n";
                    html += fundo_func;
                    res.send(html)
                   
                }
            }); 
            
        }
        else{
            res.redirect('404page');
        }
    }); 

//=======================================

//     PROCESSA EDITA VENDA

//=======================================

router
.route("/editar_venda_processa")
.get((req, res)=>{
        //verificar se os campos foram preenchidos
        if(req.query.unidades_vendidas && req.query.hora_venda && req.query.id_func && req.query.id_venda && req.query.unidades_vendidas && req.query.id_venda){ 
            
            var query ="UPDATE Venda SET dt_venda = '" + req.query.dt_venda + "', hora_venda = '" + req.query.hora_venda + "', id_func = '" + req.query.id_func + "' WHERE id_venda ='" + req.query.id_venda + "'; UPDATE Produto_Venda SET  unidades_vendidas = '" + req.query.unidades_vendidas + "' WHERE id_venda ='" + req.query.id_venda + "';";   
            
            runQuery(query, function (err, result, fields) {            
               if(result[0] && result[0] .affectedRows> 0){
                    res.redirect('vendas'); 
                }
               else{
                res.redirect('erroinput');
                }
            });
        }
        else{
            res.redirect('erroinput2');
        };
}); 

//=======================================

//     ADICIONA VENDA

//=======================================

router
.route("/adicionarvenda")
.get((req, res)=>{
    var html="";
    html += topo_func;
    html += nav_func;
    html += "<section class='home' id=''>\n";
    html += "<div class='violeta editaproduto'><div class='alteraproduto'>\n";
    
    //inicio do formulario

    var query = "SELECT id_func, nome_func FROM Funcionario order by nome_func; SELECT id_produto, titulo_produto FROM Produto order by titulo_produto; SELECT id_cliente, nome_cliente FROM Cliente order by nome_cliente";

    runQuery(query, function (err, result, fields) {
        if (result.length > 0) { 
            //form
            html += "<form name='formulario' method='get' action='adicionar_venda_processa' >\n";
            
            //DATA ELABORAÇÃO
            html += "<div class='row mb-3 inputproduto'><label for='data' class='col-sm-2 col-form-label col-form-label-sm'>Data de venda:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='data' placeholder='2020/05/12' name='dt_venda'></div></div>\n";
            //HORA da venda
            html += "<div class='row mb-3 inputproduto'><label for='material' class='col-sm-2 col-form-label col-form-label-sm'>Hora da venda:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='material' placeholder='19:00' name='hora_venda'></div></div>\n";
            //NOME DO FUNCIONARIO
            html += "<div class='row mb-3 inputproduto'><label for='artista' class='col-sm-2 col-form-label col-form-label-sm'>Nome Funcionario:</label><div class='col-sm-10'> <select name='id_func'>\n";
            for (var i = 0; i < result[0].length; i++) {
                html += "<option value='" + result[0][i].id_func + "'>" + result[0][i].nome_func + "</option>\n";
            }
            html += "</select></td></tr>\n";
            html +="</div></div>\n"; 
            //NOME Produto
            html += "<div class='row mb-3 inputproduto'><label for='produto' class='col-sm-2 col-form-label col-form-label-sm'>Produto:</label><div class='col-sm-10'> <select name='id_produto'>\n";
            for (var i = 0; i < result[1].length; i++) {
                html += "<option value='" + result[1][i].id_produto + "'>" + result[1][i].titulo_produto + "</option>\n";
            }
            html += "</select></td></tr>\n";
            html +="</div></div>\n"; 

            //NOME cliente
            html += "<div class='row mb-3 inputcliente'><label for='cliente' class='col-sm-2 col-form-label col-form-label-sm'>cliente:</label><div class='col-sm-10'> <select name='id_cliente'>\n";
            for (var i = 0; i < result[2].length; i++) {
                html += "<option value='" + result[2][i].id_cliente + "'>" + result[2][i].nome_cliente + "</option>\n";
            }
            html += "</select></td></tr>\n";
            html +="</div></div>\n"; 
            
            //unidades vendadas 
            html += "<div class='row mb-3 inputproduto'><label for='stock' class='col-sm-2 col-form-label col-form-label-sm'>Unidades:</label><div class='col-sm-10'><input type='number' class='form-control form-control-sm' id='stock' placeholder='escrever numero de unidades' name='unidades_vendidas'></div></div>\n";
            
            //BOTÃO DE SALVAR 
            html += "<button type='submit'>ADICIONAR</button>\n";
            html += "</form>\n";

            html += "</div></div>\n";
            html += "</section>\n";
            html += fundo_func;
            res.send(html)
        }
        else{
            res.redirect('erroinput');
        }
    });
    
});

//=======================================

//     PROCESSA ADICIONAR VENDA

//=======================================

router
.route("/adicionar_venda_processa")
.get((req, res)=>{
        //verificar se os campos foram preenchidos
        if(req.query.unidades_vendidas && req.query.dt_venda && req.query.hora_venda && req.query.id_func && req.query.id_produto ){ 
            
         var query2 = "insert INTO Venda values(null, '" + req.query.dt_venda + "',  '" + req.query.hora_venda + "',  '" + req.query.id_func + "', '" + req.query.id_cliente + "'); insert INTO Produto_Venda values( '" + req.query.id_produto + "',LAST_INSERT_ID(),'" + req.query.unidades_vendidas + "'); ";
            
            runQuery(query2, function (err, result, fields) {     
                //adicionar fotografia a pasta
                if(result[1] && result[1].affectedRows > 0){
                    //direcionar para a pagina de produtos
                    res.redirect('vendas'); 
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

//     MOSTRAR PERFIL FUNCIONARIO

//=======================================
    router
    .route("/perfil")
    .get((req, res)=>{

        var query = "SELECT nome_func, username_func, dn_func, morada_func, mail_func, password_func, contacto_func FROM Funcionario where id_func =" + req.session.id_func + ";";
        var html="";
        
        
        runQuery(query, function (err, result, fields) {
            if (result.length > 0) { 
                html += topo_func;
                html += nav_func;
                html += "<section class='home' id=''>\n";
                html += "<div class='container mostraperfil'>\n";
                
                html += "<div class='row'>\n";
                
                html += " <div class='col-6 perfilfunc'>\n";
                //TITULO DA PÁGINA
                html += "<h3>Continue com o bom trabalho</h3>"
                // INFO DO FUNCIONÁRIO
                html += "<p>Nome: <span> " + result[0].nome_func + "</span></p>"
                html += "<p>Username: <span> " + result[0].username_func + "</span></p>"
                html += "<p>Data de nascimento: <span> "  + new Date(result[0].dn_func).getFullYear() + "/" + (new Date(result[0].dn_func).getMonth() +1) + "/" + new Date(result[0].dn_func).getDate() 
                + "</span></p>"
                html += "<p>Morada: <span> " + result[0].morada_func + "</span></p>"
                html += "<p>Email: <span>  " + result[0].mail_func + "</span></p>"
                html += "<p>Contacto: <span> " + result[0].contacto_func + "</span></p>"
            
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
                html += fundo_func;

                res.send(html)}
            else{
                res.redirect('404page');
            }
        });
    });

//=======================================

//     EDITAR PERFIL FUNCIONARIO

//=======================================
router
.route("/editarperfil")
.get((req, res)=>{

    var query = "SELECT nome_func, username_func, dn_func, morada_func, mail_func, password_func, contacto_func FROM Funcionario where id_func =" + req.session.id_func + ";";
    var html="";
    
    runQuery(query, function (err, result, fields) {
        if(result && result.length > 0) { 
            html += topo_func;
            html += nav_func;
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
            // NOME DO FUNCIONARIO
            html += "<div class='row mb-3 inputproduto'><label for='nome_func' class='col-sm-2 col-form-label col-form-label-sm'>Nome:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='nome_func' name='nome_func' value='" + result[0].nome_func + "'></div></div>\n";
            //USERNAME DO FUNCIONARIO
            html += "<div class='row mb-3 inputproduto'><label for='username_func' class='col-sm-2 col-form-label col-form-label-sm'>Username:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='username_func' name='username_func' value='" + result[0].username_func + "'></div></div>\n";
            //DATA DE NASCIMENTO
            html += "<div class='row mb-3 inputproduto'><label for='dtn_func' class='col-sm-2 col-form-label col-form-label-sm'>Data de Nascimento:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='dtn_func' name='dn_func' value='"  + new Date(result[0].dn_func).getFullYear() + "/" + (new Date(result[0].dn_func).getMonth() +1)+ "/" + new Date(result[0].dn_func).getDate() 
            + "'></div></div>\n";
            //MORADA 
            html += "<div class='row mb-3 inputproduto'><label for='morada_func' class='col-sm-2 col-form-label col-form-label-sm'>Morada:</label><div class='col-sm-10'><input type='text' class='form-control form-control-sm' id='morada_func' name='morada_func' value='" + result[0].morada_func + "'></div></div>\n";
            //EMAIL
            html += "<div class='row mb-3 inputproduto'><label for='mail_func' class='col-sm-2 col-form-label col-form-label-sm'>Email:</label><div class='col-sm-10'><input type='email' class='form-control form-control-sm' id='mail_func' name='mail_func' value='" + result[0].mail_func + "'></div></div>\n";
            //CONTACTO
            html += "<div class='row mb-3 inputproduto'><label for='contacto_func' class='col-sm-2 col-form-label col-form-label-sm'>Contacto:</label><div class='col-sm-10'><input  class='form-control form-control-sm' id='contacto_func' name='contacto_func' value='" + result[0].contacto_func + "'></div></div>\n";
            
            html += "</div>\n";
            // BOTÃO QUE SALVA AS ALTERAÇÕES
            html += "<button type='submit'>SALVAR</button>\n"; 
            html += "</form>\n";
            html += "</div>\n";
            html += "</div>\n";
            html += "</section>\n";
            html += fundo_func;

        
            res.send(html)
        }
        else{
            res.redirect('404page');
        }
    });
}); 

//=======================================

//    PROCESSSA EDITAR PERFIL FUNCIONARIO

//=======================================
router
.route("/editar_perfil_processa")
.get((req, res)=>{

    var query = "UPDATE Funcionario SET nome_func='" + req.query.nome_func + "', username_func='" + req.query.username_func + "', mail_func='" + req.query.mail_func + "', morada_func='" + req.query.morada_func + "',dn_func='" + req.query.dn_func + "', contacto_func='" + req.query.contacto_func + "' WHERE id_func= " + req.session.id_func + ";";
    var html="";
    
    if(req.query.nome_func && req.query.username_func && req.query.mail_func && req.query.morada_func && req.query.dn_func && req.query.contacto_func)
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

//     ALTERA PASSWORD FUNCIONARIO

//=======================================
router
.route("/editarpassword")
.get((req, res)=>{

  
    var query = "SELECT password_func FROM Funcionario WHERE id_func =" + req.session.id_func + ";"

    var html="";
    runQuery(query, function (err, result, fields) {
        html += topo_func;
        html += nav_func;
        html += "<section class='home' id=''>\n";
        html += "<div class='container violeta'>\n";
        
        html += "<div class='perfilfunc'>\n";
        
        html += " <div class='input_func row'>\n";

        //form
        html +=  "<form name='formulario' method='get' action='edita_passsword_processa'>\n";
        
        //hash da passsword antiga escondida
        html += "<div class='col-6'><label></label><input type='hidden' name='password_escondida' value='"+result[0].password_func+"'></div>\n"; 

        //ANTIGA PASSWORD
        html += "<div class='col-6'><label>Password Antiga:</label><input class='form-control form-control-sm' type='password' name='password_func_antiga' </div>\n";

        //NOVA PASSWORD
        html += "<div class='col-6'><label>Nova password:</label><input class='form-control form-control-sm' type='password' name='nova_password_func'></div>\n";
        html += "</div>\n";
        // BOTÃO QUE SALVA AS ALTERAÇÕES

        html += "<button type='submit'>SALVAR</button>\n"; 
        html += "</div>\n";
        html += "</div>\n";
        html += "</form>\n";
        html += "</section>\n";
        html += fundo_func;

        res.send(html)
    });
});

//=======================================

//     PROCESSA PASSWORD FUNCIONARIO

//=======================================
router
.route("/edita_passsword_processa")
.get((req, res)=>{
    
    
    let password = crypto.createHash("sha1").update(req.query.password_func_antiga).digest('hex');
    var query = "UPDATE Funcionario SET password_func=sha('" + req.query.nova_password_func + "') WHERE id_func =" + req.session.id_func + ";"
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

//     PÁGINA DE ERRO

//=======================================
router
.route("/erroinput")
.get((req, res)=>{
    var html='';
    html += topo_func;
    html += "<div class='fundobk'>\n";
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Verifica se inseriste corretamente os dados</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='homepageFuncionarios' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    html += "</div>\n";
    html+= fundo_func;
    res.send(html)
});

router
.route("/erroinput2")
.get((req, res)=>{
    var html='';
    html += topo_func;
    html += "<div class='fundobk'>\n";
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Tens que preencher todos os campos</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='homepageFuncionarios' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    html += "</div>\n";
    html+= fundo_func;
    res.send(html)
});

router
.route("/erroinput3")
.get((req, res)=>{
    var html='';
    html += topo_func;
    html += "<div class='fundobk'>\n";
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Tens que selecionar o que pretendes eliminar</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='homepageFuncionarios' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    html += "</div>\n";
    html+= fundo_func;
    res.send(html)
});

router
.route("/404page")
.get((req, res)=>{
    var html='';
    html += topo_func;
    
    html += "<div class='container errpage'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11 gatoerr'>\n";
    html += "<lottie-player src='https://assets4.lottiefiles.com/packages/lf20_ueovf9mk.json'  background='transparent'  speed='1'  style='width: 600px; height: 600px;' autoplay></lottie-player>"
    html += "<h3>Ops...Alguma coisa correu mal</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='homepageFuncionarios' class='closebtn' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    
    html += "</div>\n";
    html += "</div>\n";
    html+= fundo_func;
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