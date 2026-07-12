---
title: Análise do IPA
---

# Análise do IPA

Descompactar o `.ipa` é o ponto de partida de qualquer pentest estático em um app iOS. O arquivo nada mais é do que um ZIP comum, logo basta extraí-lo:

```bash
unzip MeuApp.ipa -d MeuApp-Unziped
```

Depois da extração, os artefatos mais importantes para análise ficam dentro de `Payload/MeuApp.app/`. Uma ordem de leitura que funciona bem é começar pelo `Info.plist`, já que ele entrega metadados de segurança sem exigir qualquer engenharia reversa, seguir mapeando as dependências presentes em `Frameworks/`, e só então direcionar o esforço de análise para o binário Mach-O propriamente dito.

Essa sequência aparece detalhada nos próximos tópicos deste capítulo, que aprofundam cada uma dessas etapas.
