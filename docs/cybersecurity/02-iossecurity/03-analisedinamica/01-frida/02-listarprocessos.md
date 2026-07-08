---
title: Listar Processos em Execução
---

# Listar Processos em Execução

Para listar todos os processos rodando no dispositivo iOS, use o comando `frida-ps`:

```bash
frida-ps -U
```

A flag `-U` diz ao Frida para se conectar ao dispositivo via USB. O comando lista todos os processos em execução, incluindo processos do sistema e apps abertos, o que serve para localizar o processo exato do app que será o alvo do pentest antes de anexar o Frida a ele.
