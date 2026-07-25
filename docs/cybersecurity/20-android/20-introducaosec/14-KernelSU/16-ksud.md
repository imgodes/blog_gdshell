---
title: Componente - ksud
---
## O daemon ksud

Enquanto os hooks de syscall e a allowlist estão no contexto do espaço de kernel, gerenciar módulos instalados, aplicar políticas adicionais de SELinux, rodar scripts de inicialização dos módulos rodam em espaço de usuário. Todo esse trabalho é feito por um daemon userspace escrito em Rust chamado `ksud`, que fica em `/data/adb/ksud`. Ele expõe subcomandos internos para módulo, para os estágios de boot (`post-fs-data`, `services`, `boot-completed`), instalação e administração de política SELinux.

Em sua inicialização o KernelSU não edita o arquivo `init.rc` do sistema em disco como seria normalmente. Em vez disso, quando o processo `init` do Android lê `/system/etc/init/hw/init.rc` durante o boot, o kernel intercepta essa leitura e injeta transparentemente o conteúdo customizado do KernelSU no final do arquivo lido, sem que o arquivo real em disco seja alterado. É esse conteúdo injetado que dispara a inicialização do `ksud`.

### Fonte
> https://kernelsu.org/guide/module.html