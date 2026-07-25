---
title: Componente - KernelSU Manager
---
## KernelSU Manager

Só o app KernelSU Manager, ou um app que consiga se passar por ele, pode conceder ou revogar entradas da allowlist. Para isso, o kernel precisa ter certeza de que quem está pedindo `CMD_BECOME_MANAGER` pela interface `prctl` é de fato o manager legítimo, e não um app malicioso tentando se autopromover. A validação feita pelo kernel, implementada em `kernel/apk_sign.c`, verifica o caminho de instalação do app (precisa estar em `/data/data` ou `/data/user/<id>`), a posse da pasta de dados correspondente, e, mais importante, a assinatura digital do pacote APK v2, comparando-a contra o certificado oficial do projeto. O identificador do bloco de assinatura verificado é `0x7109871a`, conforme documentado no aviso de segurança oficial do projeto.

Essa validação já teve uma falha séria. A CVE-2023-49794, descoberta pela equipe da Zimperium, era um bypass de autenticação por spoofing, onde bastava instalar um APK malicioso com o mesmo nome de pacote do manager oficial para escalar privilégios de root, explorando a forma como a syscall `prctl` com o valor mágico `0xDEADBEEF` processava o comando `CMD_BECOME_MANAGER`, pré-abrindo a APK legítima num descritor de arquivo baixo para enganar a checagem de assinatura. A correção chegou na versão 0.7.2. Para qualquer setup de pentest, nunca use uma build antiga do KernelSU ou de um app manager de origem desconhecida, porque isso reabre uma superfície de escalação de privilégio conhecida no próprio device de teste.

### Fontes:
> https://github.com/advisories/GHSA-86cp-3prf-pwqq
> https://security.snyk.io/vuln/SNYK-ANDROID-METIANNKERNELSU-6135282
