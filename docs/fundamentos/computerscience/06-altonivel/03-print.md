---
title: Print
---

# Print

Um recurso muito comum em linguagens de alto nível é a capacidade de mostrar um texto na tela para o usuário. Esse recurso é chamado de "imprimir" ou "printar" no dia a dia dos desenvolvedores, e apesar de soar estranho à primeira vista, não tem nada a ver com impressora. Quando dizemos que um programa "imprimiu algo na tela", queremos dizer que ele exibiu uma informação para o usuário, geralmente no terminal ou console.

:::tip Por que o comando se chama "print"?
Nos primórdios da computação, não existiam telas. A saída de um programa era impressa em papel por terminais físicos chamados de teletipos, que funcionavam como máquinas de escrever conectadas ao computador. Quando você executava um programa e queria ver o resultado, ele era impresso em papel. Por isso o comando recebeu o nome print, de imprimir. Com o tempo, as telas substituíram o papel, mas o nome ficou. Linguagens como Fortran e BASIC, desenvolvidas nas décadas de 1950 e 1960, já usavam PRINT como instrução de saída, e esse nome foi herdado por praticamente todas as linguagens que vieram depois.

Fonte: [Wikipedia, printf](https://en.wikipedia.org/wiki/Printf)
:::

## Print em C

Em C, a função responsável por exibir informações na tela é o `printf`, onde o `f` vem de *formatted*, ou seja, saída formatada. Isso significa que você pode controlar exatamente como o valor será exibido. Veja um exemplo simples:

```c
printf("Olá, mundo!\n");
```

O `\n` no final é um caractere especial que representa uma quebra de linha, fazendo com que o cursor vá para a próxima linha após a exibição. Sem ele, o próximo texto que for exibido apareceria na mesma linha.

## Print em Python

Python torna isso consideravelmente mais simples. A função `print()` aceita qualquer valor diretamente, sem necessidade de especificadores de formato:

```python
print("Olá, mundo!")
```
