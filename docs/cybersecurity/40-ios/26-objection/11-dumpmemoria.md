---
title: Dump de Memória e Busca por Segredos
slug: /cybersecurity/iossecurity/analisedinamica/objection/dumpmemoria
---

# Dump de Memória e Busca por Segredos

Para conduzir uma busca completa por segredos hardcoded, como API keys, senhas ou outros dados sensíveis, dá para fazer um dump da memória do app e procurar strings específicas dentro dela. Essa técnica é útil para identificar informação sensível armazenada de forma insegura ou deixada hardcoded no código.

## Extraindo as regiões de memória

Para gerar um dump de todas as regiões de memória acessíveis do app:

```
memory dump all ./process_memory.dmp
```

Isso cria um arquivo com todas as regiões de memória acessíveis do processo do app.

## Buscando strings específicas

Depois do dump, use o comando `strings` combinado com `grep` para procurar palavras-chave, como "password", "token" ou "key":

```bash
!strings ./process_memory.dmp | grep -i "password"
```

Isso busca no dump de memória qualquer ocorrência da palavra password. Basta trocar o termo pela palavra-chave desejada, como `api_key` ou `secret`, para direcionar a busca a outros tipos de segredo.
