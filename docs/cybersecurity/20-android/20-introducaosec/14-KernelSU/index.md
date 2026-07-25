---
title: KernelSU
---
O KernelSU é uma ==[azul]solução root== para dispositivos [GKI](/docs/cybersecurity/android/introducaosec/gki), funciona no modo kernel e concede privilégios root para apps do espaço do usuário diretamente no espaço do kernel.

A principal característica do KernelSU é que ele é, como o próprio nome diz, baseado em kernel. Por exemplo, é possível adicionar pontos de interrupção de hardware a qualquer processo no modo kernel, acessar a memória física de qualquer processo de forma invisível, interceptar qualquer chamada de sistema (*syscall*) no espaço do kernel, entre outras funcionalidades.

Além disso, o KernelSU fornece um sistema *metamodule*, que é uma arquitetura plugável para gerenciamento de módulos. Diferente das soluções root tradicionais que integram a lógica de montagem em seu núcleo, o KernelSU delega isso aos *metamodules*. Isso permite que você instale *metamodules* como *meta-overlayfs* para fornecer modificações systemless na partição `/system` e outras partições.

:::info Metamodules e meta-overlayfs
Esses nomes estranhos serão explicados em breve, não se preocupe
:::

Mas você viu que o [Magisk](/docs/cybersecurity/android/introducaosec/Magisk/) também concede acesso de root ao dispositivo anteriormente, então quais seriam as diferenças entre eles? Bem, o KernelSU atua em um nível mais baixo do que o Magisk, pois em vez de modificar arquivos e propriedades que o app pode ler, ==[azul]ele modifica o que o kernel responde quando o app pergunta==. Se quiser saber mais, a própria documentação do KernelSU disponibiliza uma lista de semelhanças e diferenças entre eles: https://kernelsu.org/pt_BR/guide/difference-with-magisk.html

A abordagem clássica, usada por soluções como Magisk, atua inteiramente em userspace, realizando o patch da imagem de boot para injetar um daemon que, na inicialização, monta sobre o sistema de arquivos original uma camada modificada (via magic mount, uma técnica de bind mount recursivo), e distribui um binário `su` real que quando executado se comunica com esse daemon para conceder privilégios ao processo chamador. A vantagem dessa abordagem é não exigir recompilar nada do kernel, e a desvantagem é que ela deixa rastros de userspace, como o próprio arquivo `su`, propriedades de sistema alteradas e mounts visíveis, que um app pode checar diretamente.

A abordagem do KernelSU muda a camada de operação, pois em vez de um daemon userspace decidir se concede root, o próprio código do kernel intercepta as chamadas de sistema relevantes e decide ali, antes mesmo delas chegarem ao sistema de arquivos real. A Wikipedia resume bem essa diferença ao descrever que, diferente do Magisk, o `/system/bin/su` do KernelSU é um arquivo virtual implementado por meio de hooks de chamadas de sistema usando [kprobe](/docs/cybersecurity/android/introducaosec/KernelSU/kprobe), e que [OverlayFS](/docs/cybersecurity/android/introducaosec/KernelSU/overlayfs) é usado para modificações systemless da partição de sistema em vez de magic mount. Isso faz com que não exista um binário `su` gravado em disco para ser encontrado por uma varredura de arquivos por exemplo. E também as modificações de sistema feitas por módulos são aplicadas por um mecanismo de sistema de arquivos padrão do kernel Linux, não por uma técnica proprietária de bind mount.

O KernelSU se aproveita de alguns componentes do Kernel do Android para sustentar a sua tarefa de conceder acesso de root via chamadas de sistema de baixo nível. Em outro momentos, são ferramentas próprias do KernelSU que atuam. Aqui vou descrever as principais delas de forma a te dar autonomia para decidir como você vai construir seu ambiente para pentest.

### Fontes: 
> https://en.wikipedia.org/wiki/Kernel_Assisted_Superuser
> https://kernelsu.org/guide/what-is-kernelsu.html
> https://kernelsu.org/guide/difference-with-magisk.html
