---
title: Hookar Métodos em Objective-C

---

# Hookar Métodos em Objective-C

Para hookar o método `isJailbroken` da classe `JailbreakDetection` e inspecionar seus parâmetros ou valores de retorno:

```
ios hooking watch method "+[JailbreakDetection isJailbroken]" --dump-args --dump-return
```

O Objection passa a imprimir detalhes toda vez que esse método é chamado durante a execução do app, sem que seja preciso escrever um script Frida customizado para isso.
