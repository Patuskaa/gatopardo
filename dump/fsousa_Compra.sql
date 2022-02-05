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
-- Table structure for table `Compra`
--

DROP TABLE IF EXISTS `Compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Compra` (
  `id_compra` int(11) NOT NULL AUTO_INCREMENT,
  `dt_compra` date NOT NULL COMMENT 'Data da realização da compra do produto pelo funcionário. ',
  `hora_compra` time NOT NULL COMMENT 'Hora da realização da compra do produto pelo funcionário. ',
  `id_func` int(11) NOT NULL,
  PRIMARY KEY (`id_compra`),
  UNIQUE KEY `idCompra_UNIQUE` (`id_compra`),
  KEY `fk_Compra_Funcionario1_idx` (`id_func`),
  CONSTRAINT `fk_Compra_Funcionario1` FOREIGN KEY (`id_func`) REFERENCES `Funcionario` (`id_func`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Compra`
--

LOCK TABLES `Compra` WRITE;
/*!40000 ALTER TABLE `Compra` DISABLE KEYS */;
INSERT INTO `Compra` VALUES (2,'2022-01-20','19:00:00',2),(3,'2022-01-20','19:00:00',2),(4,'2022-02-01','19:00:00',2),(5,'2020-02-01','19:00:00',3),(6,'2022-02-01','16:15:00',2),(7,'2022-01-03','16:00:00',2),(8,'2022-01-03','16:15:00',2),(9,'2022-01-31','08:00:00',2),(10,'2022-01-11','12:30:00',4),(11,'2022-01-03','11:32:00',3),(12,'2022-01-03','09:35:00',2),(13,'2022-02-07','16:34:00',4),(14,'2022-01-17','17:22:00',2),(15,'2022-01-08','13:50:00',2),(16,'2022-01-13','16:17:00',3),(17,'2022-01-12','16:32:00',2),(18,'2022-01-03','18:16:00',3),(19,'2022-01-03','17:22:00',2),(20,'2022-01-19','08:30:00',2),(21,'2022-01-06','18:00:00',3),(22,'2022-01-09','11:45:00',2),(23,'2022-01-03','16:13:00',4),(24,'2022-01-14','20:00:00',2),(25,'2022-01-26','14:32:00',3),(26,'2022-01-13','18:16:00',4);
/*!40000 ALTER TABLE `Compra` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-26 22:30:13
