---
title: Zygote
---

O Zygote é o processo responsável por iniciar todos os outros processos de apps no Android. Ele é criado pelo `init` durante o boot do sistema e permanece ativo enquanto o dispositivo está ligado, servindo como base para a criação rápida de novos processos.

## Por que o Zygote existe

Inicializar uma VM (Dalvik ou ART) do zero, carregando classes core do framework Android, é um processo lento. O Zygote resolve isso subindo uma única vez com a VM pronta e as bibliotecas essenciais já carregadas em memória. A partir daí, novos processos são criados por `fork()`, herdando esse estado inicial via copy-on-write do Linux, sem precisar repetir a inicialização.

- O primeiro processo criado a partir do Zygote é o `system_server`, que hospeda serviços centrais como ActivityManager, PackageManager e WindowManager.
- Em dispositivos com suporte a 32 e 64 bits, existem dois zygotes rodando em paralelo: `zygote` e `zygote64`.
- Toda vez que um app é aberto, o `ActivityManagerService` solicita ao Zygote que faça o fork, e o novo processo carrega o código específico daquele app.

## Relevância para pentest e engenharia reversa

O Zygote aparece com frequência em contextos de instrumentação e modificação de sistema porque ele é o ponto mais cedo possível de interceptar um app antes que qualquer proteção própria seja carregada.

- **Frida**: no modo `spawn`, o Frida injeta seu agente logo após o fork do Zygote, antes do código do app rodar. Isso permite hookar funções de segurança, checks de root ou SSL pinning antes que sejam executadas.
- **Magisk**: usa o Zygote como ponto de injeção do módulo `zygisk`, que permite carregar código nativo dentro do processo de cada app assim que ele nasce, sem modificar o APK. É assim que módulos de ocultação de root, como o Shamiko, conseguem interceptar checagens de integridade antes do app perceber qualquer coisa fora do padrão.
- Ferramentas de detecção de instrumentação, por outro lado, monitoram justamente sinais de manipulação no Zygote ou nos processos filhos, como bibliotecas injetadas ou threads extras, para identificar Frida ou Xposed rodando.

Entender o papel do Zygote ajuda a explicar por que tanta ferramenta de análise dinâmica e bypass de proteção mira exatamente nesse momento do ciclo de vida do processo, o instante entre o fork e o carregamento do código do app.