---
title: Comentários
---

# Comentários

Um jeito engraçado de começar a entender linguagens de programação é apresentando um recurso que não instrui a CPU a fazer absolutamente nada. Comentários no código fonte são feitos com o fim de serem lidos por outros desenvolvedores, geralmente documentando ou descrevendo o funcionamento de um trecho do código, e normalmente esses comentários são ignorados pelo compilador, logo não possuem nenhum efeito durante a execução do programa.

Veja alguns exemplos de comentários em C abaixo. Em C, para comentar múltiplas linhas basta inserir `/*` na linha em que deseja iniciar o comentário e `*/` na linha que o finaliza, tudo que estiver entre esses dois elementos será desconsiderado pelo compilador. Já para comentar apenas uma linha, basta usar `//`, e tudo entre esses dois caracteres até o final da linha será considerado um comentário e, por consequência, também não será compilado.

```c
// Este é um comentário de uma linha, originalmente introduzido em C++

/* <- esses dois símbolos marcam o início de um comentário de múltiplas linhas

	Este é um comentário em C
	Esse tipo de comentário pode abranger várias linhas

estes dois símbolos abaixo finalizam um comentário de múltiplas linhas
*/
```

Python utiliza o caractere cerquilha `#`, popularmente conhecido como *hash* ou *hashtag*, para comentário de uma linha, e aspas triplas `"""` para comentários de múltiplas linhas.

```python
# Este é um comentário de uma linha

"""
Este é um comentário de múltiplas linhas
"""
```

Na verdade, Python não tem um jeito formal de comentar múltiplas linhas, a forma mais correta de fazer isso é usar `#` em cada linha que quiser comentar. As aspas triplas `"""` na verdade criam uma *string* literal que o Python ignora, pois não está sendo atribuída a nenhuma variável. Mas o importante é que agora você sabe que pode usar aspas triplas, apesar de não ser recomendado.
