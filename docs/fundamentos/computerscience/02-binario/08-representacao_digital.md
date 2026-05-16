---
title: Representação de dados
---

#  Representação de dados

Até aqui vimos como computadores representam números usando o sistema binário. Mas computadores não trabalham apenas com números. Eles exibem texto, reproduzem músicas, renderizam imagens e transmitem vídeos. Se tudo dentro de um computador são bits, como esses diferentes tipos de dados são representados?

A resposta é a mesma de como representar números, tudo é uma convenção. Se um dia foi estabelecido a ausência de um quantidade, seria chamada de zero e esse zero seria representado por um símbolo oval ( `0` ) assim foi e assim é, simples assim. Com dados digitais não poderia ser diferente, qualquer sequência de bits pode representar qualquer coisa, desde que exista um acordo sobre o que cada sequência significa. Esse processo de **definir qual sequência de bits corresponde a qual dado é chamado de codificação**, e o processo inverso, **de recuperar o dado original a partir dos bits, é a decodificação**.

:::tip
Você pode ver as mesmas ideias escritas como *encoding* e *decoding* em contextos técnicos em inglês. São apenas os mesmos termos em outro idioma.
Em conteúdos em português você provavelmente vai encontrar também a sua versão brasileira *encodar* e *decodar*.
:::

Qualquer informação pode ser representada por um padrão de bits, basta codigica-los e ter um programa que conheça e saiba lidar com essas codificações.

Isso é importante de ser estabelecido pois indepentende do tipo de dado, eles nada mais são que padrões de bits, que um determinado programa conhece e sabe gerenciar. Seja áudio, vídeo ou texto, basta ter um padrão e um programa que o reconheça.

Vamos agora nos aprofundar aos tipos de dados mais comuns.