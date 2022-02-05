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
-- Table structure for table `Wishlist`
--

DROP TABLE IF EXISTS `Wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Wishlist` (
  `id_wishlist` int(11) NOT NULL AUTO_INCREMENT,
  `dt_wishlist` date NOT NULL COMMENT 'Relativamente à data que a wishlist foi criada. \n(sendo que, por defeito,  esta é criada quando o cliente é registado no website pela primeira vez) ',
  `hora_wishlist` time NOT NULL COMMENT 'Relativamente à hora que a wishlist foi criada. \n(sendo que, por defeito,  esta é criada quando o cliente é registado no website pela primeira vez) ',
  `id_cliente` int(11) NOT NULL,
  PRIMARY KEY (`id_wishlist`),
  UNIQUE KEY `id_wishlist_UNIQUE` (`id_wishlist`),
  KEY `fk_Wishlist_Cliente1_idx` (`id_cliente`),
  CONSTRAINT `fk_Wishlist_Cliente1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Wishlist`
--

LOCK TABLES `Wishlist` WRITE;
/*!40000 ALTER TABLE `Wishlist` DISABLE KEYS */;
INSERT INTO `Wishlist` VALUES (1,'2022-01-25','05:36:00',16),(8,'2022-01-25','20:10:00',16),(9,'2022-01-25','20:10:00',16),(10,'2022-01-25','20:10:00',16),(13,'2022-01-26','01:22:00',5),(14,'2022-01-26','01:22:00',5),(15,'2022-01-26','01:22:00',5),(16,'2022-01-26','01:22:00',5),(18,'2022-01-26','01:22:00',6),(19,'2022-01-26','01:22:00',6),(20,'2022-01-26','01:22:00',6),(21,'2022-01-26','01:22:00',6),(22,'2022-01-26','01:22:00',8),(23,'2022-01-26','01:22:00',8),(24,'2022-01-26','01:22:00',8),(25,'2022-01-26','01:22:00',21),(26,'2022-01-26','01:22:00',21),(27,'2022-01-26','01:22:00',21),(28,'2022-01-26','01:22:00',21),(29,'2022-01-26','01:22:00',28),(30,'2022-01-26','01:22:00',28),(31,'2022-01-26','01:22:00',9),(32,'2022-01-26','01:22:00',9),(33,'2022-01-26','01:22:00',9),(34,'2022-01-26','01:22:00',23),(35,'2022-01-26','01:22:00',1),(36,'2022-01-26','01:22:00',1),(37,'2022-01-26','01:22:00',7),(38,'2022-01-26','01:22:00',7),(39,'2022-01-26','01:22:00',7),(40,'2022-01-26','01:22:00',7),(41,'2022-01-26','01:22:00',22),(42,'2022-01-26','01:22:00',22),(43,'2022-01-26','01:22:00',27),(44,'2022-01-26','01:22:00',27),(45,'2022-01-26','01:22:00',27),(46,'2022-01-26','01:22:00',27),(47,'2022-01-26','01:22:00',27),(48,'2022-01-26','01:22:00',10),(49,'2022-01-26','01:22:00',10),(50,'2022-01-26','01:22:00',10),(51,'2022-01-26','01:22:00',10),(52,'2022-01-26','01:22:00',26),(53,'2022-01-26','01:22:00',26),(54,'2022-01-26','01:22:00',26),(55,'2022-01-26','01:22:00',26),(56,'2022-01-26','01:22:00',12),(57,'2022-01-26','01:22:00',12),(61,'2022-01-26','03:56:00',2),(62,'2022-01-26','03:56:00',2),(64,'2022-01-26','18:50:00',2),(65,'2022-01-26','18:50:00',2);
/*!40000 ALTER TABLE `Wishlist` ENABLE KEYS */;
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
