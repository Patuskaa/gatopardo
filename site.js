//CONST AND MODULES 
const bodyParser = require("body-parser");
const express = require("express");
const fileUpload = require("express-fileupload");

const session = require("express-session");


var site = express();

//create server
var server = site.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("servidor a ser executado em " + host + ":" + port);
});

// static pages
site.use(express.static("public"));

//send files
site.use(fileUpload());


//separar o que sao parametros do resto usado no metodo post 
var urlEncodedParser = bodyParser.urlencoded({
    extended: true
});

// use mysq
var mysql = require("mysql");

//create session
site.use(session({
    secret: "supercalifragilisticexpialidocious",
    resave: false,
    saveUninitialized: true
}));

// conection to MySQL
var pool = mysql.createPool({
    host: "saturno.esec.pt",
    user: "fsousa",
    password: "UgRN8FzXY4MMBvC5",
    database: "fsousa",
    charset: "utf8",
    multipleStatements: true
});

//pedido para criar rota
const funcionarios = require("./routes/funcionarios");
const clientes = require("./routes/clientes");
const artistas = require("./routes/artistas")




// topo dos ficheiros HTML gerados para cada página
var topo_login = "";
topo_login += "<!DOCTYPE html>\n";
topo_login += "<html>\n";
topo_login += "<head>\n";
topo_login += "<title>Gato Pardo</title>\n";
topo_login += "<meta charset='utf8'>\n";
//BOOTSTRAP
topo_login += " <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>\n";
topo_login += "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script>";
// FONTAWESOME
topo_login += "<script src='https://kit.fontawesome.com/41df33ebd8.js' crossorigin='anonymous'></script> \n";
topo_login += "<script src=https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js></script>\n";
topo_login += "<script src='https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js'></script>\n";
// CSS da pagina 
topo_login += "<link rel='stylesheet' href='/login.css'> \n";
topo_login += "<script async src='login.js'></script>\n";
topo_login += "</head>\n";
topo_login += "<body>\n";

// fundo dos ficheiros HTML gerados para cada página
var fundo_login = "";
fundo_login += "</body>\n";
fundo_login += "</html>\n";



