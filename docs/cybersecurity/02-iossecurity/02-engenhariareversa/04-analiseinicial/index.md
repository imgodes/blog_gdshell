---
title: Análise Inicial de Arquivos
---

# Análise Inicial de Arquivos

Com os fundamentos de engenharia reversa do capítulo anterior, entra a primeira aplicação prática deles, a análise inicial do pacote do app. Ela consiste em examinar o `.ipa` e seus arquivos sem executar o app, e boa parte dos indícios mais úteis de um pentest aparece já nessa fase, antes mesmo de partir para um desmontador ou para hooking dinâmico.

Os próximos tópicos cobrem como descompactar e navegar por um `.ipa`, quais arquivos merecem prioridade nessa análise, um mergulho no `Info.plist` especificamente, como localizar o diretório de um app já instalado no dispositivo, e a estrutura de diretórios criada pelo sandbox.

:::danger[App utilizado nos exemplos]

De agora em diante, alguns do exemplos, precisam ser práticos, por isso vou citar o DVIA-v2 (um app propositalmente codado para ser vulnerável) em alguns casos. Mais adiante pretendo fazer uma série de postagens envolvendo ele e como achar cada uma de suas vulnerabilidades. Baixe o app em https://github.com/prateek147/DVIA-v2

:::