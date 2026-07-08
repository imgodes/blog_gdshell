---
title: Análise Estática
---

# Análise Estática

A análise estática consiste em examinar o pacote do app sem executá-lo, e boa parte dos indícios mais úteis de um pentest aparece já nessa fase, antes mesmo de tocar em engenharia reversa do binário.

Os próximos tópicos cobrem como descompactar e navegar por um `.ipa`, quais arquivos merecem prioridade nessa análise, um mergulho no `Info.plist` especificamente, e como localizar o diretório de um app já instalado no dispositivo.

:::danger[App utilizado nos exemplos]

De agora em diante, alguns do exemplos, precisam ser práticos, por isso vou citar o DVIA-v2 (um app propositalmente codado para ser vulnerável) em alguns casos. Mais adiante pretendo fazer uma série de postagens envolvendo ele e como achar cada uma de suas vulnerabilidades. Baixe o app em https://github.com/prateek147/DVIA-v2

:::