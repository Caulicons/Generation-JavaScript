create database db_ecommerce;
use db_ecommerce;

create table tb_produto(
	id bigint auto_increment primary key, 
    nome varchar(50) not null,
    marca varchar(50) not null,
    preco decimal(6,2) not null, 
    quantidade int not null default 0
);

insert into tb_produto (nome, marca, preco, quantidade)
values 
	("calça", "nike",  50, 6),
    ("calça", "nike",  50, 6),
    ("calça", "nike",  50, 6),
    ("calça", "nike",  50, 6),
	("tênis", "nike",  150.59, 6),
    ("camisa", "nike",  50, 6),
    ("meia", "nike",  25, 6),
    ("tênis", "nike",  150.59, 6);

select * from tb_produto where preco > 500;
select * from tb_produto where preco < 500;

update tb_produto set preco = 200.00 where id = 5;

select * from tb_produto;