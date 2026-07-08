---
title: Criando um Script de Objection
---

# Criando um Script de Objection

Scripts de Objection são escritos em texto simples e usam os mesmos comandos disponíveis no console interativo, o que permite encadear várias ações e repeti-las sem digitar tudo de novo a cada sessão.

Um script de exemplo, salvo como `disable_security.objection`, poderia reunir os bypasses mais comuns vistos neste capítulo:

```
ios jailbreak disable
ios sslpinning disable
ios ui biometric_bypass
```

Para rodar esse script contra o app alvo:

```bash
objection -g DVIA-v2 explore --script disable_security.objection
```

Isso aplica os três bypasses de uma vez só, assim que o Objection se anexa ao processo, economizando o trabalho de digitar cada comando manualmente toda vez que uma nova sessão de teste começa.
