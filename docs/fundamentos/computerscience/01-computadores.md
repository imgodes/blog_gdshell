##  Computadores

Muitas pessoas limitam o conceito de “computador” àquela caixa que fica embaixo da mesa, ligada a um monitor. Essa imagem não está errada, mas é incompleta. Um computador vai muito além disso.

Celulares, smartwatches, notebooks, câmeras digitais, roteadores, videogames e servidores também são computadores. A diferença entre eles não está no fato de serem ou não computadores, mas na forma como são usados e no tipo de tarefa que executam.

De forma simples, **um computador é qualquer dispositivo eletrônico que pode ser programado para executar um conjunto de instruções lógicas**. 

Por enquanto, basta guardar essa definição. Com o tempo, ela vai fazer cada vez mais sentido.

##  Analógico vs Digital
É muito comum as pessoas associarem computadores a dispositivos digitais, em contraste com objetos como relógios de pulso clássicos, que costumam ser chamados de analógicos. Mas o que isso realmente significa? O que diferencia algo analógico de algo digital?

## ##  Abordagem analógica
Olhe ao seu redor e escolha qualquer objeto. Agora tente descrever características como tamanho e peso. Fazer isso com precisão não é simples sem ferramentas como uma régua ou uma balança.
Na ausência dessas ferramentas, normalmente usamos comparações:
- “Essa boneca tem mais ou menos um palmo de altura”
- “Ela pesa mais ou menos o mesmo que um copo cheio de água”

Ao fazer isso, você cria uma escala de referência. Você não sabe a medida exata, mas consegue representar o tamanho e o peso usando comparações contínuas com outros objetos.

Nesse contexto, podemos dizer algo como:
- altura da boneca = 1 palmo
- peso da boneca = 1 copo

Se houver duas bonecas iguais, elas teriam:
- 2 palmos de altura
- peso equivalente a 2 copos

Então você consegue comparar, a mão com um objeto e dizer o quão grande ou pequeno ele é por meio de uma analogia, e em outras palavras, é um tipo de representação é analógica. Ela funciona por aproximação, comparação e variação contínua. Pequenas mudanças geram pequenas diferenças no resultado, sem saltos bruscos.

O mesmo acontece em uma balança analógica. À medida que o peso aumenta, a agulha se move de forma contínua. Não há “pulos” entre valores. O ponteiro pode estar exatamente entre dois números, representando algo como “um pouco mais” ou “um pouco menos”.

Em uma balança analógica tradicional, o que move a agulha não é eletricidade, é força física, mais especificamente a força da gravidade atuando sobre o objeto. Quando você coloca um objeto sobre a balança, ele exerce uma força para baixo devido ao seu peso. Essa força é transmitida para uma mola, e dependendo do quanto essa mola for pressionada, ela vai mexer a agulha indicando mais ou menos peso. Ou seja, o peso aplicado a balança é comparado ao quão bem a mola resiste a ele, e a agulha para onde aponta o quilograma, reage de acordo e torna a leitura fácil para o usuário final.

Esse é o coração da abordagem analógica: representar informações como variações contínuas, sem valores fixos e discretos.

Outro exemplo de medida analógica, seria o termômetro de mercúrio. O volume do mercúrio aumenta conforme a temperatura aumenta, isso é uma propriedade natural dele. Os fabricantes colocam uma quantidade de mercúrio em um tubo de vidro com várias marcações (por exemplo, 24°C, 30°C) que correspondem a um determinado volume que o mercúrio pode assumir dependendo da temperatura. Essas posições do mercúrio em tubos de vidro representam então a temperatura.

Perceba que em ambos os exemplos, tanto a mola, quanto o mercúrio, não medem nada sozinhos, mas o dispositivo criado consegue se aproveitar deles para converter posições que eles assumem em unidades de medidas, números, muito mais palpáveis para nós humanos.

Porém aqui vai um problema, esses números não são precisos, se a agulha da balança para entre 59Kg e 60Kg, ou se o mercúrio parar entre 29°C e 30°C. Até poderíamos chutar que é 59,5Kg no caso da balança, mas não teria como ter certeza absoluta, apenas seria uma aproximação. Então como ser mais preciso que o analógico?

## ##  Abordagem digital
Mas o que isso tem a ver com computadores? Bem, acontece que essas representações analógicas são um problema para os computadores. Pois os tipos de sistemas analógicos usados são tão diferentes que criar um único computador que seja capaz de entender todos eles é quase impossível. Por exemplo, criar uma máquina me possa medir o volume de mercúrio (como o termômetro) é completamente diferente de criar uma máquina que consiga medir o peso de alguém.

Outro ponto é que computadores dependem de representações extremamente confiáveis e precisas. As representações analógicas dificilmente são representadas com precisão, além de ter a tendência a se deteriorar com o tempo e perder a fidelidade quando copiadas. Computadores precisam de uma maneira de presentar todos os tipos de dados em um formato que possa ser processado, armazenado e copiado de forma precisa.

Um sistema digital de representação de dados pode ser a solução para esse tipo de problema. Em vez de representar informações como variações contínuas, um sistema digital utiliza uma sequência de símbolos bem definidos. Cada símbolo só pode assumir um valor dentro de um conjunto limitado e previamente conhecido, como por exemplo ligado ou desligado, verdadeiro ou falso, 0 ou 1. Isso significa que, diferente de um sistema analógico, não existem valores intermediários: cada informação precisa ser representada escolhendo um dos valores possíveis desse conjunto.

Pense em um interruptor de luz. Ele só tem duas posições possíveis: ligado ou desligado. Não existe “mais ou menos ligado”. Sempre que você olha para o interruptor, ele está claramente em um desses dois estados.

:::tip
Para entender com profundidade, como esse "ligado e desligado" se torna uma informação dentro do computador, seria necessário aprender sobre eletricidade, física, química e etc. 

Mas de maneira simples, os sinais elétricos chegam até o processador e são **interpretados** de modo que uma baixa tensão elétrica é interpretada como 0 e uma tensão mais alta, como 1. E por meio de um componente chamado transístor que armazena esse estado, se consegue representar 0 e 1 dentro do processador.

Não é exagero nenhum dizer que TUDO em um computador são 0s e 1s. Nada mais. Este site, uma música, uma imagem, tudo é representado usando 0s e 1s.
:::

Para isso dar certo um sistema de numeração é utilizado, no caso, o sistema binário. Mas antes de nos aprofundarmos nisso temos que entender o que é um número antes.
