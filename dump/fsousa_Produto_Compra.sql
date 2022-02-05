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
-- Table structure for table `Produto_Compra`
--

DROP TABLE IF EXISTS `Produto_Compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Produto_Compra` (
  `id_compra` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `unidades_compradas` int(11) NOT NULL COMMENT 'Número de unidades compradas.',
  PRIMARY KEY (`id_compra`,`id_produto`),
  KEY `fk_Compra_has_Produto_Produto1_idx` (`id_produto`),
  KEY `fk_Compra_has_Produto_Compra1_idx` (`id_compra`),
  CONSTRAINT `fk_Compra_has_Produto_Compra1` FOREIGN KEY (`id_compra`) REFERENCES `Compra` (`id_compra`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Compra_has_Produto_Produto1` FOREIGN KEY (`id_produto`) REFERENCES `Produto` (`id_produto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Produto_Compra`
--

LOCK TABLES `Produto_Compra` WRITE;
/*!40000 ALTER TABLE `Produto_Compra` DISABLE KEYS */;
INSERT INTO `Produto_Compra` VALUES (2,2,16),(3,2,1),(4,4,2),(5,2,1),(6,2,1),(7,17,1),(8,27,1),(9,20,1),(10,20,1),(11,13,1),(12,24,1),(13,22,1),(14,16,1),(15,6,1),(16,5,1),(17,10,1),(18,8,1),(19,9,1),(20,10,1),(21,11,2),(22,11,2),(23,13,2),(24,16,1),(25,12,1),(26,16,2);
/*!40000 ALTER TABLE `Produto_Compra` ENABLE KEYS */;
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
