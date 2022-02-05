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
-- Table structure for table `Evento`
--

DROP TABLE IF EXISTS `Evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Evento` (
  `id_evento` int(11) NOT NULL AUTO_INCREMENT,
  `titulo_evento` varchar(45) NOT NULL COMMENT 'O tílulo do evento será o nome do evento, por questões de layout convirá que este campo tenha um número de caracteres limitado.',
  `dt_inicio_evento` date NOT NULL COMMENT 'Data em que o evento inicia.',
  `dt_fim_evento` date NOT NULL COMMENT 'Data em que o evento termina.',
  `hora_inicio_evento` time NOT NULL COMMENT 'Hora de início do evento.',
  `hora_fim_evento` time NOT NULL COMMENT 'Hora de fim do evento.',
  `local_evento` varchar(45) NOT NULL COMMENT 'Local é referente à casa que recebe o evento, seja ela um teatro, uma sala, uma galeria, entre outros.',
  `morada_evento` text NOT NULL COMMENT 'A morada do evento é relativo à morada onde este evento acontece. \nO datatype text é selecionado tendo em consideração que existem diversas moradas com  maior número de carateres (ruas, lotes, apartamentos, andares, localiadades, conselhos), e também poderá ser necessário fazer alguma descrição extra neste campo para moradas de acesso menos óbvio.',
  `preco_evento` decimal(10,0) NOT NULL COMMENT 'Preço em euros do bilhete que  será cobrado.',
  `descricao_evento` text NOT NULL COMMENT 'Breve descrição do evento.',
  `lotacao_evento` int(11) NOT NULL COMMENT 'Número de máximo de pessoas que podem assistiir ao evento.',
  `link_bilhete_evento` varchar(45) NOT NULL COMMENT 'Link que reencaminha para o site de venda do bilhete do evento.',
  PRIMARY KEY (`id_evento`),
  UNIQUE KEY `id_evento_UNIQUE` (`id_evento`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Evento`
--

LOCK TABLES `Evento` WRITE;
/*!40000 ALTER TABLE `Evento` DISABLE KEYS */;
INSERT INTO `Evento` VALUES (1,'Mercado das Conchas','2022-03-01','2022-03-01','15:00:00','19:00:00','Igreja das Carmelitas','Rua das Cebolas n10 - Coimbra',10,'Vamos reunir os ilustradores do Porto, com música e street food',100,'www.marcadoconchas.pt'),(2,'Feira Moderna','2022-05-21','2022-05-21','18:00:00','21:00:00','Marcado Velho','Rua das António Braga - Coimbra',20,'Exposição com artistas convidados',50,'www.moderno.pt'),(3,'Encontros às terças','2022-06-11','2022-06-11','13:00:00','25:00:00','Museu Machado de CAstro','Rua Borges Carneiro nº25 - Coimbra',12,'Encontros entre artistas, com exposiçao de peças',65,'www.mcc.pt'),(5,'Magia negra','2022-04-14','2022-04-14','15:00:00','20:00:00','Sé Velha','Rua das Escadas nº56 - Coimbra',6,'Artistas reunidas para transmitir as mais belas poções. Venham conhecer',40,'www.magianegra.pt'),(6,'Arte de Viajar','2022-05-12','2022-05-12','21:00:00','22:00:00','Galerias Paris','Rua das Ameixas nº 20 - Porto',5,'Andre da Loba da conhecer o seu mundo de viagens e como este lhe influencia na sua obra',30,'www.galeriasparis.pt'),(7,'Semente','2022-02-08','2022-02-08','21:00:00','22:00:00','Bang Venue','Rua Almirante Reis nº 7 - Torres Vedras',10,'Concerto de tour de lançamento do CD A SEMEENTE',100,'www.cassetepirata.pt'),(8,'Semente','2022-02-16','2022-02-16','21:30:00','22:30:00','Maus Hábitos','Rua Passos Manuel nº 15 - Porto',12,'Concerto de tour de lançamento do CD A SEMEENTE',200,'www.cassetepirata.pt'),(9,'Semente','2022-02-24','2022-02-24','22:30:00','23:30:00','Festival F','Marina - Faro',8,'Concerto de tour de lançamento do CD A SEMEENTE',500,'www.cassetepirata.pt'),(10,'Semente','2022-03-06','2022-02-06','22:30:00','23:30:00','Salão Brazil','Baixa da cidade - Coimbra',12,'Concerto de tour de lançamento do CD A SEMEENTE',150,'www.cassetepirata.pt'),(11,'Semente','2022-03-06','2022-02-06','22:30:00','23:30:00','Music Box','Rua da Dinamarca - Lisboa',12,'Concerto de tour de lançamento do CD A SEMEENTE',250,'www.cassetepirata.pt'),(12,'Nem todo o músculo é força','2022-04-06','2022-04-06','10:30:00','22:30:00','Tinta nos nervos','Rua Nova- Lisboa',4,'Exposição individual com presença da artista e assinatura de peças.',50,'www.tintanosnervos.pt'),(13,'Nem todo o músculo é força','2022-08-06','2022-08-06','10:30:00','22:30:00','ó-galeria','Rua Nova- Poero',4,'Exposição individual com presença da artista e assinatura de peças.',30,'www.tintanosnervos.pt'),(14,'Nem todo o músculo é força','2022-10-16','2022-10-16','10:30:00','22:30:00','casa da esquina','Rua do Penedo - Coimbra',4,'Exposição individual com presença da artista e assinatura de peças.',30,'www.casadaesquina.pt'),(15,'Tio Tomás','2022-02-16','2022-02-16','21:30:00','22:30:00','Teatro Passos Manuel','Rua Pasos Manuel - Porto',6,'Visualização do documentário e conversa com artita sobre o processo de produção',200,'www.passosmanuel.pt'),(16,'Tio Tomás','2022-02-18','2022-02-18','21:30:00','22:30:00','casa do Cinema','Shoping Avenida - Coimbra',6,'Visualização do documentário e conversa com artita sobre o processo de produção',100,'www.casadocinema.pt'),(17,'Tio Tomás','2022-02-18','2022-02-18','21:30:00','22:30:00','Casa Independente','Praça do Intendente - Lisboa',6,'Visualização do documentário e conversa com artita sobre o processo de produção',100,'www.casadocinema.pt'),(18,'Ninguém nos vai tirar o sol','2022-06-25','2022-06-25','22:30:00','23:30:00','Maus Hábitos','Rua Passos Manuel - Porto',6,'Concerto da tour nacional do cd Ninguem nos vai tirar o sol',200,'www.maushabitos.pt'),(19,'Ninguém nos vai tirar o sol','2022-06-27','2022-06-27','22:30:00','23:30:00','Centro Artes de Águeda','Rua das Rosas - Agueda',10,'Concerto da tour nacional do cd Ninguem nos vai tirar o sol',200,'www.caa.pt'),(20,'Ninguém nos vai tirar o sol','2022-06-30','2022-06-30','22:30:00','23:30:00','Teatro do Bairro','Rua das Rosas - Lisboa',12,'Concerto da tour nacional do cd Ninguem nos vai tirar o sol',200,'www.caa.pt'),(21,'Ninguém nos vai tirar o sol','2022-07-30','2022-07-30','22:30:00','23:30:00','Teatro Municipal de Santarém','Rua Fernando Pessoa - Santarém',12,'Concerto da tour nacional do cd Ninguem nos vai tirar o sol',200,'www.caa.pt'),(22,'Ninguém nos vai tirar o sol','2022-10-15','2022-10-15','22:30:00','23:30:00','Super Bock Super Rock','Passio Maritimo de Algés - Algés',12,'Concerto da tour nacional do cd Ninguem nos vai tirar o sol',500,'www.sbsr.pt'),(23,'êxodos','2022-06-15','2022-06-30','09:30:00','21:30:00','Museu da Cidade','Rua da Alegria- Lagos',12,'Exposição da viagem a Galápagos',150,'www.museucidade.pt'),(24,'êxodos','2022-07-13','2022-06-27','09:30:00','21:30:00','Gulbenkien','Rua das torrinhas - Lisboa',12,'Exposição da viagem a Galápagos',200,'www.museucidade.pt'),(25,'êxodos','2022-10-15','2022-10-30','09:30:00','21:30:00','Museu Serralves','Rua das Amélias - Porto',12,'Exposição da viagem a Galápagos',300,'www.serralves.pt'),(26,'êxodos','2022-10-15','2022-10-30','09:30:00','21:30:00','CCB','Rua das Cruzes - Lisboa',12,'Exposição da viagem a Galápagos',300,'www.ccb.pt'),(32,'traz um amigo tamém','2022-03-12','2022-03-12','17:00:00','18:00:00','Coimbra','Rua do penedo n12',3,'Vamos reunir os nossos amigos e vou ensinar alguma técnicas de ilustração !!!',30,'www.patuska.pt'),(33,'Contra o mau olhado','2022-04-22','2022-04-22','17:00:00','18:00:00','Coimbra','Parque da cidade',3,'Tarde de meditação e ilsutraçao contra o mau olhado num jardim',30,'www.patuska.pt');
/*!40000 ALTER TABLE `Evento` ENABLE KEYS */;
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