// === RAIZ DO SITE ==
site.get("/", function (req, res) {
    
    
    
    var html = "";
    html += topo_login;

    html += "<div class='container pglogin' id='container'>\n";
    html += "<div class='form-container sign-up-container'>\n";

  
    //==== REGISTO DO ARTISTA ===//
    html += "<form action='processa_registo_artista' method='post' id='form_registo_artista' enctype='multipart/form-data'>\n";
    html += "<div class='registoartista'>"
    html += "<h1>Registo</h1>\n";
    
    html += "<input class='col-5' type='text' placeholder='nome*' name='nome_artista'/>\n";
    html += "<input class='col-5' type='text' placeholder='apelido*' name='X'/>\n";
    
    html += "<input class='col-5' type='text' placeholder='nome artístico' name='nome_artistico'/>\n";
    html += " <input class='col-5' type='text' placeholder='categoria artística*' name='categoria_artista'/>\n";

    html += "<input class='col-5' type='text' placeholder='localidade*' name='localidade_artista'/>\n";
    html +="<input class='col-5' type='text' placeholder='website' name='website_artista'/>\n";

    html += "<div class='row  gy-2 gx-3 align-items-center'>\n";
    html += "<div class='col-3 input-group'>\n";
    html += "<span ><i class='fab fa-facebook'></i></span>\n";
    html +="<input type='text' placeholder='/...' name='facebook_artista'/>\n";
    html +="</div>\n";

    html += "<div class='col-3 input-group'>\n";
    html += "<span ><i class='fab fa-instagram'></i></span>\n";
    html +="<input type='text' placeholder='/...' name='instagram_artista'/>\n";
    html +="</div>\n";

    html += "<div class='col-3 input-group'>\n";
    html += "<span ><i class='fab fa-behance'></i></span>\n";
    html +="<input type='text' placeholder='/...' name='behance_artista'/>\n";
    html +="</div>\n";
    html +="</div>\n";
    
    html += " <input class='col-10' type='email' placeholder='email*' name='email_artista'/>\n";

    html += " <input class='col-5' type='text' placeholder='username*' name='username_artista'/>\n";
    html += "<input class='col-5' type='password' placeholder='password*' name='password_artista'/>\n";

    html += "<textarea name='biografia_arista' rows='4' cols='50' maxlength='200' placeholder='biografia*'></textarea>"

    //fotografia
    html += "<label for='foto'><lord-icon src='https://cdn.lordicon.com/vixtkkbk.json' trigger='morph' colors='primary:#F4F4F9,secondary:#F4F4F9' stroke='80' style='width:30px;height:30px'> </lord-icon> Escolher fotografia</label><input type='file' id='foto' name='fotografia_artista'></td></tr>\n";

    html += "<div class='d-grid gap-2 col-6 mx-auto'>\n";
    html += " <button>Registar</button>\n";
    html += "</div>\n";

    html += "</form>\n";
    html += "</div>\n";

   //==== REGISTO DO CLIENTE===//
    
   html += "<form action='processa_registo_cliente' method='get' id='form_registo_cliente'>\n";
   
   html += "<div class='registocliente'>"
   html += "<h1>Registo</h1>\n";
   
   html += "<input class='col-5' type='text' placeholder='nome*' name='nome_cliente'/>\n";
   html += "<input class='col-5' type='text' placeholder='apelido*' name='apelido_cliente'/>\n";
   
   html += "<input class='col-10' type='text' placeholder='morada*' name='morada_cliente'/>\n";
   
   html += " <label>Data de nascimento* :</label>"
   html += "<input class='col-6' type='text' name='dn_cliente' placeholder='1996/10/05'/>\n";

   //GÊNERO//
   html += "<div class='form-check form-check-inline'>\n";
   html += "<input class='form-check-input' type='radio' id='masculino' value='masculino' name='sexo_cliente'/>\n";
   html += "<label class='form-check-label' for='masculino'>masculino</label>\n";
   html += "</div>\n";

   html += "<div class='form-check form-check-inline'>\n";
   html += "<input class='form-check-input' type='radio' id='feminino' value='feminino' name='sexo_cliente'/>\n";
   html += "<label class='form-check-label' for='feminino'>feminino</label>\n";
   html += "</div>\n";

   html += "<div class='form-check form-check-inline'>\n";
   html += "<input class='form-check-input' type='radio' id='outro' value='outro' name='sexo_cliente'/>\n";
   html += "<label class='form-check-label' for='outro'>outro</label>\n";
   html += "</div>\n";

   html += "<input class='col-5' type='text' placeholder='profissão*' name='profissao_cliente'/>\n";
   html += "<label> nif* </label>\n";
   html += "<input class='col-4' type='text' name='nif_cliente'/>\n";

   html += " <input class='col-10' type='email' placeholder='email*' name='email_cliente'/>\n";
   html += "<input class='col-5' type='text' placeholder='username*' name='username_cliente'/>\n";
   html += "<input class='col-5' type='password*' placeholder='Password' name='password_cliente'/>\n";
   html += "<div class='d-grid gap-2 col-6 mx-auto'>\n";
   html += "<button>Registar</button>\n";
   html += " </div>\n";
   html += "</form>\n";
   html += "</div>\n";
   html += " </div>\n";
   


   //==== LOGIN GERAL ===//
   
   html += "<div class='form-container sign-in-container'>\n";

   // metodo get associado ao form// 
   html += "<form name='formulario' method='get' action='processa_login' >\n";
   html += " <h1>Login</h1>\n";
   html += " <input type='text' placeholder='username' name ='username' />\n";
   html += "<input type='password' placeholder='Password' name='password'/>\n";
   html += " <button type='submit'>login</button>\n";
   html += "</form>\n";
   html += "</div>\n";
   

   // == OVERLAY ==/ 
   html += "<div class='overlay-container'>\n";
   html += "<div class='overlay'>\n";
   html += " <div class='overlay-panel overlay-left'>\n";
   html += "<img src='Gato Pardo.svg' width='100px'>\n";
   html += " <h1>Já tens conta?</h1>\n";
   html += " <button class='ghost' id='login'>login</button>\n";
   html += " </div>\n";
   html += " <div class='overlay-panel overlay-right'>\n";
   html += "<img src='Gato Pardo.svg' width='90px'>\n";
   html += "<h1>Novo por aqui?</h1>\n";
   html += " <p>Qual é o teu propósito?</p>\n";
   html += " <button class='ghost' id='registo_cliente'>Comprar</button>\n";
   html += " <button class='ghost' id='registo_artista'>Vender</button>\n";
   html += "</div>\n";
   html += "</div>\n";
   html += "</div>\n";
   html += "</div>\n";
 

    html += fundo_login;
    res.send(html);
});




