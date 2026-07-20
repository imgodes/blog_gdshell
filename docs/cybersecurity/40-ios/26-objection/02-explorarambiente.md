---
title: Explorar o Ambiente do App

---

# Explorar o Ambiente do App

Dentro do console interativo do Objection, dá para começar explorando o ambiente e o comportamento em runtime do app.

Para obter as variáveis de ambiente atuais do processo:

```
env
```

Isso lista todas as variáveis de ambiente configuradas para o processo do app, o que ajuda a entender como ele interage com o próprio ambiente de execução.

Para listar os bundles carregados pelo app:

```
ios bundles list_bundles
```

Esse comando mostra todos os bundles presentes dentro do app, dando uma visão da estrutura e configuração interna dele.

Para listar os frameworks usados pelo app:

```
ios bundles list_frameworks
```

Isso revela todos os frameworks carregados pelo app, útil para analisar dependências externas e bibliotecas de terceiros integradas a ele.
