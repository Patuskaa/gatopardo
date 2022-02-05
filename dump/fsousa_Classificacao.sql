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
-- Table structure for table `Classificacao`
--

DROP TABLE IF EXISTS `Classificacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Classificacao` (
  `id_class` int(11) NOT NULL AUTO_INCREMENT,
  `valor_class` int(10) unsigned NOT NULL COMMENT 'Este valor é referente à classificação que o cliente dá ao produto.\nEste atributo aceita valores entre 0 e 5, ou seja apenas valores positivos. ',
  `comentario_class` text COMMENT 'Relativo ao comentário que o cliente tem a opção de escever.\nSe assim o desejar, o cliente tem 300 carateres para escrever a sua opinião sobre uum determinado produto. ',
  `dt_class` date NOT NULL COMMENT 'Relativamente à data que foi efetuado a classificação. ',
  `hora_class` time NOT NULL COMMENT 'Relativamente à hora que foi efetuado a classificação. ',
  `id_cliente` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  PRIMARY KEY (`id_class`),
  UNIQUE KEY `id_class_UNIQUE` (`id_class`),
  KEY `fk_Classificacao_Cliente1_idx` (`id_cliente`),
  KEY `fk_Classificacao_Produto1_idx` (`id_produto`),
  CONSTRAINT `fk_Classificacao_Cliente1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Classificacao_Produto1` FOREIGN KEY (`id_produto`) REFERENCES `Produto` (`id_produto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Classificacao`
--

LOCK TABLES `Classificacao` WRITE;
/*!40000 ALTER TABLE `Classificacao` DISABLE KEYS */;
INSERT INTO `Classificacao` VALUES (1,5,'Comprei esta ilustração para o quarto do meu filho e amei!! A impressão tem muita qualidade!','2022-01-12','19:00:00',23,12),(2,5,'Foi uma boa compra!! Trouxe muita cor à parede do quarto dos brinquedos','2022-01-15','19:00:00',8,12),(3,5,'Melhor ilstração do mundo..AAAMAMMMMOOO','2022-01-13','14:00:00',10,12),(4,5,'Ofereci ao meu sobrinho e ele agora só pensa em pescar!!! :) ','2022-01-25','04:43:00',16,12),(5,5,'Esta ilustração combinou tão bem com o cd dos Clã!!! Quando a vi tive de comprar.. Adorei <3','2022-01-25','04:55:00',16,8),(9,5,'Adoro as cores!!!','2022-01-25','16:02:00',16,12),(10,3,'AMEI ... cores vivas :) ','2022-01-25','16:05:00',16,12),(11,5,'AMEI ','2022-01-25','16:06:00',16,12),(12,5,'Adoro peixes, que lindo, vou comprar 20!!','2022-01-25','20:03:00',16,12),(13,5,'Esta ilustração faz me lembrar o meu avô, que saudades!!','2022-01-26','01:22:00',5,19),(14,5,'Esta ilustração faz me lembrar o meu avô, que saudades!!','2022-01-26','01:22:00',5,19),(15,5,'Um jazz português de alta qualidade!!','2022-01-26','01:22:00',5,25),(16,5,'Ficou muito bem na minha sala. O Sebastião é o melhor!!','2022-01-26','01:22:00',5,5),(17,5,'Esta ilustração simples representa um mundo de sentimentos!!','2022-01-26','01:22:00',6,8),(18,5,'A força de uma imagem!!!','2022-01-26','01:22:00',6,3),(19,5,'Este livro é dos livros de poesia mais lindos da história portuguesa!!!','2022-01-26','01:22:00',8,22),(20,5,'Um olhar vale mais que mil palavras, e uma boa ilustração? ;)','2022-01-26','01:22:00',8,21),(21,4,'Ilustração muito gira, faz lembrar uma árvore de prédios!!','2022-01-26','01:22:00',21,9),(22,2,'uauuuu, que maravilhoso, este verde é lindo, ia ficar bem na minha sala com as minhas plantas.','2022-01-26','01:22:00',21,24),(23,4,'Nem o inverno!!! AHAHHAHAAHAHAH','2022-01-26','01:22:00',28,23),(24,5,'O jazz em Portugal está de boa saúde!! Viva.','2022-01-26','01:22:00',9,25),(25,4,'Vermelho de jiboiai!!! Adoro esta ilustração, quanta inspiração!!','2022-01-26','01:22:00',23,20),(26,5,'Esta leitura da mariana do menino das lágrimas é incrível.. Sempre genial Mariana!!','2022-01-26','01:22:00',7,29),(27,5,'Comprei esta ilustração há uma semana e já vou comprar mais duas iguais para oferecer.. LINDA!!!','2022-01-26','01:22:00',22,10),(28,5,'Sempre estendida para dar a mão, ou será passar a perna!!! Boa imagem !!','2022-01-26','01:22:00',22,27),(29,5,'Que saudades de olhar para cima :) Amei,.. A Catarina tem ilustrações lindas.','2022-01-26','01:22:00',22,19),(30,1,'Aí, credo que horror. Odeio cobras!! E este bigode também é muita feio!','2022-01-26','01:22:00',22,20),(31,4,'Adoro a série dos livros de Xadrez da Ostraliana para crianças, que bom que agora temos ilustrações!!!','2022-01-26','01:22:00',27,30),(32,4,'Este álbum tem uma magia muito própria.\r\nAqui se faz bom jazz português!','2022-01-26','01:22:00',27,25),(33,4,'O nosso mestre !!! ','2022-01-26','01:22:00',27,26),(34,5,'Oh que lindo, o Tio Tomás é a minha curta de animação preferida. Esta ilustração é maravilhosa finalmente a Regina vem para minha casa ehehehhe!!!','2022-01-26','01:22:00',10,31),(35,5,'Uaaauuu, a Semente em vinil, finalmente. Esta álbum é o melhor álbum de rock português, COMPRAR JÁ!!!','2022-01-26','01:22:00',26,18);
/*!40000 ALTER TABLE `Classificacao` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-26 22:30:14
