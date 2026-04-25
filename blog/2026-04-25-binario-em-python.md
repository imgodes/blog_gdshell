---
slug: binario-em-python
title: Brincando com binários no Python
tags: [tech]
---

Se você acabou de ler o capítulo sobre [sistemas de numeração](/docs/fundamentos/computerscience/sistemas_de_numeracao), provavelmente está com vontade de colocar a mão na massa. A boa notícia é que o Python é uma das melhores ferramentas para isso: ele entende binário e hexadecimal nativamente, e tem funções que tornam as conversões entre bases uma linha de código.

<!-- truncate -->

Este post não é um tutorial de Python. É mais um convite para você abrir o terminal, digitar algumas coisas e ver com os próprios olhos o que foi explicado na teoria.

## Python já fala binário

O Python aceita literais em diferentes bases diretamente no código. Você pode escrever um número em binário usando o prefixo `0b`, em octal com `0o` e em hexadecimal com `0x`, e o Python os trata como números normais:

```python
>>> 0b101
5
>>> 0b1010
10
>>> 0xFF
255
>>> 0o17
15
```

O Python sempre exibe o resultado em decimal por padrão. Mas o valor é o mesmo, independente de como você o escreveu. Tentar somar um binário com um hexadecimal funciona perfeitamente:

```python
>>> 0b101 + 0xFF
260
```

## Convertendo para binário e hexadecimal

Para ir no caminho inverso, de decimal para binário ou hexadecimal, o Python tem as funções `bin()` e `hex()`:

```python
>>> bin(13)
'0b1101'
>>> bin(255)
'0b11111111'
>>> hex(255)
'0xff'
>>> hex(16)
'0x10'
```

Perceba que o retorno é uma *string*, não um número. Isso é importante: o `0b` e o `0x` fazem parte do texto, não do valor. Se você precisar só dos dígitos sem o prefixo, pode fatiar a string:

```python
>>> bin(13)[2:]
'1101'
>>> hex(255)[2:]
'ff'
```

## Formatando com mais controle

Para formatar binários com um número fixo de dígitos, como quando você quer mostrar sempre 8 bits (um byte completo), a forma mais prática é usar f-strings:

```python
>>> valor = 42
>>> f'{valor:08b}'
'00101010'
```

O `08b` significa: formato binário (`b`), com largura total de 8 caracteres (`8`), preenchendo com zeros à esquerda (`0`). Muito útil para comparar bytes lado a lado ou simplesmente para a leitura ficar mais limpa:

```python
>>> for n in range(8):
...     print(f'{n:3d} → {n:08b}')
...
  0 → 00000000
  1 → 00000001
  2 → 00000010
  3 → 00000011
  4 → 00000100
  5 → 00000101
  6 → 00000110
  7 → 00000111
```

Olhando para essa tabela, você vê visualmente o padrão do binário: o bit mais à direita alterna a cada linha, o segundo a cada duas, o terceiro a cada quatro.

O mesmo funciona para hexadecimal:

```python
>>> f'{255:02x}'  # minúsculo
'ff'
>>> f'{255:02X}'  # maiúsculo
'FF'
>>> f'{255:#04x}'  # com prefixo 0x
'0xff'
```

## Convertendo de volta para decimal

Para ir de uma string binária ou hexadecimal para um inteiro decimal, use `int()` com o argumento de base:

```python
>>> int('1101', 2)   # binário para decimal
13
>>> int('ff', 16)    # hexadecimal para decimal
255
>>> int('0b1101', 2) # também funciona com prefixo
Traceback... ValueError  # atenção: com prefixo, use base 0
>>> int('0b1101', 0) # base 0 detecta automaticamente
13
```

A base `0` é conveniente quando você não sabe de antemão em que base a string está: o Python olha para o prefixo (`0b`, `0x`, `0o`) e decide sozinho.

## Um exercício rápido

Se você leu o capítulo e fez os exercícios de conversão no papel, pode conferir as respostas agora:

```python
>>> int('10', 2)    # 0b10 em decimal
2
>>> int('111', 2)   # 0b111 em decimal
7
>>> int('1100', 2)  # 0b1100 em decimal
12
```

E para a conversão de decimal para binário por divisões sucessivas que vimos no capítulo, o Python dá o mesmo resultado:

```python
>>> bin(13)
'0b1101'
```

## O que vem a seguir

Nos próximos capítulos sobre bits e bytes, e depois sobre representação de dados, essas ferramentas vão aparecer bastante. Em especial quando começarmos a ver operações bit a bit como AND, OR e deslocamento de bits, o Python vai ser um companheiro bastante útil para testar intuições antes de ir para código mais baixo nível.

Por enquanto, o suficiente é saber que o Python entende binário tão naturalmente quanto decimal, e que converter entre as bases é uma questão de chamar a função certa.

---

[^1]: Para saber mais sobre representação de números em Python: https://docs.python.org/3/library/functions.html#int
