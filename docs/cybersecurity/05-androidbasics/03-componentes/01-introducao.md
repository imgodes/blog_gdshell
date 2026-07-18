---
title: Introdução aos Componentes
---

O Android não possui uma função "main" (um ponto de partida do programa), como em outras linguagens.

- O usuário interage com a aplicação através de elementos gráficos.
- Diversas APIs são orientadas a eventos: primeiro se registra um `listener` para o evento, e posteriormente é realizado um `invoke` para esse evento.
- As aplicações Android são uma soma de diversos componentes, sendo os principais:
  - [Activities](./activities): telas com as quais o usuário interage.
  - [Services](./services): processos em segundo plano (ex: players de música, sincronizações).
  - [Broadcast Receivers](./broadcastreceivers): recebem e reagem a eventos do sistema (ex: bateria fraca).
  - [Content Providers](./contentproviders): compartilham dados com outros apps (ex: contatos, arquivos).

Componentes de aplicação são as partes que **definem a interface e as funcionalidades principais** de um app. Declarados no [AndroidManifest](./androidmanifest), podem ser utilizados de forma independente ou integrada com outros componentes.

:::note
Esse ponto é crucial de se entender para realizar pentests em Android. Alguns termos a seguir, como Activities, Services, Broadcast Receivers, Intents e Content Providers, ainda não foram explicados por completo — não se preocupe caso não entenda, vamos abordar isso nas próximas páginas.
:::
