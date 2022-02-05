CREATE DATABASE  IF NOT EXISTS `fsousa` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `fsousa`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: saturno.esec.pt    Database: fsousa
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Produto`
--

DROP TABLE IF EXISTS `Produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Produto` (
  `id_produto` int(11) NOT NULL AUTO_INCREMENT,
  `titulo_produto` varchar(45) NOT NULL COMMENT 'Título do produto dado pelo artista correspondente. ',
  `dt_elaboracao_produto` date NOT NULL COMMENT 'Data da elaboração do produto. ',
  `material_produto` text NOT NULL COMMENT 'Material utilizado para a elaboração do produto, dando a margem de 200 carateres para o artista descrever os materiais utilizados. ',
  `categoria_produto` varchar(45) NOT NULL COMMENT 'Categoria artística a que o produto pertence, pode ser esta Ilustração, Escultura, entre outras.\nEsta definição fica ao critério do próprio artísta. ',
  `preco_compra` decimal(10,0) unsigned NOT NULL COMMENT 'Preço a que o produto é comprado pelo Gato Pardo. \nEste preço só aceita valores positivos, uma vez que se refere ao valor em euros. ',
  `preco_venda` decimal(10,0) unsigned NOT NULL COMMENT 'Preço a que o produto é vendido ao cliente. \nEste preço só aceita valores positivos, uma vez que se refere ao valor em euros. ',
  `stock_produto` int(10) unsigned NOT NULL COMMENT 'Stock do produto referente à quantidade de produtos disponíiveis para venda. \nEste stock só aceita valores a partir do 0 que sejam positivos. ',
  `fotografia_produto` blob NOT NULL COMMENT 'Para a apresentação do produto, é necessário que o artista faça o upload de uma fotografia de exibição do produto em questão. ',
  `id_artista` int(11) NOT NULL,
  PRIMARY KEY (`id_produto`),
  UNIQUE KEY `idProduto_UNIQUE` (`id_produto`),
  KEY `fk_Produto_Artista1_idx` (`id_artista`),
  CONSTRAINT `fk_Produto_Artista1` FOREIGN KEY (`id_artista`) REFERENCES `Artista` (`id_artista`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Produto`
--

LOCK TABLES `Produto` WRITE;
/*!40000 ALTER TABLE `Produto` DISABLE KEYS */;
INSERT INTO `Produto` VALUES (2,'Catober','2019-01-22','    Papel','Ilustração',10,20,11,_binary 'catober.PNG',1),(3,'À espera','2001-06-03','Papel fotografico         ','Fotografia',150,350,5,_binary 'aespera.jpg',2),(4,'Galápagos','1998-05-03','Papel fotografico','Fotografia',250,350,5,_binary 'galapagos.jpg',2),(5,'Imaginario','2012-05-22','Papel fotografico','Fotografia',300,400,5,_binary 'imaginario.jpg',2),(6,'Holy Cat','2022-08-04','Impressão  ','Ilustração',13,17,25,_binary 'holy_cat.PNG',1),(8,'Vespera','2020-02-22','Serigrafia','Ilustração',15,20,25,_binary 'adrelobawork.jfif',7),(9,'entre blocos','2021-04-06','Impressão','Ilustração',14,17,30,_binary 'desenho_andreL.jpg',7),(10,'dois mundos','2018-05-21','Impressão','Ilustração',12,20,20,_binary 'desenhoKarla.jpg',8),(11,'Madama Butterfly','2020-02-23','Impressão','Ilustração',12,18,10,_binary 'desenhorHKarla2.jfif',8),(12,'Peixinhos na Cabeça','2017-05-21','Impressão ','Ilustração',10,14,50,_binary 'pexinhosnacabeca.jpg',17),(13,'Nelson ','2021-06-17','Impressão','Ilustração',18,23,26,_binary 'carrilho_ilustra.jfif',16),(14,'Ponto de vista','2016-06-03','Acrilica','Ilustração',30,50,5,_binary 'ruivo_ad.jpg',15),(15,'Chamei pelo teu nome','2019-03-03','Papel fotografico','Fotografia',15,20,10,_binary 'brazio-ft6.PNG',22),(16,'Bang!','2021-03-06','Papel fotografico','Fotografia',15,20,4,_binary 'brasio_foto1.jpg',22),(17,'1986','2015-02-03','CD','Musica',8,12,50,_binary '1986.jpg',14),(18,'Semente','2022-02-22','Vinil','Musica',14,20,50,_binary 'vinil-cassetePirata.jfif',20),(19,'O meu avô','2003-03-12','Impressão','Ilustração',6,12,30,_binary 'omeuAvo-sobral.jfif',18),(20,'Jibóia','2006-06-01','Photoshop','Ilustração',8,10,50,_binary 'marsupial-claudia.jpg',24),(21,'Vem','2007-06-01','Aguarela','Ilustração',20,25,10,_binary 'Vem.jpg',26),(22,'Vem à quinta','2018-02-22','Livro ','Literatura',8,12,50,_binary 'livro-vem-a-quinta-feira-filipa-leal.jpg',12),(23,'Ninguém Nos Vai Tirar O Sol','2021-04-20','CD','Musica',6,10,50,_binary 'ninguemNosVaiTirarOSol.jpg',13),(24,'A rainha do norte','2004-02-01','Serigrafia','Ilustração',8,12,30,_binary 'rainhaDoNorte.jpg',27),(25,'The Great Square of Pegasus','2003-05-01','CD ','Musica',5,10,25,_binary 'cdJOAO.png',11),(26,'Saramago','2007-03-01','Impressão','Ilustração',8,13,25,_binary 'saramago.png',25),(27,'Mão amiga(?)','2019-02-03','Impressão','Ilustração',8,12,50,_binary 'ANTONIO-JORGE-GONCALVES-23.jpg',19),(28,'Livro Sobre Nada','1998-02-03','Livro','Literatura',10,15,50,_binary 'livroSobreONada.jpg',4),(29,'Meninos das Lágrimas','2017-01-02','Acrilica','Ilustração',40,60,25,_binary 'meninosDasLagrimas.jpeg',5),(30,'Apito','2003-03-04','Impressão ','Ilustração',8,12,30,_binary 'ostraliana.png',10),(31,'Tio Tomás','2003-05-01','Impressão','Ilustração',10,15,60,_binary 'tioTomas.jpg',9),(32,'6º sentido','2008-01-03','Impressão','Ilustração',8,12,10,_binary 'Sara_Feio.jpg',23),(33,'Avó bailarina','2002-02-12','Impressão','Ilustração',10,14,15,_binary 'vovo.jpg',28),(34,'gatinho fofo','2019-05-22','impressão','ilustração',10,15,3,_binary 'gatinho fofo.jpg',1),(35,'Acid','2019-05-22','impressão','ilustração',10,15,5,_binary 'Acid.jpg',1);
/*!40000 ALTER TABLE `Produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-26 22:30:09
