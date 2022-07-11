#!/bin/bash

#instala dependencias e inicia os serviços necessários para rodar o Pokedex

#Instala dependencias para o Quarkus
cd quarkus-pokedex
npm i
cd ..

# Instala dependencias para o bff
cd bff
npm i
cd ..

#Instala dependencias para o Vue
cd vue-pokedex
npm i
cd ..

# inicia todos os serviços
./startServices.sh