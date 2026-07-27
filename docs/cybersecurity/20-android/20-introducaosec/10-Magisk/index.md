---
title: Magisk
---

## Introdução ao Magisk
O Magisk, ou para os mais íntimos "The Magic Mask for Android", é uma suíte open-source escrita em C++, Rust e Kotlin para ser uma solução de root *systemless* (e também customização do Android) e também uma alternativa melhor às ferramentas de root da época que foi lançado.

Antes do Magisk, as soluções de root tradicionais da época colocavam o binário `su` em `/system/xbin/`, modificando por consequência a partição `/system`. O que gera dois problemas:
1. - Isso altera o hash da partição quebrando atualizações OTAs[^1]
2. A partir do Android Marshmallow, o modelo de segurança do Google impedia a instalação do `su` em `/system`.

E por conta disso o Magisk optou por ser "*systemless*", movendo suas modificações para a partição de boot e deixando a partição `/system` intocada, preservando assim atualizações OTAs e reduzindo a superfície de detecção.

 O John Wu, autor do Magisk tem um post em seu blog sobre sua jornada e achei bem legal de ver sua trajetória, caso queira ler: [John Wu - State Of Magisk](https://topjohnwu.medium.com/state-of-magisk-2020-21de32721d65).


## Arquitetura do Magisk
Descrevendo o Magisk de forma bem geral, seriam esses seus principais componentes:
- **App Magisk (Manager)**: aplicativo Android (Kotlin) que faz o patch das imagens de boot, gerencia módulos, aprova/nega requests de root e configura a DenyList. Pode ser renomeado/ocultado (package name randomizado) para evadir detecção pelo nome de pacote padrão `com.topjohnwu.magisk`.
- **magiskinit**: binário que substitui `/init` no ramdisk e sequestra o boot.
- **magiskd**: o daemon core, roda como root no contexto SELinux `magisk`.
- **magiskboot**: ferramenta de manipulação de boot images (unpack/repack, CPIO, compressão).
- **magiskpolicy** (alias `supolicy`, por compatibilidade com o sepolicy tool do SuperSU): patcher de sepolicy.
- **Módulos**: pacotes systemless em `/data/adb/modules`.
- **Zygisk**: framework de injeção no Zygote.


[^1]: OTA vem de "Over The Air" e é o nome dado às atualizações de sistema operacional que o Android baixa e instala remotamente, sem precisar conectar o aparelho num computador ou usar um cabo. É o mecanismo padrão pelo qual o Google ou o fabricante entregam atualizações de segurança, correções de bugs e novas versões do Android para o seu aparelho.