//=======================================

//   PROCESSA  LOGIN E ENTRA NA HOMEPAGE 

//=======================================

site.get("/processa_login", (req, res) => {
    var query = "SELECT id_func, nome_func FROM Funcionario WHERE username_func= '" + req.query.username + "'  AND password_func= SHA('" + req.query.password+ "'); SELECT id_artista FROM Artista WHERE username_artista= '" + req.query.username + "'  AND password_artista= SHA('" + req.query.password + "'); SELECT id_cliente FROM Cliente WHERE username_cliente= '" + req.query.username + "'  AND pasword_cliente= SHA('" + req.query.password+ "');";
    
    if(req.query.username && req.query.password){
        runQuery(query, function (err, result, fields) {
            var html = "";
            
            console.log(query)
            if (result[0].length > 0) {
                
                // fazer iniciar a sessao 
                req.session.id_func = result[0][0].id_func;
                req.session.nome_func = result[0][0].nome_func;
                //usar a pagina funcionarios se session iniciada
                if (req.session.id_func){
                    site.use("/funcionarios", funcionarios);
                }
                res.redirect('funcionarios/homepageFuncionarios');
            
                
            }
            else if (result[1].length > 0) {
               
                // fazer iniciar a sessao 
                req.session.id_artista = result[1][0].id_artista;
                //usar a pagina artistas se session iniciada
                if (req.session.id_artista){
                    site.use("/artistas", artistas);
                }
                res.redirect('artistas/homepageArtistas');
            }
            else if (result[2].length > 0) {
                
                // fazer iniciar a sessao 
                req.session.id_cliente = result[2][0].id_cliente;
                req.session.nome_cliente = result[2][0].nome_cliente;
                //usar a pagina clientes se session iniciada
                if (req.session.id_cliente){
                    site.use("/clientes", clientes);
                }
                res.redirect('clientes/homepageClientes');

                
                
            }

            else {
                res.redirect('/loginerro');
            }
        }); 
    } else{
        res.redirect('/loginerro2');
    }
});


//=======================================

//   PAGINAS DE ERRO

//=======================================

site.get("/loginerro", function (req, res){
    var html='';
    html += topo_login;
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Verifica se inseriste corretamente os dados</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='/' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    res.send(html)
});

site.get("/loginerro2", function (req, res){
    var html='';
    html += topo_login;
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Os campos são obrigatórios</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='/' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    res.send(html)
});

//=======================================

//   PROCESSA  REGISTO CLIENTE E ENTRA NA HOMEPAGE 

//=======================================


site.get("/processa_registo_cliente", (req, res) => {
   
   
   if (req.query.nome_cliente && req.query.email_cliente && req.query.username_cliente && req.query.morada_cliente && req.query.password_cliente && req.query.nif_cliente && req.query.dn_cliente && req.query.profissao_cliente && req.query.sexo_cliente){
        var query = "INSERT INTO Cliente VALUES(null," + mysql.escape(req.query.nome_cliente) + ", " + mysql.escape(req.query.email_cliente) + ", " + mysql.escape(req.query.username_cliente) + ", " + mysql.escape(req.query.morada_cliente) + ", " + "sha("+ mysql.escape(req.query.password_cliente) +")" + ", " + mysql.escape(req.query.nif_cliente) + ", " + mysql.escape(req.query.dn_cliente) + ", " + mysql.escape(req.query.profissao_cliente) + ", " + mysql.escape(req.query.sexo_cliente) + " );";
            
        runQuery(query, function (err, result, fields) {
            var html = "";
            html += "<h2>cliente</h2>\n";
            if (result.affectedRows > 0) {
                res.redirect('/sucessoRegistoCliente');
            }
            else {
                res.redirect('/erroRegistoCliente2');
            }   
        });
    }
    else {
        res.redirect('/erroRegistoCliente');
    }
});



