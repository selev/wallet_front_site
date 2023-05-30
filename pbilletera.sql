show databases;
create database proyectobilletera;
use proyectobilletera;

create table Moneda(ID int, pais varchar(255), primary key(ID));
create table Finanzas(ID int, Nombre varchar(255), Salario float, Gastos float, Moneda int, primary key(ID), foreign key(Moneda) references Moneda(ID));
