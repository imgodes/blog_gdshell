---
title: Alterar um Método em Runtime

---

# Alterar um Método em Runtime

O Objection também permite modificar a implementação de um método em tempo real. Para alterar o valor de retorno de um método, por exemplo:

```
ios hooking set return_value "+[JailbreakDetection isJailbroken]" false
```

Esse comando muda o comportamento do método diretamente em runtime, forçando o retorno para o valor desejado, sem tocar no binário original em disco.
