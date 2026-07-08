---
title: Anexar o Frida a um App
---

# Anexar o Frida a um App

Com o processo alvo identificado, o próximo passo é anexar o Frida a ele. Para se conectar ao processo do DVIA-v2:

```bash
frida -U -n DVIA-v2
```

Esse comando anexa o Frida ao processo do app em execução, abrindo um console interativo onde scripts podem ser injetados diretamente, ou usados como base para os comandos de descoberta e tracing vistos a seguir.
