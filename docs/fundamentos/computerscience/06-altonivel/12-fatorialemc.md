---
title: Calculando um Fatorial em C
---

# Calculando um Fatorial em C

Para fechar o capítulo, vamos revisitar o algoritmo de fatorial, dessa vez implementado em C. Já fizemos isso em assembly ARM, então ver a mesma lógica em C serve como uma boa comparação entre as duas abordagens.

```c
// Calcula o fatorial de n
int factorial(int n)
{
    int result = n;

    while(--n > 0)
    {
        result = result * n;
    }

    return result;
}
```

Observe que a condição do loop usa `--n`, que decrementa `n` antes de compará-lo com zero. O resultado compilado para ARM é bastante similar ao assembly que escrevemos manualmente no capítulo anterior, o que demonstra que o compilador faz o trabalho pesado de traduzir o código de alto nível para instruções de máquina.

O ponto importante aqui é que o mesmo código C pode ser compilado para ARM, para x86 ou para qualquer outra arquitetura que tenha um compilador disponível. O assembly gerado será diferente para cada arquitetura, mas o código fonte em C permanece o mesmo. É essa portabilidade que torna as linguagens de alto nível tão vantajosas em relação ao assembly.

Vale destacar ainda que, se você tiver um programa compilado em seu computador, mesmo sem acesso ao código fonte original, é possível examinar seu código na forma de assembly usando um disassembler. Isso é uma implicação direta do fato de que todo software, em última instância, é código de máquina.
