---
title: Análise Dinâmica
---

# Análise Dinâmica

Depois de esgotar o que dá para descobrir com análise estática, o próximo passo é observar o app rodando de verdade no dispositivo. É aqui que entram as ferramentas de instrumentação dinâmica, capazes de inspecionar e alterar o comportamento do app em tempo real, sem precisar recompilar nada.

As duas ferramentas cobertas neste capítulo são o Frida e o Objection. O Frida é o motor de instrumentação em si, permitindo injetar scripts JavaScript que se anexam a métodos do app e interceptam sua execução. O Objection é construído sobre o Frida e empacota as tarefas mais comuns de pentest mobile em comandos prontos, sem exigir que se escreva um script para cada ação.

Todos os exemplos a seguir usam o DVIA-v2, o Damn Vulnerable iOS App v2, como app alvo, rodando em um dispositivo com jailbreak.

- [Com Frida](/docs/cybersecurity/iossecurity/analisedinamica/frida/)
- [Com Objection](/docs/cybersecurity/iossecurity/analisedinamica/objection)

:::warn
De agora em diante, alguns do exemplos, precisam ser práticos, por isso vou citar o DVIA-v2 (um app propositalmente codado para ser vulnerável) em alguns casos. Mais adiante pretendo fazer uma série de postagens envolvendo ele e como achar cada uma de suas vulnerabilidades. Baixe o app em https://github.com/prateek147/DVIA-v2
:::