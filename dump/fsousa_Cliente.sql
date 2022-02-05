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
-- Table structure for table `Cliente`
--

DROP TABLE IF EXISTS `Cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(45) NOT NULL COMMENT 'Nome completo do cliente',
  `mail_cliente` varchar(45) NOT NULL COMMENT 'Por norma os emails são todos diferentes por este motivo classificamos este atributo como único. \nDesta forma não admitimos que dois clientes utilizem o mesmo email. ',
  `username_cliente` varchar(45) NOT NULL COMMENT 'Por norma os usernames devem ser diferentes, por este motivo classificamos este atributo como único. ',
  `morada_cliente` text NOT NULL COMMENT 'Atribuimos o tipo de TEXT a este atributo, tendo em consideração que existem diversas moradas com elevado número de carateres (ruas, lotes, apartamentos, andares, localiadades, conselhos). Este atributo é essencial para o processo de envio do produto após a venda. ',
  `pasword_cliente` char(40) NOT NULL COMMENT 'Utilizando o tipo char (40) para mais tarde utilizar a função para a criação de um hash de 40 carateres diferentes. \n',
  `nif_cliente` int(10) unsigned NOT NULL COMMENT 'Este dado é necessário para atribuição da factura. \nÉ também um atributo único. ',
  `dn_cliente` date NOT NULL COMMENT 'Relativo à data de nascimento do cliente. \n',
  `profissao_cliente` varchar(45) NOT NULL COMMENT 'Relativo à profissao do cliente.',
  `genero_cliente` varchar(45) NOT NULL COMMENT 'Serão aceites mais do que os dois generos padrões (feminino e masculino), ou seja serão aceites géneros Não- binários, Cisgênero e Transgênero. ',
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `idFuncionario_UNIQUE` (`id_cliente`),
  UNIQUE KEY `username_func_UNIQUE` (`username_cliente`),
  UNIQUE KEY `contacto_func_UNIQUE` (`nif_cliente`),
  UNIQUE KEY `mail_func_UNIQUE` (`mail_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cliente`
--

LOCK TABLES `Cliente` WRITE;
/*!40000 ALTER TABLE `Cliente` DISABLE KEYS */;
INSERT INTO `Cliente` VALUES (1,'Filipa Sousa','filipabastossousa@gmail.com','filipa_sousa','Coimbra','39b0e978362d19ca64e90482f25fe3818c792431',123654257,'1986-09-22','Estudante','feminino'),(2,'João Patrício','joao.p@gmail.com','johnyP','Coimbra','f6fce0d17035f9a8998b321132c03bdadcf8150d',261903772,'1996-02-08','Enfermeiro','masculino'),(4,'Joaquina Albatroz','joaquina@gmail.com','joaquina','Vila do Conde','4341ba986e8c2593631f42a9a3292001fe8264ef',623726799,'1993-04-23','Padeira','Feminino'),(5,'Adélia Bastos','adelia@gmail.com','adelia_bastos','Coimbra','f9d6363098a4ed3e01e8a259f58f7ec2bf6a546a',12345663,'1974-04-25','Consultora','feminino'),(6,'Adelina  Gomes','adelina@gmail.com','adelina_gomes','Porto','ff18c2ef2cdbe45ff172299f974a2ae834db56f2',321456912,'1945-06-22','Reformada','feminino'),(7,'Filipe Espadinha','filipefanzeres@gmial.com','filipe_1996','Fanzeres','0d5883ef22b417b822555e20816618833b13c8ef',364125786,'1996-02-14','jogador','outro'),(8,'Alberto Guimarães','engenheiroalberto@gmail.com','eng_alberto','Venda Nova','968b7c26f8e34350777a40f4f1424d3ac51aad56',364257961,'1994-05-03','Engenheiro','masculino'),(9,'Camané Mesquita','camane@gmail.com','camane','Cascais','c37507a1641cf2c6d9ccf4bf20348216fb2b0ea9',123542367,'1973-01-30','musico','masculino'),(10,'Henrique Linhaça','henqiue@gmail.com','henrique_menezes','Sintra','106a36de60a9195fa41d4290b1650ef3b2800ef0',364210867,'1989-05-13','Estudane','masculino'),(11,'Natércia Ribeiro','natercia@gmail.com','natercia96','Amadora','bf58fbb63490da163d42df1ae2c0799d9d99badd',123452786,'1996-06-03','Nutricionista','feminino'),(12,'Jardel Jesus','jardel@gmail.com','jardel_gustavo','Évora','925dea994e581f37584deb1abeb9d57b128b36d3',451683219,'1983-03-01','Enfermeiro','masculino'),(14,'Pedro Rubio','pedromiguel@gmail.com','pedro123','Coimbra','55a1b02046146d34402fe09cb93b568de962bcde',321456214,'1999-02-03','Estudante','masculino'),(15,'Rita Rocha','ritarocha@gmail.com','ritaloura','Coimbra','37b862c4a20f516fe8a6d04460c9dbe1d43cf25b',123425637,'1986-03-05','Médica','feminino'),(16,'Francisco Pacheco','cisco@gmail.com','chico75','Ança','883c9a0b9f8442d38814de44539784c2a7220c6b',124756398,'1975-03-01','Cabeleireiro','outro'),(17,'Viviane Cruz','vivi@gmail.com','viviane_almeida','Lousã','5610ef09e2b152c0886902531a042a94c19ef0d3',123402569,'2001-01-03','Estudante','feminino'),(18,'Lidia Cunha','lidiarosario@gmail.com','lidia-rosario','Viana do Castelo','d11b6f971e9940b180239fe4d99cc3e86d3decce',124365752,'1999-06-22','Osteopata','feminino'),(19,'Mário Silva','mario@gmail.com','mario_silva','Lagos','2be92875444d088d4fe489024301c135666e3597',213654256,'1998-03-07','Biologo','outro'),(20,'Lurdes Monteiro','lurdesalmeida@gmail.com','lurdes_almeida','Porto','5591c95342f6c5ad758586253d654a874d2fcd59',147521365,'1998-05-22','Designer','outro'),(21,'Alipio Oliveira','alipiooliveira@gmail.com','alipio_oliveira','Faro','8a4809f9e6ec4d3c18cbbd6e2219f2de75298968',124563257,'1995-03-22','Designer','masculino'),(22,'Gaspar Almeida','gasparGato@gmail.com','gaspargaspar','Bragança','2e4ecd8e070a10f8a83cb6eca8fb9d34717955b8',142365785,'2000-02-16','Dono de casa','masculino'),(23,'Eva Fonseca','evafonseca@gmail.com','eva_fons','Porto','de8799db8ede34121e90d1d8995c20a46101cbd3',125367542,'1986-02-22','Enfermerira','feminino'),(24,'Oscar Cardoso','oscar@gmail.com','oscarCardoso','Tavira','4531ebc30b2c55d8458c4246ea9dcb5d8b2aafb4',142365842,'1997-05-02','Médico','masculino'),(25,'Pedro Fonseca','pedroalmeida@gmail.com','padroAlmeida','Ourique','686ddb92e439b3d3f99d344b38362907d275dfe8',124536215,'1982-02-12','Técnico de Som','masculino'),(26,'Jaime Negrão','jaimenegrao@gmail.com','jaime_negrao','Porto','0cf437e44a5ae453a6b23d59daa6491a2a205381',142365123,'1996-04-05','Jornalista','masculino'),(27,'Gustavo Lima','gustavosousa@gmail.com','gustavo83','Coimbra','0d33e00ae5d62d68af59a1582d8daa2de3f1d8b7',142032156,'1983-05-03','Engenheiro','masculino'),(28,'António Menezes','antoniomenezes@gmail.com','toninho','Coimbra','43ac8e0c3f50411147f2c697b7ad4f74d1f3b3ee',142036547,'1983-02-03','Advogadp','outro');
/*!40000 ALTER TABLE `Cliente` ENABLE KEYS */;
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
