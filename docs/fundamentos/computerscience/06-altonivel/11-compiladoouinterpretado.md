---
title: Compilado ou Interpretado
---

# Compilado ou Interpretado

Como mencionado anteriormente, o código fonte de um programa geralmente não está em uma linguagem que a CPU entende diretamente, portanto passos adicionais são necessários. O código fonte pode ser compilado para código de máquina ou interpretado por outro programa em tempo de execução.

Em uma linguagem compilada, como C, o código fonte é convertido em instruções de máquina que podem ser executadas diretamente pelo processador. O código é compilado durante o desenvolvimento, e os arquivos executáveis são entregues aos usuários finais, que não precisam ter acesso ao código fonte. Código compilado tende a ser rápido, porém só roda na arquitetura para a qual foi compilado.

Em uma linguagem interpretada, como Python, o código fonte não é compilado antecipadamente. Em vez disso, um programa chamado interpretador lê e executa as instruções do programa diretamente. É o código de máquina do interpretador que de fato roda na CPU. Isso torna o código independente de plataforma, pois desde que o usuário tenha o interpretador instalado, o código pode rodar em qualquer arquitetura. A desvantagem é que código interpretado tende a ser mais lento que código compilado, devido ao custo de interpretar o código durante a execução.

Algumas linguagens usam uma abordagem híbrida, compilando para uma linguagem intermediária chamada de bytecode. Bytecode é similar ao código de máquina, mas em vez de ser direcionado a uma arquitetura de hardware específica, é projetado para rodar em uma máquina virtual. Uma máquina virtual é uma plataforma de software que fornece uma CPU virtual e um ambiente de execução, abstraindo os detalhes do hardware e do sistema operacional subjacentes. Java, por exemplo, compila para bytecode que roda na Java Virtual Machine. O CPython, a implementação original do Python, também converte o código Python para bytecode antes de executá-lo, embora isso seja um detalhe de implementação geralmente oculto do desenvolvedor. Linguagens que usam bytecode mantêm a independência de plataforma das linguagens interpretadas enquanto preservam parte do ganho de desempenho das linguagens compiladas.
