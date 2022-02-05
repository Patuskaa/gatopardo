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
-- Table structure for table `Funcionario`
--

DROP TABLE IF EXISTS `Funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Funcionario` (
  `id_func` int(11) NOT NULL AUTO_INCREMENT,
  `nome_func` varchar(45) NOT NULL COMMENT 'Nome completo do funcionário do Gato Pardo.',
  `mail_func` varchar(45) NOT NULL COMMENT 'Por norma os emails são todos diferentes por esse motivo classificamos este atributo como único. \nDesta forma não admitimos que dois funcionários utilizem o mesmo email. ',
  `morada_func` text NOT NULL COMMENT 'Atribuimos o tipo de TEXT a este atributo, tendo em consideração que existem diversas moradas com elevado número de carateres (ruas, lotes, apartamentos, andares, localiadades, conselhos).',
  `username_func` varchar(45) NOT NULL COMMENT 'Por norma os usernames devem ser diferentes, por este motivo classificamos este atributo como único. ',
  `password_func` char(40) NOT NULL COMMENT 'Utilizando o tipo char (40) para mais tarde utilizar a função para a criação de um hash de 40 carateres diferentes. \n',
  `contacto_func` int(11) NOT NULL COMMENT 'À semelhança do atributo email, este atributo é classificado como único tendo em conta que por norma cada pessoa tem um contacto telefónico diferente. Pelo que, assumimos para este caso, dois funcionários não podem ter o mesmo número telefónico. ',
  `dn_func` date NOT NULL COMMENT 'Relativo à data de nascimento do funcionário. ',
  PRIMARY KEY (`id_func`),
  UNIQUE KEY `idFuncionario_UNIQUE` (`id_func`),
  UNIQUE KEY `username_func_UNIQUE` (`username_func`),
  UNIQUE KEY `contacto_func_UNIQUE` (`contacto_func`),
  UNIQUE KEY `mail_func_UNIQUE` (`mail_func`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Funcionario`
--

LOCK TABLES `Funcionario` WRITE;
/*!40000 ALTER TABLE `Funcionario` DISABLE KEYS */;
INSERT INTO `Funcionario` VALUES (2,'Filipa Bastos','filipabastossousa@gmail.comil.com',' Coimbra','filipa','9271b88351510729ace5221b0cfab77cb328a71c',912209090,'1986-08-22'),(3,'Patricia Salgueiro','patriciasalgo@gmail.com','Coimbra','patricia','04e6f3bca0d940b47b477d89cc9d3e92d03f22dd',934388248,'1996-07-22'),(4,'Ricardo Rodrigues','ricardo@gmail.com','Coimbra','ricardo','d4e7430f1534a12df46cedd1ac369935436dbb94',912509190,'1976-02-22');
/*!40000 ALTER TABLE `Funcionario` ENABLE KEYS */;
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
