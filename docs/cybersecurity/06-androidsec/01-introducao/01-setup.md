---
title: Setup para pentest
---

A primeira decisão que precisamos tomar é se vamos usar um dispositivo físico ou um emulador. O dispositivo físico ele é preferível para mim por conta de alocação de recursos na máquina, mas se você tem um bom computador e quer seguir com o emulado não estará perdendo muita coisa.

O dispositivo físico traz algumas facilidades durante o pentest, pois algumas aplicações possuem proteções que verificam detalhes do hardware do Android onde a aplicação está sendo executada. Entretanto, como veremos mais adiante, essas verificações podem ser "enganadas" e contornadas para conseguirmos usar a aplicação em um dispositivo emulado mesmo assim.

Você passará grande parte do seu tempo nessa atividade de tentar contornar as proteções das aplicações. E para isso é necessário possuir um Android *rootado*, pois o sistema aplica um modelo de sandbox onde cada aplicativo roda isolado sob seu próprio UID, com acesso restrito ao seu diretório em `/data/data`. Sem privilégios de root você não consegue ler os dados de outro app, remontar `/system` como gravável para instalar um certificado customizado, ou dar ao programas de pentest os privilégios que eles precisam para injetar código em processos que não são o seu. Rootear o dispositivo remove essas barreiras e devolve o controle total sobre o sistema de arquivos e sobre a execução de outros processos, que é exatamente o que você precisa para investigar a fundo o comportamento de uma aplicação.

Existem várias formas de *rootar* um Android, aqui eu vou destacar as ferramentas Magisk para ambientes emulados e KernelSU para android físico.
