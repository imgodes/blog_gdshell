---
title: Módulo - Zygisk
---

## Módulo Zygisk

Como já vimos anteriormente o KernelSU opera em nível de kernel. Gerenciando acesso root, carregando módulos, escondendo modificações do sistema. Mas quando falamos dos processos Android, ele não interfere diretamente.

Como já vimos anteriormente o Zygote é o processo pai de todos os apps Android. Todo app nasce como um fork do Zygote, então quem controla o Zygote consegue injetar código em qualquer app no momento que ele nasce. E o Frida é um programa que deseja justamente manipular o processo de execução de um app, logo ter um controle sob o Zygote seria muito útil nesse caso.

O problema é que o Frida opera fora do processo do app, o que o torna muito detectável por aplicações que possuem defesas como RASP. E por conta disso existe o módulo do Zygisk que injeta código diretamente no processo do app via Zygote, antes mesmo do app inicializar suas camadas de defesas, tornando mais difícil de detectar.

No caso do KernelSU, o módulo que testei foi o [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext) e funcionou perfeitamente.

### Fontes
> https://github.com/Dr-TSNG/ZygiskNext
> https://github.com/PerformanC/ReZygisk
> https://github.com/JingMatrix/NeoZygisk