---
title: Com Frida
---

# Com Frida

O Frida é um framework de instrumentação dinâmica que permite injetar scripts JavaScript dentro do processo de um app em execução. É a ferramenta que sustenta praticamente todo hooking feito durante um pentest iOS, seja através de comandos prontos do próprio Frida, seja escrevendo scripts customizados para casos mais específicos.

Os tópicos a seguir cobrem desde o básico de conectar ao dispositivo e localizar o processo alvo, até a escrita de scripts próprios para hookar métodos em Objective-C e em Swift.

:::danger[App utilizado nos exemplos]

De agora em diante, alguns do exemplos, precisam ser práticos, por isso vou citar o DVIA-v2 (um app propositalmente codado para ser vulnerável) em alguns casos. Mais adiante pretendo fazer uma série de postagens envolvendo ele e como achar cada uma de suas vulnerabilidades. Baixe o app em https://github.com/prateek147/DVIA-v2

:::