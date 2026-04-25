---
tittle: Bits
---

#  Bits e Bytes

Agora que entendemos o sistema binário e como ele representa números, podemos falar sobre como a informação é organizada dentro de um computador. O conceito mais fundamental nessa organização é o bit.

##  O que é um bit

A palavra bit vem do inglês *Binary Digit*, ou seja, dígito binário. Um bit é a menor unidade de informação possível: ele assume apenas dois valores, 0 ou 1. Em termos físicos, um bit é mantido por um transistor que está ou ligado ou desligado, como vimos no capítulo sobre computadores.

Sozinho, um bit serve para representar apenas dois estados distintos. Isso é suficiente para perguntas simples como verdadeiro ou falso, ligado ou desligado, sim ou não. Para representar qualquer coisa mais complexa, é preciso combinar vários bits.

##  Combinando bits

Quando juntamos dois bits, passamos a ter quatro combinações possíveis: `00`, `01`, `10` e `11`. Com três bits, são oito combinações. A regra geral é simples:

$$
\text{número de combinações} = 2^n
$$

onde $n$ é a quantidade de bits disponíveis.

| Bits | Combinações possíveis |
| ---- | --------------------- |
| 1    | $2^1 = 2$             |
| 2    | $2^2 = 4$             |
| 3    | $2^3 = 8$             |
| 4    | $2^4 = 16$            |
| 8    | $2^8 = 256$           |
| 16   | $2^{16} = 65.536$     |
| 32   | $2^{32} \approx 4$ bilhões |

Perceba que o crescimento é exponencial. Cada bit extra dobra o número de combinações possíveis. É por isso que, mesmo com apenas 32 bits, já é possível representar mais de 4 bilhões de valores diferentes.

##  Um exemplo prático

Imagine que você está programando um jogo de cartas e precisa atribuir um código binário único para cada carta do baralho. Um baralho padrão tem 52 cartas, então precisamos de combinações suficientes para cobrir todas elas. Usando a fórmula:

$$
2^6 = 64
$$

Com 6 bits, temos 64 combinações possíveis, o que é mais do que suficiente para as 52 cartas. Com 5 bits teríamos apenas $2^5 = 32$, que não seria suficiente. Então 6 bits é o mínimo necessário.

O computador é uma máquina extremamente literal. Se duas cartas compartilharem o mesmo código binário, ele simplesmente não consegue distingui-las. Por isso, garantir que cada elemento tenha uma representação única é essencial em qualquer sistema de codificação.

##  O que é um byte

Para facilitar o trabalho com sequências de bits, computadores agrupam 8 bits em uma unidade chamada *byte*. E isso não é atoa, 8 bits oferecem $2^8 = 256$ combinações, o que é suficiente para representar todos os caracteres do alfabeto latino, pontuações e símbolos de controle com uma margem confortável. Além disso, 8 é uma potência de 2, o que torna operações matemáticas muito mais eficientes para o hardware.

Alguns exemplos de notação:

```
0b00000000  — isso é 1 byte (ou 8 bits)
0b11111111  — isso também é 1 byte
0b1011001111010001  — isso são 2 bytes (16 bits)
```

:::info
Ao ler ou escrever sobre tamanhos de dados, preste atenção na capitalização: **B maiúsculo** representa *Byte*, enquanto **b minúsculo** representa *bit*. Então 8 Mb (megabits) é diferente de 8 MB (megabytes). Essa distinção pode causar bastante confusão, especialmente em contratos de internet, que costumam anunciar velocidades em megabits por segundo.
:::

##  Prefixos de grandeza

Representar dados complexos como imagens, vídeos e documentos requer grandes quantidades de bits. Para comunicar esses tamanhos de forma prática, usamos prefixos de grandeza, os mesmos usados em outras unidades de medida como metros e gramas.

No contexto do sistema decimal (base 10), os prefixos mais comuns são:

| Nome | Símbolo | Valor             | Equivalência |
| ---- | ------- | ----------------- | ------------ |
| kilo | k       | 1.000             | $10^3$       |
| mega | M       | 1.000.000         | $10^6$       |
| giga | G       | 1.000.000.000     | $10^9$       |
| tera | T       | 1.000.000.000.000 | $10^{12}$    |

Com esses prefixos, ao invés de dizer "esse arquivo tem 3 bilhões de bytes", escrevemos simplesmente 3 GB (lê-se três gigabytes). Para 4 mil bits, seria 4 kb (quatro kilobits).

###  O problema dos prefixos binários

Muita gente faz confusão nessa parte. Computadores operam em base 2, mas esses prefixos vêm do sistema decimal. Na prática, fabricantes de hardware e sistemas operacionais usaram durante muito tempo os mesmos prefixos com valores ligeiramente diferentes, baseados em potências de 2.

Por exemplo, quando alguém diz que um arquivo tem 1 GB, pode querer dizer exatamente 1.000.000.000 bytes (definição decimal, usada por fabricantes de HD) ou 1.073.741.824 bytes (que é $2^{30}$, usada por sistemas operacionais). Para resolver essa ambiguidade, foi criado um conjunto de prefixos binários padronizados pela IEC em 1998:

| Nome | Símbolo | Valor             | Equivalência |
| ---- | ------- | ----------------- | ------------ |
| kibi | Ki      | 1.024             | $2^{10}$     |
| mebi | Mi      | 1.048.576         | $2^{20}$     |
| gibi | Gi      | 1.073.741.824     | $2^{30}$     |
| tebi | Ti      | 1.099.511.627.776 | $2^{40}$     |

Na prática, você ainda vai encontrar as duas notações sendo usadas de forma intercambiável. O importante é ter consciência de que essa diferença existe e que pode causar discrepâncias de alguns porcento entre o tamanho anunciado e o tamanho real de dispositivos de armazenamento.

:::tip[Curiosidade]
É por isso que um HD de 1 TB anunciado pelo fabricante aparece como aproximadamente 931 GiB no seu sistema operacional. O fabricante usa $10^{12}$ bytes, enquanto o sistema operacional calcula em base 2. O espaço físico é o mesmo, apenas as unidades diferem.
:::
