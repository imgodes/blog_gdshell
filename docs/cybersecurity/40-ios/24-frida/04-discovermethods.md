---
title: Descobrindo Métodos Dinamicamente
slug: /cybersecurity/iossecurity/analisedinamica/frida/discovermethods
---

# Descobrindo Métodos Dinamicamente

O `frida-discover` é uma ferramenta do próprio Frida capaz de descobrir métodos dinamicamente, tanto em Objective-C quanto em Swift, dentro de uma aplicação em execução. Ele automatiza o processo de descoberta, permitindo explorar as funções internas do app sem conhecimento prévio de nomes de classes ou assinaturas de método.

Por exemplo, para descobrir todas as classes e métodos chamados, e quantas vezes cada um foi chamado:

```bash
frida-discover -U -n DVIA-v2
```

Isso lista todas as classes e métodos chamados durante o uso do app, o que facilita bastante encontrar o alvo certo para hookar ou tracear em seguida.
