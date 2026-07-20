---
title: Dumping de Classes Objective-C
slug: /cybersecurity/iossecurity/engenhariareversa/iosrecomipsw/dumpingobjc
---

# Dumping de Classes Objective-C

Com o binário do app já localizado, o próximo passo é usar o `class-dump` embutido no `ipsw` para extrair as classes Objective-C presentes nele.

```bash
ipsw class-dump ./Payload/DVIA-v2.app/DVIA-v2 --headers -o ./class_dump
```

Esse comando extrai todos os headers de classe Objective-C do binário do app e salva no diretório de saída indicado.

Depois que o processo terminar, basta navegar até o diretório de saída e revisar os arquivos de header extraídos, que trazem as classes, métodos e propriedades do app. Essa é a mesma informação que ferramentas de hooking como o Frida e o Objection usam por trás dos panos para localizar métodos, o que faz desse dump um mapa bastante útil antes de partir para hooking dinâmico.
