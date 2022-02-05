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
-- Table structure for table `Produto_Venda`
--

DROP TABLE IF EXISTS `Produto_Venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Produto_Venda` (
  `id_produto` int(11) NOT NULL,
  `id_venda` int(11) NOT NULL,
  `unidades_vendidas` varchar(45) NOT NULL COMMENT 'Número de produtos vendidos.',
  PRIMARY KEY (`id_produto`,`id_venda`),
  KEY `fk_Produto_has_Venda_Venda1_idx` (`id_venda`),
  KEY `fk_Produto_has_Venda_Produto1_idx` (`id_produto`),
  CONSTRAINT `fk_Produto_has_Venda_Produto1` FOREIGN KEY (`id_produto`) REFERENCES `Produto` (`id_produto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Produto_has_Venda_Venda1` FOREIGN KEY (`id_venda`) REFERENCES `Venda` (`id_venda`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Produto_Venda`
--

LOCK TABLES `Produto_Venda` WRITE;
/*!40000 ALTER TABLE `Produto_Venda` DISABLE KEYS */;
INSERT INTO `Produto_Venda` VALUES (2,2,'1'),(2,9,'2'),(2,10,'1'),(2,11,'2'),(2,12,'2'),(2,13,'1'),(2,32,'6'),(3,6,'1'),(4,1,'2'),(4,3,'1'),(6,4,'1'),(6,32,'6'),(8,30,'1'),(9,23,'1'),(11,15,'2'),(12,14,'3'),(12,33,'1'),(15,26,'1'),(15,29,'1'),(16,18,'1'),(16,20,'1'),(17,16,'1'),(17,17,'2'),(17,19,'1'),(17,25,'1'),(17,28,'1'),(20,21,'2'),(20,35,'1'),(21,35,'1'),(21,36,'1'),(24,27,'1'),(27,31,'1'),(27,34,'1'),(30,22,'2'),(32,24,'1');
/*!40000 ALTER TABLE `Produto_Venda` ENABLE KEYS */;
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
