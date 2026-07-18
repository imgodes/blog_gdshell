---
title: Código de Máquina e Linguagem Assembly
---

# Código de Máquina e Linguagem Assembly

Até o momento cobrimos a parte física do computador, passando pelos principais componentes como CPU, memória principal e dispositivos de I/O. Esses tópicos são essenciais, porém não explicam o funcionamento do computador por inteiro. Como já foi dito, programabilidade é o que de fato torna o computador o que ele é, e isso é feito por meio de um hardware capaz de ser programado e um software que implementa a programação, dando ao computador novas habilidades. Nessa etapa do aprendizado vamos falar de software de baixo nível, que seria código de máquina e Assembly.

Antes de nos aprofundarmos, precisamos primeiro entender alguns termos.

- **Software**: instruções que dizem ao computador o que fazer.
- **Hardware**: elementos físicos do computador.
- **Programa**: instruções de software executadas em uma ordem específica que possibilita a execução de uma tarefa.
- **Programação e Programador**: programação é o ato de escrever programas, e programador é quem os escreve.
- **Aplicação**: apesar de ser usada com frequência como sinônimo de programa, aplicação tende a se referir a um programa que interage com humanos, em vez de programas que interagem com outros softwares ou com o hardware. Também pode se referir a múltiplos programas que trabalham juntos.
- **Código de máquina**: é a representação binária das instruções que são executadas pela CPU, é o mais próximo do hardware possível. Não importa como um programa foi escrito, em algum momento ele sempre será convertido em uma série de 0s e 1s que representam instruções que a CPU pode executar.
- **Linguagem de programação**: assim como ocorre na língua dos humanos, máquinas também precisam de regras para se comunicar. Uma linguagem de programação é um conjunto formal de regras e símbolos que permite ao humano expressar instruções de forma que possam ser traduzidas para código de máquina.
- **Linguagem de baixo nível**: uma linguagem de baixo nível é aquela que mais se aproxima do código de máquina, e por corresponder às instruções de hardware, é menos legível para humanos, porém oferece um controle maior sobre as ações da CPU.
- **Linguagem de alto nível**: é aquela em que o programador geralmente escreve seus programas. É mais próxima da linguagem humana, o que permite ao programador focar na lógica do problema em vez dos detalhes do hardware, em detrimento de ser mais distante do código de máquina, e por consequência, mais distante do que está acontecendo na CPU.

Os próximos tópicos colocam a mão na massa com um exemplo real de código de máquina, e depois combinam várias instruções para calcular um fatorial inteiro em Assembly.
