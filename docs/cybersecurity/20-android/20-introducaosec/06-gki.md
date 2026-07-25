---
title: Generic Kernel Image
---

Até 2019, cada fabricante de Android compilava seu próprio kernel, misturando num único binário o código genérico do Linux com drivers específicos de SoC, câmera, modem e outros componentes de hardware. Isso criava uma fragmentação enorme: cada atualização de segurança do kernel precisava ser reportada e reconstruída por cada fabricante, para cada modelo de aparelho, o que na prática significava que a maioria dos devices Android nunca recebia patches de kernel depois do lançamento.

O Generic Kernel Image, ou GKI, é a resposta do Google a esse problema. A documentação oficial descreve o projeto como uma forma de unificar o núcleo do kernel e mover o suporte específico de SoC e placa para módulos de fornecedor carregáveis separadamente, expondo uma interface estável (a KMI, Kernel Module Interface) entre esse núcleo genérico e os módulos de hardware, de forma que kernel e módulos possam ser atualizados de forma independente. Na prática, isso significa que existe agora um binário de kernel comum, compilado pelo próprio Google a partir da árvore ACK (Android Common Kernel), que todos os fabricantes com Android 12 ou kernel 5.10+ devem usar como base, adicionando apenas seus drivers como módulos separados.

Para quem faz pentest mobile, o GKI importa por um motivo prático: ele define quais modos de instalação de KernelSU são possíveis. Em devices GKI, o KernelSU pode ser carregado como módulo dinâmico sem substituir o kernel original (modo LKM), o que é reversível e sobrevive melhor a atualizações OTA parciais. Em devices sem GKI, ou quando o LKM não é suportado pelo fabricante, é necessário substituir o kernel inteiro pela imagem fornecida pelo próprio projeto KernelSU (modo GKI, um nome um tanto confuso porque reaproveita o termo). Saber se o device-alvo roda um kernel GKI padrão ou um kernel BSP customizado pelo fabricante é literalmente o primeiro passo técnico antes de decidir como *rootar* o aparelho de teste.

> ## Fonte:
> https://source.android.com/docs/core/architecture/kernel/generic-kernel-image
> https://source.android.com/docs/core/architecture/kernel
