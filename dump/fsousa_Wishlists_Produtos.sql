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
-- Table structure for table `Wishlists_Produtos`
--

DROP TABLE IF EXISTS `Wishlists_Produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Wishlists_Produtos` (
  `id_wishlist` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  PRIMARY KEY (`id_wishlist`,`id_produto`),
  KEY `fk_Wishlist_has_Produto_Produto1_idx` (`id_produto`),
  KEY `fk_Wishlist_has_Produto_Wishlist1_idx` (`id_wishlist`),
  CONSTRAINT `fk_Wishlist_has_Produto_Produto1` FOREIGN KEY (`id_produto`) REFERENCES `Produto` (`id_produto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Wishlist_has_Produto_Wishlist1` FOREIGN KEY (`id_wishlist`) REFERENCES `Wishlist` (`id_wishlist`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Wishlists_Produtos`
--

LOCK TABLES `Wishlists_Produtos` WRITE;
/*!40000 ALTER TABLE `Wishlists_Produtos` DISABLE KEYS */;
INSERT INTO `Wishlists_Produtos` VALUES (26,6),(51,6),(61,6),(9,8),(18,8),(10,9),(28,9),(40,10),(42,10),(27,11),(36,11),(47,11),(8,12),(25,12),(34,12),(43,12),(62,12),(54,13),(14,14),(48,14),(57,14),(64,15),(19,16),(37,16),(33,17),(29,18),(31,18),(53,18),(38,19),(45,19),(16,20),(55,20),(30,21),(35,21),(15,22),(20,22),(24,22),(41,22),(46,22),(52,22),(56,22),(21,23),(39,24),(65,24),(32,25),(22,26),(13,27),(23,27),(44,30),(49,30),(50,31);
/*!40000 ALTER TABLE `Wishlists_Produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-26 22:30:11
