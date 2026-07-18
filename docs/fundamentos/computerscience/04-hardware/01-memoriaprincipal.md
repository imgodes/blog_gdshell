---
title: Memória principal
---

# Memória principal

Enquanto um programa executa, o computador precisa de um lugar para armazenar as instruções e os dados relacionados a ele. Tudo isso são séries de bits que a CPU precisa acessar, e a memória principal se encarrega dessa tarefa.

Existem dois tipos de RAM, a SRAM e a DRAM. Nos dois casos, a unidade básica de armazenamento é uma célula de memória, um circuito que armazena um único bit.

- SRAM, memória **estática** de acesso aleatório, usa células baseadas em flip-flops que mantêm seus valores enquanto energizadas. É mais rápida, porém mais cara.
- DRAM, memória **dinâmica** de acesso aleatório, usa células baseadas em transistor e capacitor. A carga do capacitor vaza ao longo do tempo, então os dados precisam ser reescritos periodicamente. Essa característica é o que torna a DRAM dinâmica. Por ser mais barata, é a escolha usada como memória principal.

Você pode pensar, de forma generalizada, na RAM como um quadriculado, um plano cartesiano, igual na batalha naval. Cada célula nesse quadriculado pode ser identificada usando suas coordenadas.

Acessar um único bit de cada vez é bem ineficiente, então a RAM acessa múltiplos quadrados de células em paralelo, permitindo leitura e escrita de múltiplos bits de uma vez. A localização, as coordenadas do nosso exemplo, de um conjunto de bits na memória é chamada de **endereço de memória**, um valor numérico que identifica onde algo está armazenado na memória.

É muito comum que a memória seja endereçada por bytes (*byte-addressable*), ou seja, um único endereço de memória se refere a 8 bits de dados. O que é importante entender aqui é que o computador atribui endereços aos bytes da memória, e por meio desses endereços a CPU pode escrever ou ler partes específicas da memória.

## Tamanho do endereço de memória

Imagine um computador fictício com $64\,\text{KB}$ de memória, onde cada endereço representa um byte. Como $64\,\text{KB} = 64 \times 1024 = 65.536$ bytes, precisamos de 65.536 endereços únicos, numerados de 0 a 65.535, ou `0x0000` a `0xFFFF` em hexadecimal.

Como o computador é digital, esses endereços são representados em binário. Mas quantos bits são necessários para representar 65.536 endereços distintos?

A resposta é $2^{16} = 65.536$, portanto 16 bits são suficientes. Uma forma ainda mais simples de chegar nisso é observar que o endereço mais alto é `0xFFFF`, e cada símbolo hexadecimal representa 4 bits, logo 4 símbolos $\times$ 4 bits = 16 bits.

$$2^{16} = 65.536 \implies \text{16 bits de endereço para 64KB de memória}$$

O número de bits do endereço limita diretamente a quantidade de memória que o computador consegue acessar, e é por isso que isso importa. Um processador com endereços de 16 bits nunca poderá enxergar mais que 65.536 bytes, não importa quanta RAM física esteja instalada.

Um bom exemplo prático é a string `"Hello"` armazenada a partir do endereço `0x0002`, que ocupa os endereços `0x0002` a `0x0006`, um byte por caractere ASCII, ilustrando como memória e endereçamento funcionam na prática.

| Endereço | Dado (hex) | ASCII |
| -------- | ---------- | ----- |
| `0x0000` | `00`       |       |
| `0x0001` | `00`       |       |
| `0x0002` | `48`       | H     |
| `0x0003` | `65`       | e     |
| `0x0004` | `6C`       | l     |
| `0x0005` | `6C`       | l     |
| `0x0006` | `6F`       | o     |
| `0x0007` | `00`       |       |

Observe que o endereço `0x0007` armazena `00`, isso porque é comum que linguagens de programação finalizem uma string de texto com um byte nulo. Outra coisa comum é que aplicações que fazem inspeção de memória representem o conteúdo que ela possui de forma semelhante à tabela acima.
