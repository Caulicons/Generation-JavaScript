-- 

CREATE DATABASE db_rh; 
-- Select database.
USE db_rh;

-- Crie uma tabela de colaboradores e determine 5 atributos relevantes dos colaboradores para se trabalhar com o serviço deste RH.. 
CREATE TABLE tb_colaboradores (
	id BIGINT AUTO_INCREMENT PRIMARY KEY, 
    nome varchar(50) not null, 
    data_nascimento date not null,
    salario decimal(6,2),
    cargo varchar(50)
);

-- Insira nesta tabela no mínimo 5 dados (registros).
insert into tb_colaboradores (nome, data_nascimento, salario, cargo) 
values 
 ("Vítor",  "2002-03-10", 4500.00, "Software Developer"),
 ("Luffy",  "1999-10-10", 10.00, "Pirata"),
 ("Goku",  "1986-02-26", 0.00, "luta clandestina"),
 ("Ichigo",  "2004-10-05", 5000.00, "Shinighami"),
 ("Senhor batata",  "1900-03-10", 9999.00, "Agricultor");
 
-- Select
select * from tb_colaboradores where salario > 2000;
select * from tb_colaboradores where salario < 2000;

-- Update
update tb_colaboradores set nome = "Vítor Oliveira" where id = 1;