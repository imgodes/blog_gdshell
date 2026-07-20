---
title: Listar Dispositivos Conectados

---

# Listar Dispositivos Conectados

Antes de qualquer outra coisa, confirme que o Frida enxerga o dispositivo iOS. O comando `frida-ls-devices` lista todos os dispositivos disponíveis:

```bash
frida-ls-devices
```

Se o dispositivo com jailbreak estiver conectado e com o `frida-server` rodando, ele aparece nessa lista. Caso contrário, o problema geralmente está na conexão USB, na rede, ou no próprio `frida-server` não estar ativo no dispositivo.
