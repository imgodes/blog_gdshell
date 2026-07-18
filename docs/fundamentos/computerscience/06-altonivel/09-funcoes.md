---
title: Funções
---

# Funções

Uma característica comum em programas é a capacidade de executar um trecho de código mais de uma vez, porém não em loop, e sim quando necessário, invocado de diferentes partes do programa, em momentos diferentes e com entradas e saídas que podem variar. Quando o programador percebe que o mesmo código é necessário em múltiplos lugares, o ideal é que ele o escreva na forma de uma função.

Uma função é um conjunto de instruções que pode ser invocado por outro código. Funções opcionalmente recebem entradas, que chamamos de parâmetros, e retornam uma saída, que chamamos de valor de retorno. Converter uma string para letras minúsculas, imprimir texto na tela ou baixar um arquivo da internet são todos exemplos do que pode ser feito com código reutilizável na forma de uma função.

Funções são mais um exemplo de encapsulamento, que já vimos antes no contexto de hardware. Uma função encapsula os detalhes internos de um bloco de código e oferece uma interface para quem queira utilizá-lo. Um desenvolvedor que quer usar uma função precisa entender apenas suas entradas e saídas, sem precisar conhecer o funcionamento interno dela.

Evitar repetição de código é um princípio de engenharia de software chamado de DRY, do inglês *don't repeat yourself*, que incentiva a redução de código duplicado. Funções são a forma mais direta de aplicar esse princípio.

## Definindo funções

Uma função precisa ser definida antes de ser usada. A definição inclui o nome da função, os parâmetros de entrada, o corpo da função com as instruções que serão executadas, e em algumas linguagens, o tipo do valor de retorno.

Veja um exemplo em C que calcula a área de um círculo dado o seu raio:

```c
// Função em C para calcular a área de um círculo
double areaOfCircle(double radius)
{
    double area = 3.14 * radius * radius;
    return area;
}
```

O `double` no início indica que a função retorna um número de ponto flutuante. Em seguida temos o nome da função, `areaOfCircle`, e o parâmetro de entrada `radius`, também do tipo `double`. O corpo da função declara uma variável local `area`, calcula o resultado e o retorna ao chamador. Vale observar que `area` é uma variável local, portanto seu escopo está limitado à função, ela não pode ser acessada de fora e é descartada quando a função retorna.

O equivalente em Python:

```python
# Função em Python para calcular a área de um círculo
def area_of_circle(radius):
    area = 3.14 * radius * radius
    return area
```

A palavra `def` indica ao Python que uma definição de função está prestes a começar. As duas funções fazem o mesmo cálculo e retornam o mesmo resultado, porém a versão em C exige que os tipos sejam declarados explicitamente, enquanto Python os infere automaticamente.

## Chamando funções

Definir uma função não é suficiente para que ela execute. É necessário chamá-la, ou invocá-la. A chamada passa os parâmetros necessários e transfere o controle para a função, que executa seu código e devolve o controle e o resultado ao chamador.

```c
// Chamando a função duas vezes em C, cada vez com uma entrada diferente
double area1 = areaOfCircle(2.0);
double area2 = areaOfCircle(38.6);
```

```python
# Chamando a função duas vezes em Python
area1 = area_of_circle(2.0)
area2 = area_of_circle(38.6)
```

Nos dois exemplos, `area1` terá o valor `12.56` e `area2` terá o valor `4678.47`. O código chamador pode armazenar o valor retornado em uma variável ou simplesmente ignorá-lo, embora ignorar o retorno raramente faça sentido dependendo do propósito da função.

## Usando bibliotecas

Embora programadores definam suas próprias funções, uma parte importante da programação é saber aproveitar funções que outras pessoas já escreveram. Linguagens de programação geralmente incluem um grande conjunto de funções chamado de biblioteca padrão, ou *standard library*. Tanto C quanto Python incluem bibliotecas padrão com funções para coisas como imprimir no console, trabalhar com arquivos e processar texto. A biblioteca padrão do Python é particularmente extensa e bem conceituada.

Além da biblioteca padrão, existem bibliotecas adicionais desenvolvidas pela comunidade e disponíveis para a maioria das linguagens. Essas bibliotecas são agrupadas em pacotes e distribuídas por meio de gerenciadores de pacotes. Para Python, o gerenciador de pacotes padrão é o `pip`, amplamente utilizado pelos desenvolvedores Python para instalar bibliotecas da comunidade.
