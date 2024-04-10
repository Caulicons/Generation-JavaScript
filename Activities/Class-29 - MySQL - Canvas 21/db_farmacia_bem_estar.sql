-- Active: 1712758953802@@127.0.0.1@3306@db_farmacia_bem_estar
-- Create database.

CREATE DATABASE db_farmacia_bem_estar DEFAULT CHARACTER SET = 'utf8mb4';

-- Use database.
use db_farmacia_bem_estar;

-- Create tables
-- 1 Crie a tabela tb_categorias e determine pelo menos 2 atributos, além da Chave Primária, relevantes para classificar os produtos.

create table tb_categorias (
    id bigint auto_increment primary key, nome varchar(50) not null, setor int
);

-- 2 e 3
create table tb_produtos (
    id bigint auto_increment primary key, nome varchar(50) not null, preco decimal(6, 2) not null, quantidade int not null default 0, validade date not null, categoria_id bigint, foreign key (categoria_id) references tb_categorias (id)
);

-- 4 - Insira 5 registros na tabela tb_categorias.
insert into
    tb_categorias (nome, setor)
values ('Comprimido', 1),
    ('Pomada', 2),
    ('Solução', 3),
    ('Spray', 4),
    ('Liquido', 5);

-- 5 -Insira 8 registros na tabela tb_produtos, preenchendo a Chave Estrangeira para criar a relação com a tabela tb_categorias.
insert into
    tb_produtos (
        nome, preco, quantidade, validade, categoria_id
    )
values (
        'Dipirona comprimido', 4.99, 100, '2022-10-10', 1
    ),
    (
        'Clonazepam', 10.00, 100, '2022-10-10', 2
    ),
    (
        'Ibuprofeno', 15.00, 100, '2022-10-10', 3
    ),
    (
        'Aspirina', 20.00, 100, '2022-10-10', 4
    ),
    (
        'Amoxicilina', 25.00, 100, '2022-10-10', 5
    ),
    (
        'Paracetamol comprimido', 5.00, 100, '2022-10-10', 1
    ),
    (
        'Minoxidil 5MG', 60.00, 100, '2022-10-10', 5
    ),
    (
        'Omega 3', 80.00, 100, '2022-10-10', 5
    );

-- 6 - Faça um SELECT que retorne todes os produtos cujo valor seja maior do que R$ 50,00.
select * from tb_produtos where preco > 50;

-- 7 - Faça um SELECT que retorne todes os produtos cujo valor esteja no intervalo R$ 5,00 e R$ 60,00.
select * from tb_produtos where preco BETWEEN 5 and 60;

-- 8 - Faça um SELECT utilizando o operador LIKE, buscando todes os produtos que possuam a letra C no atributo nome.
select * from tb_produtos where nome like "%c%";

-- 9 - Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_produtos com os dados da tabela tb_categorias.
select *
from tb_produtos
    inner join tb_categorias on tb_produtos.categoria_id = tb_categorias.id;

-- 10 - Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_produtos com os dados da tabela tb_categorias, onde traga apenas os produtos que pertençam a uma categoria específica (Exemplo: Todes os produtos que pertencem a categoria cosméticos).
select
    tb_produtos.id,
    tb_produtos.nome,
    preco,
    quantidade,
    validade,
    tb_categorias.nome as categoria
from tb_produtos
    inner join tb_categorias on tb_produtos.categoria_id = tb_categorias.id
where
    tb_categorias.id = 5;