---
title: Matemática
---

# Matemática

Assim como processadores se utilizam de instruções para realizar operações matemáticas, linguagens de alto nível também o fazem. Porém, ao contrário de assembly, onde precisamos saber o código de operação, como `sub` para subtração, em linguagens de alto nível geralmente podemos utilizar símbolos que representam as operações matemáticas mais comuns, tornando mais simples realizar cálculos no código. A grande maioria das linguagens de programação possui símbolos em comum para adição, subtração, multiplicação e divisão, conforme demonstrado na tabela abaixo.

| Operação      | Operador |
| ------------- | -------- |
| Adição        | `+`      |
| Subtração     | `-`      |
| Multiplicação | `*`      |
| Divisão       | `/`      |

Outra convenção comum é usar o sinal de igual para representar atribuição em vez de igualdade. Isto é, uma declaração como `x = 5` significa que estamos atribuindo o valor `5` à variável `x`. Atribuir o resultado de uma operação matemática é tão natural quanto seria um cálculo feito à mão:

```c
// adição em C
custo = preco + taxa;
```

Em Python é igualmente simples:

```python
# Adição em Python
custo = preco + taxa
```

Até aqui focamos em operações matemáticas com números inteiros, porém também é possível realizar operações aritméticas com ponto flutuante. Diferentemente de números inteiros, pontos flutuantes representam frações, números decimais. Em C, pontos flutuantes são declarados usando um `.`, ao invés de `,` como estamos acostumados no Brasil, e o seu tipo é declarado pelas palavras `float` ou `double`, como mostrado abaixo:

```c
// Declarando um ponto flutuante em C
double preco = 1.99;
```

Python, por sua vez, assim como nos inteiros, consegue inferir que estamos declarando um ponto flutuante apenas por colocarmos um `.` no número:

```python
# Declarando um ponto flutuante em Python
preco = 1.99
```

Quando realizamos alguma operação que pode resultar em um número decimal, o ideal é que declaremos que o resultado é do tipo `float` ou `double`:

```c
// Dividindo inteiros em C, pode resultar em um decimal
int x = 5;
int y = 2;
float z = x / y;
```

Observe que agora `z` tem o tipo `float` atribuído a ele. É fácil imaginar que o resultado fosse `2.5`, porém fizemos uma divisão de dois inteiros, o que resulta em um número inteiro `2`. A linguagem C é bem literal e às vezes pouco intuitiva, lembre-se que C realiza quase um espelho do que o programador pediu que ele fizesse. Ao contrário de Python, que já é bem mais intuitivo:

```python
# Divisão de dois inteiros em Python
x = 5
y = 2
z = x / y # resultado será 2.5
```

Algumas linguagens também possuem atalhos para operações corriqueiras, como por exemplo, em C temos os operadores de incremento, que adiciona 1, e decremento, que subtrai 1.

```c
// Em C, podemos adicionar 1 à variável de forma mais longa
x = x + 1;
// Ou podemos usar o operador de incremento
x++;
// O de decremento é semelhante
x--;
```

Python também tem alguns atalhos interessantes para matemática. Os operadores `+=` e `-=` permitem que o programador adicione ou subtraia de uma variável.

```python
# Em Python podemos adicionar 3 a uma variável assim
x = x + 3
# Ou podemos usar o operador de incremento
x += 3
# Ou então o de decremento
x -= 3
```
