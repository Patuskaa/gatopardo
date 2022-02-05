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
-- Table structure for table `Artistas_Eventos`
--

DROP TABLE IF EXISTS `Artistas_Eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Artistas_Eventos` (
  `id_artista` int(11) NOT NULL,
  `Id_evento` int(11) NOT NULL,
  PRIMARY KEY (`id_artista`,`Id_evento`),
  KEY `fk_Artista_has_Evento_Evento1_idx` (`Id_evento`),
  KEY `fk_Artista_has_Evento_Artista1_idx` (`id_artista`),
  CONSTRAINT `fk_Artista_has_Evento_Artista1` FOREIGN KEY (`id_artista`) REFERENCES `Artista` (`id_artista`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Artista_has_Evento_Evento1` FOREIGN KEY (`Id_evento`) REFERENCES `Evento` (`id_evento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Artistas_Eventos`
--

LOCK TABLES `Artistas_Eventos` WRITE;
/*!40000 ALTER TABLE `Artistas_Eventos` DISABLE KEYS */;
INSERT INTO `Artistas_Eventos` VALUES (1,1),(5,1),(10,1),(12,1),(2,2),(4,2),(9,2),(22,2),(7,3),(8,3),(15,3),(19,3),(27,3),(4,5),(13,5),(14,5),(15,5),(25,5),(7,6),(20,7),(20,8),(20,9),(20,10),(20,11),(10,12),(10,13),(10,14),(9,15),(9,16),(9,17),(13,18),(13,19),(13,20),(13,21),(13,22),(2,23),(2,24),(2,25),(2,26),(1,32),(1,33);
/*!40000 ALTER TABLE `Artistas_Eventos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-26 22:30:15