//=======================================

//   PAGINAS DE ERRO - REGISTO CLIENTE

//=======================================

site.get("/erroRegistoCliente", function (req, res){
    var html='';
    html += topo_login;
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Campos cliente não estão preenchidos</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='/' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    res.send(html)
});

site.get("/erroRegistoCliente2", function (req, res){
    var html='';
    html += topo_login;
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Não foi possível registar-te</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='/' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    res.send(html)
});


//=======================================

//   PAGINAS DE SUCESSO -- REGISTO CLIENTE

//=======================================

site.get("/sucessoRegistoCliente", function (req, res){
    var html='';
    html += topo_login;
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Olá e Bem Vindo! Só falta realizares o login com os teus dados</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='/' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    res.send(html)
});

//=======================================

//   PROCESSA  REGISTO ARTISTA E ENTRA NA HOMEPAGE 

//=======================================
site.post("/processa_registo_artista", urlEncodedParser, (req, res) => {
    
   
    if (req.body.nome_artista) {
     var query = "INSERT INTO Artista VALUES(null," + mysql.escape(req.body.nome_artistico) + ", " + mysql.escape(req.body.nome_artista) + ", "  + mysql.escape(req.body.categoria_artista) + ", " + mysql.escape(req.body.localidade_artista) + ", " + mysql.escape(req.body.instagram_artista) + ", " + mysql.escape(req.body.behance_artista) + ", " + mysql.escape(req.body.facebook_artista) + ", " + mysql.escape(req.body.website_artista) + ", " + mysql.escape(req.body.biografia_arista) + ", " + mysql.escape(req.body.email_artista) + ", " + mysql.escape(req.body.username_artista) + ", "+ "sha("+ mysql.escape(req.body.password_artista) +")" + ", " + mysql.escape(req.files.fotografia_artista.name) + " );";
 
        runQuery(query, function (err, result, fields) {
            var html = "";
            html += "<h2>artista</h2>\n";
            if (result.affectedRows > 0) {
                html += "<p>o autor " + req.body.nome_artista + " foi inserido com sucesso</p>\n";
                req.files.fotografia_artista.mv("public/uploads/" + req.files.fotografia_artista.name, function (err) {
                    if (err) console.error(err);
                });
                res.redirect('/');
            }
            else {
                res.redirect('/erroRegistoArtista2');
            }  
        });
        
    }
    else {
        res.redirect('/erroRegistoArtista');
    };
});


//=======================================

//   PAGINAS DE ERRO - REGISTO CLIENTE

//=======================================

site.get("/erroRegistoArtista", function (req, res){
    var html='';
    html += topo_login;
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Campos Artista não estão preenchidos</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='/' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    res.send(html)
});

site.get("/erroRegistoArtista2", function (req, res){
    var html='';
    html += topo_login;
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Não foi possível registar-te</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='/' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    res.send(html)
});


//=======================================

//   PAGINAS DE SUCESSO -- REGISTO CLIENTE

//=======================================

site.get("/sucessoRegistoArtista", function (req, res){
    var html='';
    html += topo_login;
    html += "<div class='container msgerro'>\n";
    html += "<div class='row'>\n";

    html += "<div class='col-11'>\n";
    html += "<h3>Olá e Bem Vindo! Só falta realizares o login com os teus dados</h3>"
    html += "</div>\n";
    
    html += "<div class='col-1'>\n";
    html += "<a href='/' > <lottie-player src='https://assets1.lottiefiles.com/packages/lf20_egf5v4o8.json'  background='transparent'  speed='1'  style='width: 30px; height: 30px;' hover></lottie-player></a>";
    html += "</div>\n";
    
    html += "</div>\n";
    html += "</div>\n";
    res.send(html)
});



//=======================================

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

