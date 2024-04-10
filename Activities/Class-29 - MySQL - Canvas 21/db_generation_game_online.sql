-- Active: 1712758953802@@127.0.0.1@3306@db_generation_game_online
CREATE DATABASE db_generation_game_online DEFAULT CHARACTER SET = 'utf8mb4';

-- use database
use db_generation_game_online;

-- Create Tables
create table tb_classes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(50), habilidade_especial VARCHAR(50)
);

create table tb_personagens (
    id BIGINT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(50), ataque INT DEFAULT 2000, defesa INT DEFAULT 2000, fraqueza VARCHAR(50) DEFAULT "Tempo", classe_id BIGINT, Foreign Key (classe_id) REFERENCES tb_classes (id)
);
-- Insert classes
INSERT into
    tb_classes (nome, habilidade_especial)
values ('Arqueiro', 'Multishot'),
    ('Cavaleiro', 'The holy sword'),
    ('Mago', 'Fireball'),
    ('Ladino', 'Dagger'),
    ('Paladino', 'Heal');

-- Insert personagens
INSERT INTO
    tb_personagens (
        nome, ataque, defesa, fraqueza, classe_id
    )
values (
        'Amaral', 2100, 1800, 'Combate de curto alcance.', 1
    ),
    (
        'Berimbal', 2700, 2400, 'Coisas demoníacas', 2
    ),
    (
        'Caramal', 2400, 1200, 'Livros.', 3
    ),
    (
        'Daramal', 2000, 11000, 'Coisas fáceis de roubar.', 4
    ),
    (
        'Eramal', 2400, 2900, 'Sua justiça.', 5
    ),
    (
        'Faramal', 1200, 2000, 'Livros.', 3
    ),
    (
        'Garamal', 3000, 3000, 'Combate de curto alcance.', 1
    ),
    (
        'Haramal', 1700, 900, 'Coisas fáceis de roubar.', 4
    ),
    (
        'Iaramal', 4000, 6330, 'Livros.', 3
    );

select * from tb_personagens;

-- Faça um SELECT que retorne todes os personagens cujo poder de ataque seja maior do que 2000.
select * from tb_personagens where ataque > 2000;

-- Faça um SELECT que retorne todes os personagens cujo poder de defesa esteja no intervalo 1000 e 2000.
select * from tb_personagens where defesa BETWEEN 1000 AND 2000;

-- Faça um SELECT que retorne todes os personagens cujo poder de defesa esteja no intervalo 1000 e 2000.
select * from tb_personagens where nome like '%c%';

-- Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_personagens com os dados da tabela tb_classes.
select *
from tb_personagens
    inner join tb_classes on tb_personagens.classe_id = tb_classes.id;

-- Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_personagens com os dados da tabela tb_classes.
select
    tb_personagens.nome,
    tb_classes.nome as classe,
    ataque,
    defesa,
    fraqueza,
    habilidade_especial
from tb_personagens
    inner join tb_classes on tb_personagens.classe_id = tb_classes.id
where
    tb_classes.id = 4;