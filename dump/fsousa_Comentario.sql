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
-- Table structure for table `Comentario`
--

DROP TABLE IF EXISTS `Comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comentario` (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `texto_comentario` text NOT NULL COMMENT 'Comentário que o cliente poderá fazer sobre o artísta, na página de perfil do artísta.',
  `dt_comentario` date NOT NULL COMMENT 'Data em que o comentário foi realizado.',
  `hora_comentario` time NOT NULL COMMENT 'Hora em que o comentário foi realizado.',
  `id_cliente` int(11) NOT NULL,
  `id_artista` int(11) NOT NULL,
  PRIMARY KEY (`id_comentario`),
  UNIQUE KEY `id_comentario_UNIQUE` (`id_comentario`),
  KEY `fk_Comentario_Cliente1_idx` (`id_cliente`),
  KEY `fk_Comentario_Artista1_idx` (`id_artista`),
  CONSTRAINT `fk_Comentario_Artista1` FOREIGN KEY (`id_artista`) REFERENCES `Artista` (`id_artista`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comentario_Cliente1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comentario`
--

LOCK TABLES `Comentario` WRITE;
/*!40000 ALTER TABLE `Comentario` DISABLE KEYS */;
INSERT INTO `Comentario` VALUES (1,'É a melhor artista do mundo!!!!','2022-01-15','18:00:00',1,4),(2,'Uuauuuu que artista talentosa! Também amo gatos','2022-01-15','18:00:00',4,1),(3,'Que artista maravilhosa!!! Uma inspiração felina!!','2022-01-25','17:14:00',16,1),(4,'Que artista maravilhosa!!! Uma inspiração felina!!','2022-01-25','17:15:00',16,1),(5,'uauuu! também amo gatos!! \r\nque trabalho lindo!!','2022-01-25','17:17:00',16,1),(6,'amo, amo, amo!!!! vou encher a casa com estas ilustrações!!','2022-01-25','17:20:00',16,1),(7,'Melhor fotógrafo do mundo!!!','2022-01-25','20:03:00',16,2),(8,'Muito bom fotógrafo. A Cova da Moura é o melhor trabalho dele!!','2022-01-26','01:22:00',5,22),(9,'Esta geração de ilustradores é linda!! Adoro o trabalho do André.','2022-01-26','01:22:00',5,15),(10,'Muita poesia numa só pessoa <3','2022-01-26','01:22:00',5,28),(11,'A joana é a minha ilustradora preferida!! Uma sensibilidade única.','2022-01-26','01:22:00',6,27),(12,'Que músico incrível, conheci o João num concerto num hot club de Pt e fiquei apaixonada pela música.','2022-01-26','01:22:00',6,11),(13,'Uauuu, o rock em Portugal está com mais garra, adoro o cd \"A semente\". Vossa fã!','2022-01-26','01:22:00',6,20),(14,'Muito lindo o trabalho com os clã!','2022-01-26','01:22:00',6,7),(15,'A Regina é o nosso orgulho português na ilustração e na animação!!','2022-01-26','01:22:00',8,9),(16,'Que artista multitalentosa, é música é ilustração.. uauuuu','2022-01-26','01:22:00',8,24),(17,'O nada que é o tudo. O mestre maior <3','2022-01-26','01:22:00',8,4),(18,'Uauuu.. Quanta poesia, adoro a ilustração das duas velhinhas, para quando uma nova edição ?','2022-01-26','01:22:00',21,8),(19,'Andei na escola com a Catarina, já em criança era esta pessoa delicada, adoro o trabalho dela.','2022-01-26','01:22:00',21,18),(20,'Adoro ver os concertos de linda martini não sabia que ela também era ilustradora !! ','2022-01-26','01:22:00',28,24),(21,'Ilustrador com traço forte!!\r\nAdoro todo o trabalho do Jorge!!','2022-01-26','01:22:00',23,19),(22,'Amo a trabalho da Mariana, do humor à sensilidade num segundo.','2022-01-26','01:22:00',1,5),(23,'Adoro os murais, as paredes, os livros do Esgaio, é tudo absurdamente lindo, que bom que agora podemos comprar as ilustrações dele!!!','2022-01-26','01:22:00',7,17),(24,'De feio não tem nada, muito linda, e o seu trabalho é muito inspirador.','2022-01-26','01:22:00',22,23),(25,'Melhor banda de rock portuguesa da atualidade. ADORO','2022-01-26','01:22:00',26,20),(26,'A poesia em pessoa, aconselho a todos !!!','2022-01-26','01:22:00',12,12),(27,'Daniel tem  um talento inato, desde de criança que desenha bem!! ','2022-01-26','01:22:00',12,26),(28,'Eu também adoro gatos!','2022-01-26','03:52:00',2,1);
/*!40000 ALTER TABLE `Comentario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-26 22:30:12
