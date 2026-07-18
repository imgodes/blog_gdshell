---
title: Lógica
---

# Lógica

Conforme discutido anteriormente, processadores são muito bons em executar operações lógicas, já que a lógica é a base para circuitos digitais. Como é de se imaginar, linguagens de programação também proporcionam a capacidade de lidar com lógica. A maioria das linguagens de alto nível fornece dois tipos de operadores que lidam com lógica, operadores bitwise, que operam sobre os bits de inteiros, e operadores booleanos, que operam sobre valores booleanos, verdadeiro ou falso. A terminologia usada em diferentes linguagens pode confundir um pouco, pois Python usa "bitwise" e "booleano", já C utiliza "bitwise" e "lógica". De qualquer forma, vamos utilizar "bitwise" e "booleano" por aqui.

## Operadores bitwise

Operadores bitwise, também chamados de operadores bit a bit, trabalham diretamente sobre os bits individuais de um inteiro. Um operador bitwise é parecido com um operador matemático, porém ao invés de adição ou subtração, ele realiza operações AND, OR ou outras operações lógicas sobre os bits de um inteiro. Essas operações são como as que vimos em tabelas verdade quando estudamos a [lógica binária](/docs/fundamentos/computerscience/circuitos), executando a mesma operação em todos os bits em paralelo.

Tanto C quanto Python utilizam o conjunto de operadores demonstrado na tabela abaixo.

| Operação Bitwise  | Operador Bitwise |
| ----------------- | ----------------- |
| AND                | `&`               |
| OR                 | `\|`               |
| XOR                | `^`               |
| NOT (complemento)  | `~`               |

Vamos dar uma olhada em um exemplo com Python:

```python
x = 5
y = 3
resultado_and = x & y
resultado_or = x | y

print(f"Resultado da operacao AND: {resultado_and}")
print(f"Resultado da operacao OR: {resultado_or}")
```

O resultado do código acima é que `resultado_and` é 1 e `resultado_or` é 7. A tabela abaixo mostra como o Python chegou a esses resultados, bit a bit:

| Bit | `x = 5` | `y = 3` | AND | OR |
| --- | ------- | ------- | --- | -- |
| 4 (valor 4) | 1 | 0 | 0 | 1 |
| 2 (valor 2) | 0 | 1 | 0 | 1 |
| 1 (valor 1) | 1 | 1 | 1 | 1 |
| resultado decimal | 5 | 3 | **1** | **7** |

Lembre-se que essas operações seguem a mesma tabela verdade que vimos em lógica binária. No caso da operação AND, se ambas as entradas forem 1, o resultado também será 1, do contrário o resultado é 0. Já na operação OR, se ambas as entradas forem 0, o resultado será 0, do contrário resulta sempre em 1.

## Operadores booleanos

Operadores booleanos trabalham com valores booleanos e resultam também em valores booleanos. Esses valores podem ser verdadeiro ou falso, imagine por exemplo uma máquina de café que precisa guardar o estado da disponibilidade de café, isso poderia ser definido em uma variável booleana como `tem_cafe = True`.

:::info De onde vem a palavra booleano?
O termo vem do nome de George Boole, matemático inglês que desenvolveu um sistema algébrico para representar lógica usando apenas dois valores, verdadeiro e falso. Esse trabalho, publicado em 1854 no livro "An Investigation of the Laws of Thought", ficou conhecido como álgebra booleana e é a base matemática de toda a lógica digital que vimos nos capítulos anteriores, as portas AND, OR e NOT que usamos para construir circuitos são diretamente derivadas do trabalho de Boole.

Fonte: [Britannica, George Boole](https://www.britannica.com/biography/George-Boole)
:::

Os operadores booleanos nos permitem executar operações lógicas como AND, OR e NOT usando valores booleanos. Por exemplo, poderíamos checar se duas condições são verdadeiras usando o operador AND em Python, verificando primeiro se existe café e depois se tem água na máquina, e usar o resultado disso para decidir se deve começar a preparar o café.

Na tabela abaixo listo os operadores em C e em Python, observe que existe uma diferença na representação, mas a ideia é a mesma.

| Operador Booleano | Operador em C | Operador em Python |
| ------------------ | ------------- | ------------------- |
| AND                 | `&&`          | `and`               |
| OR                  | `\|\|`          | `or`                |
| NOT                 | `!`           | `not`               |

Ao passo que os operadores booleanos realizam operações entre verdadeiro e falso, podemos utilizar operadores de comparação que também resultam em verdadeiro ou falso. Por exemplo, se quisermos que a máquina de café só comece o preparo depois de garantir que existe no mínimo 500 ml de água e 1000 g de café, poderíamos escrever isso da seguinte forma:

```python
# Vou supor valores fictícios para quantidade atual de café e água
qtd_cafe = 2500 # 2 Kg de café
qtd_agua = 800 # 800 ml de agua

# Agora as comparações que resultam em booleanos
tem_cafe = qtd_cafe > 1000 # Verifica se a quantidade de café é maior que 1000g
tem_agua = qtd_agua > 500 # Verifica se a quantidade de agua é maior que 500 ml

# Podemos imprimir o resultado
print(f"A máquina atualmente possui {qtd_cafe} de café e {qtd_agua} de agua.")
print(f"Tem café? Resposta: {tem_cafe}")
print(f"Tem agua? Resposta: {tem_agua}")
```

O resultado será algo como:

```
A máquina atualmente possui 2500 de café e 800 de agua.
Tem café? Resposta: True
Tem agua? Resposta: True
```

Na tabela abaixo listo os operadores de comparação usados tanto em C quanto em Python:

| Operação de Comparação | Operador de Comparação |
| ------------------------ | ------------------------ |
| IGUALDADE                 | `==`                     |
| DIFERENTE                 | `!=`                     |
| MAIOR QUE                 | `>`                      |
| MENOR QUE                 | `<`                      |
| MAIOR QUE OU IGUAL        | `>=`                     |
| MENOR QUE OU IGUAL        | `<=`                     |

Podemos ainda combinar os operadores booleanos e de comparação para criar expressões lógicas mais elaboradas, como saber se a máquina tem café e água ao mesmo tempo:

```python
# Vou supor valores fictícios para quantidade atual de café e água
qtd_cafe = 2500 # 2 Kg de café
qtd_agua = 800 # 800 ml de agua

# Agora as comparações que resultam em booleanos
tem_cafe = qtd_cafe > 1000 # Verifica se a quantidade de café é maior que 1000g
tem_agua = qtd_agua > 500 # Verifica se a quantidade de agua é maior que 500 ml
# Com esses dois valores podemos usar uma operação lógica AND
# para caso tenha café e água a máquina pode fazer o café
preparar_cafe = tem_cafe and tem_agua

# Podemos imprimir o resultado
print(f"A máquina atualmente possui {qtd_cafe} de café e {qtd_agua} de agua.")
print(f"Tem café? Resposta: {tem_cafe}")
print(f"Tem agua? Resposta: {tem_agua}")
print(f"Tem café e agua? Resposta: {preparar_cafe}")
```

O resultado seria o seguinte:

```
A máquina atualmente possui 2500 de café e 800 de agua.
Tem café? Resposta: True
Tem agua? Resposta: True
Tem café e agua? Resposta: True
```
