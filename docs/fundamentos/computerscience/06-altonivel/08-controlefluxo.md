---
title: Controle de Fluxo
---

# Controle de Fluxo

Booleanos e comparações são úteis para avaliar se uma expressão é verdadeira, mas sozinhos eles não fazem muita coisa. Precisamos de algo que reaja a essa avaliação e tome uma ação com base nela.

Tomemos como exemplo a mesma máquina de café que vimos no capítulo anterior. Conseguimos avaliar se a máquina tem café e água disponíveis, mas não fizemos nada com esse resultado. Seria muito mais interessante se, ao detectar que os dois estão disponíveis, a máquina exibisse uma mensagem na tela, e melhor ainda se exibisse outra mensagem caso contrário. Para esse tipo de situação, linguagens de alto nível oferecem instruções de controle de fluxo, que permitem alterar o comportamento do programa de acordo com uma condição, tornando o código capaz de tomar decisões.

:::danger Traduções
Eu sei que existe uma imprecisão técnica em usar a palavra "instrução" para falar de comandos de linguagens de alto nível, pois pode acabar confundindo com instruções de baixo nível. Porém, é de se reconhecer que existe uma certa dificuldade em traduzir a palavra *statement* para português, às vezes utilizo "instrução", às vezes "declaração", mas nenhuma passa a mesma sensação da palavra em inglês. Então entenda que, sempre que estivermos falando de instrução de alto nível, é o mesmo que "statement".
:::

## Instruções if

Uma instrução `if` se propõe a avaliar se uma condição é verdadeira. Já a instrução `else` permite que o programador faça algo diferente caso essa condição `if` seja falsa. Veja o exemplo da máquina de café, agora utilizando instruções `if/else`.

```python
# Vou supor valores fictícios para quantidade atual de café e água
qtd_cafe = 2500 # 2 Kg de café
qtd_agua = 800 # 800 ml de agua

# Podemos imprimir as quantidades primeiro
print(f"A máquina atualmente possui {qtd_cafe} de café e {qtd_agua} de agua.")

# Depois avaliar se temos a quantidade necessária para preparar o café
if qtd_cafe > 1000 and qtd_agua > 500:
	print("Estou pronta para preparar café!")
else:
	print("Não tenho café disponível")
```

Nesse exemplo, a instrução `if` checa primeiro se possui a `qtd_cafe` maior que `1000`, e se, através do operador `and`, possui a `qtd_agua` maior que `500`. Se isso for verdadeiro, executa a linha logo abaixo, que mostra uma mensagem dizendo que a máquina está pronta para preparar o café, caso contrário, através da instrução `else`, executa a linha abaixo, que mostra uma mensagem informando a indisponibilidade dos recursos necessários para o preparo.

Para sair um pouco do mundo do café e Python, vamos a um exemplo em C com checagem de idade:

```c
if (age < 18) {
	printf("Você é um adolescente! Ainda não pode tirar habilitação")
} else {
	printf("Você é um adulto! Já pode tirar habilitação")
}
```

Observe que em C temos chaves `{ }` que delimitam o que chamamos de bloco de código. Esse bloco é o que será executado em resposta ao `if/else`, tudo dentro dele faz parte da execução sob aquelas condições impostas. Python, por sua vez, delimita o bloco de código utilizando indentação, 2 ou 4 espaços após o início da linha, e tudo que estiver indentado com o mesmo nível de espaçamento será considerado do mesmo bloco de código.

## Loops

Outra característica de linguagens de alto nível é a capacidade de executar alguma coisa repetidas vezes com base em uma condição. Um loop `while` permite executar algo repetidamente enquanto uma condição for verdadeira. Por exemplo, imagine uma fila de pessoas que desejam imprimir uma ficha, e você, como programador, deseja que seu programa imprima as fichas para as 5 primeiras pessoas da fila. Para esse tipo de demanda, um loop `while` pode funcionar.

```python
numero_ficha = 1

while numero_ficha <= 5:
	print(f"Você possui a ficha de número {numero_ficha}")
	numero_ficha = numero_ficha + 1
```

Inicialmente a variável `numero_ficha` está atribuída com o valor `1`, e o loop `while` foi instruído a continuar executando o bloco de código enquanto o `numero_ficha` for menor ou igual a `5`. Depois disso, para que o programa progrida para o próximo número da fila, precisamos somar `1` ao `numero_ficha`, que após a soma é igual a `2`. Então o programa volta para o início do loop, avalia novamente se `numero_ficha` ainda é menor ou igual a `5` e repete a execução.

Observe o resultado abaixo. A partir do momento em que o `numero_ficha` foi somado a `1` vezes o suficiente para ser maior que `5`, a condição passou a ser falsa, e o loop `while` parou de executar.

```
Você possui a ficha de número 1
Você possui a ficha de número 2
Você possui a ficha de número 3
Você possui a ficha de número 4
Você possui a ficha de número 5
```

O mesmo pode ser feito em C:

```c
int numero_ficha = 1;
while(numero_ficha <= 5) {
	printf("Voce possui a ficha de numero %d", numero_ficha);
	numero_ficha++;
}
```

Em ambos os exemplos, o corpo do loop `while` incrementa o valor de `numero_ficha` a cada vez que percorre o loop.
