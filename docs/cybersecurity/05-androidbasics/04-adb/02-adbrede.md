---
title: Acessando o ADB Shell pela Rede
---

Inicie o ADB com uma porta aberta no host:

```bash
adb -a nodaemon server
adb -H <host IP> -P 5037 shell
```
