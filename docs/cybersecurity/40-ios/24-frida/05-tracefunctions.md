---
title: Rastreando Chamadas de Função
slug: /cybersecurity/iossecurity/analisedinamica/frida/tracefunctions
---

# Rastreando Chamadas de Função

O `frida-trace` é uma ferramenta do Frida que rastreia automaticamente chamadas de função, permitindo observar como um app interage com bibliotecas do sistema ou com seus próprios métodos internos.

Para rastrear todas as classes e métodos que contenham um termo específico, sem diferenciar maiúsculas de minúsculas:

```bash
frida-trace -U -n DVIA-v2 -i "*jailbreak*/i"
frida-trace -U DVIA-v2 -m "*[Jailbreak* *]"
```

Esses comandos rastreiam todas as classes e métodos que contenham o termo jailbreak, imprimindo as informações do trace em tempo real conforme o app executa.
