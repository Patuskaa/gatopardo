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
-- Table structure for table `Venda`
--

DROP TABLE IF EXISTS `Venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Venda` (
  `id_venda` int(11) NOT NULL AUTO_INCREMENT,
  `dt_venda` date NOT NULL COMMENT 'Data da realização da venda do produto. ',
  `hora_venda` time NOT NULL COMMENT 'Hora da realização da venda do produto. ',
  `id_func` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  PRIMARY KEY (`id_venda`),
  UNIQUE KEY `idCompra_UNIQUE` (`id_venda`),
  KEY `fk_Venda_Funcionario_idx` (`id_func`),
  KEY `fk_Venda_Cliente1_idx` (`id_cliente`),
  CONSTRAINT `fk_Venda_Cliente1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Venda_Funcionario` FOREIGN KEY (`id_func`) REFERENCES `Funcionario` (`id_func`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Venda`
--

LOCK TABLES `Venda` WRITE;
/*!40000 ALTER TABLE `Venda` DISABLE KEYS */;
INSERT INTO `Venda` VALUES (1,'2010-03-21','19:10:00',2,1),(2,'2000-02-12','09:00:00',2,1),(3,'2022-01-03','09:00:00',4,2),(4,'2022-02-03','18:00:00',2,2),(6,'2022-01-23','08:00:00',4,4),(9,'2022-01-13','02:00:00',4,2),(10,'2022-02-13','12:00:00',4,1),(11,'2022-02-05','14:00:00',4,1),(12,'2000-03-05','14:00:00',2,1),(13,'2022-01-21','21:10:00',2,2),(14,'2022-01-25','23:50:00',3,16),(15,'2022-01-26','17:13:00',3,27),(16,'2022-01-13','16:13:00',4,4),(17,'2022-01-16','15:20:00',2,26),(18,'2022-01-28','09:15:00',3,21),(19,'2022-01-09','13:13:00',4,6),(20,'2022-01-08','13:13:00',3,16),(21,'2022-01-26','13:30:00',4,10),(22,'2022-01-04','08:30:00',4,20),(23,'2022-01-26','19:21:00',3,18),(24,'2022-01-26','17:16:00',2,9),(25,'2022-01-26','16:25:00',4,27),(26,'2022-01-21','13:45:00',4,10),(27,'2022-01-06','15:40:00',3,21),(28,'2022-01-29','20:00:00',2,19),(29,'2022-01-27','19:10:00',4,8),(30,'2022-01-26','03:50:00',2,2),(31,'2022-01-26','03:56:00',3,2),(32,'2022-01-26','03:56:00',2,2),(33,'2022-01-26','03:56:00',2,2),(34,'2022-01-26','16:16:00',4,2),(35,'2022-01-26','18:50:00',4,2),(36,'2022-01-26','18:50:00',2,2);
/*!40000 ALTER TABLE `Venda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-26 22:30:08
