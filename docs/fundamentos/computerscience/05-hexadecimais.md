---
tittle: Hexadecimal
---
#  Hexadecimal

Vimos que computadores representam tudo usando sequências de 0s e 1s. Na teoria, isso é elegante. Na prática, ler e escrever longas cadeias binárias é extremamente tedioso e sujeito a erros humanos. Imagine ter que inspecionar o valor `0b10110011110100011010000111001101` em um depurador. Longo, cansativo e fácil de errar.

É para resolver esse problema que o sistema hexadecimal existe.

##  O que é hexadecimal

O sistema hexadecimal, ou simplesmente *hex*, é um sistema de numeração de base 16. Assim como o decimal usa potências de 10 e o binário usa potências de 2, o hexadecimal usa potências de 16 para determinar o valor de cada posição.

A questão imediata é: temos apenas 10 algarismos (de 0 a 9), mas um sistema de base 16 precisa de 16 símbolos distintos. Para completar os 6 símbolos restantes, usamos as primeiras letras do alfabeto: A, B, C, D, E e F. Poderiam ser outros símbolos quaisquer; letras foram escolhidas por convenção.

A correspondência é simples:

| Hexadecimal | Decimal | Binário |
| ----------- | ------- | ------- |
| 0           | 0       | `0000`  |
| 1           | 1       | `0001`  |
| 2           | 2       | `0010`  |
| 3           | 3       | `0011`  |
| 4           | 4       | `0100`  |
| 5           | 5       | `0101`  |
| 6           | 6       | `0110`  |
| 7           | 7       | `0111`  |
| 8           | 8       | `1000`  |
| 9           | 9       | `1001`  |
| A           | 10      | `1010`  |
| B           | 11      | `1011`  |
| C           | 12      | `1100`  |
| D           | 13      | `1101`  |
| E           | 14      | `1110`  |
| F           | 15      | `1111`  |

O prefixo convencional para indicar que um número está em hexadecimal é `0x`. Por exemplo, `0xA` significa 10 em decimal, e `0xFF` significa 255.

##  A relação com o binário

A razão pela qual o hexadecimal é tão útil na computação é direta: 16 é uma potência de 2, especificamente $2^4 = 16$. Isso significa que exatamente 4 bits correspondem a exatamente 1 dígito hexadecimal.

Isso torna a conversão entre os dois sistemas extremamente simples. Para converter um número binário para hexadecimal, basta separá-lo em grupos de 4 bits da direita para a esquerda e substituir cada grupo pelo dígito hexadecimal correspondente.

Tomando `0b10110011` como exemplo:

```
1011 0011
  B    3
```

Logo, `0b10110011 = 0xB3`. Para conferir: $11 \cdot 16^1 + 3 \cdot 16^0 = 176 + 3 = 179$.

O caminho inverso é igualmente direto: cada dígito hexadecimal é expandido para 4 bits.

:::tip[Exercite]
Tente converter esses números antes de ver a resposta:

- `0b11110000` para hexadecimal
- `0xCA` para binário

<details>
  <summary>Ver respostas</summary>

  Para `0b11110000`: separando em grupos de 4, temos `1111` e `0000`. Consultando a tabela: `1111 = F` e `0000 = 0`. Resultado: `0xF0`.

  Para `0xCA`: C equivale a `1100` e A equivale a `1010`. Resultado: `0b11001010`.

</details>
:::

##  Por que não usar o binário diretamente?

Computadores de fato usam binário internamente. Entretanto, ferramentas como depuradores, editores hexadecimais, documentações técnicas e até endereços de memória são exibidos em hexadecimal por uma razão simples: compacidade. Um byte (8 bits) é representado por exatamente 2 dígitos hexadecimais. Quatro bytes (32 bits) cabem em 8 dígitos hexadecimais.

Compare as representações do mesmo valor `255`:

```
Decimal:     255
Binário:     0b11111111
Hexadecimal: 0xFF
```

O hexadecimal equilibra compacidade e proximidade com o binário. Ao contrário do decimal, a conversão para binário é imediata e não exige cálculos.

##  Onde o hexadecimal aparece

Conforme você avança no estudo de computação, o hexadecimal aparece em praticamente todo lugar: endereços de memória (`0x7ffee3b5c0a0`), cores em CSS (`#FF5733`), valores em arquivos de configuração, hashes criptográficos e muito mais.

Quando um depurador mostra que uma variável está no endereço `0x00007fff5fbff8b0`, ele está usando hexadecimal porque o valor binário equivalente teria 48 dígitos. A leitura seria praticamente impossível.

:::info
O sistema octal (base 8) também aparece ocasionalmente, especialmente em permissões de arquivos no Unix e Linux. Por exemplo, a permissão `chmod 755` usa octal. Cada dígito octal corresponde a 3 bits, o que faz sentido porque as permissões de leitura, escrita e execução são representadas por 3 bits por usuário. O raciocínio é o mesmo do hexadecimal: agrupar bits em unidades convenientes para leitura humana.
:::

#  Referências

- Justice, Matthew. *How Computers Really Work*. No Starch Press, 2020. Capítulo 1: Computing Concepts.
- Petzold, Charles. *Code: The Hidden Language of Computer Hardware and Software*. Microsoft Press, 2000.
- MDN Web Docs. *CSS color values*. Disponível em: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value. Acesso em: 2026.
