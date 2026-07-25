---
title: Componente - sucompat
---

## sucompat

O `sucompat` é o subsistema responsável por fazer o kernel "mentir" de forma seletiva sobre a existência do `su`. A maneira mais intuitiva de prover acesso de root é por meio do comando `su`, mas o KernelSU não distribui o binário `/system/bin/su` gravado fisicamente em disco. Em vez disso, ele intercepta em kernel space as chamadas de sistema de filesystem mais usadas para checar a existência de um arquivo ou executá-lo: `faccessat`, `newfstatat` (a variante moderna de `stat`) e `execveat`/`execve`. Os handlers desses hooks estão declarados no código-fonte do projeto, no arquivo `kernel/include/ksu_hook.h`, com funções como `ksu_handle_faccessat`, `ksu_handle_stat` e `ksu_handle_execveat`.

O KernelSU reaproveita o binário `sh` (interpretador de shell), que já existe em todo Android para executar comandos de alto privilégio apenas trocando o usuário que executa o `sh` para `root` (junto com GID, *capabilities* e o domínio SELinux do processo), dispensando assim a existência do binário `su` que estamos acostumados a usar para elevar privilégios. O kernel intercepta o pedido de execução de `su` e se ele vier de uma origem autorizada, redireciona para `sh` e simultaneamente ajusta as credenciais desse processo recém-criado para rodar como root. O `sh` não está modificado, ele apenas herda um contexto de execução privilegiado que o kernel concedeu no momento que o processo foi criado.

Os próprios logs de kernel do projeto documentam essa substituição com mensagens como "`newfstatat su->sh!`" e "`faccessat su->sh!`". O resultado é que, para um app autorizado, `su` parece existir e funcionar normalmente. Para qualquer app que não esteja na allowlist, a mesma chamada retorna "arquivo não encontrado", como se `/system/bin/su` simplesmente não existisse no sistema, porque de fato ele não existe como arquivo real em nenhum momento.

### Fonte
> https://github.com/tiann/KernelSU/blob/main/kernel/sucompat.c
> https://github.com/tiann/KernelSU/blob/main/kernel/include/ksu_hook.h

