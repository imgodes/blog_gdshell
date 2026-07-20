---
title: Explorar Métodos de uma Classe
slug: /cybersecurity/iossecurity/analisedinamica/objection/explorarmetodos
---

# Explorar Métodos de uma Classe

Depois de localizar a classe de interesse, o próximo passo é listar seus métodos. Para listar todos os métodos da classe `JailbreakDetection`:

```
ios hooking list class_methods JailbreakDetection
```

Esse comando retorna os métodos disponíveis naquela classe, o que ajuda a decidir qual deles vale a pena hookar ou patchear em seguida.
