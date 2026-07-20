---
title: Localizando o Bundle de Apps

---

# Localizando o Bundle de Apps Instalados

Além de analisar o `.ipa` antes da instalação, também é útil localizar o bundle de um app que já está instalado no dispositivo, especialmente em um device com jailbreak, onde esse diretório fica acessível.

Para encontrar o diretório de bundle de todos os apps instalados pelo usuário:

```bash
find /private/var/containers/Bundle/Application/ -name "*.app"
```

Com o caminho em mãos, dá para copiar arquivos diretamente do dispositivo para o computador via SSH, o que é útil para levar artefatos específicos para análise local.

Vale lembrar que esse diretório de bundle é diferente do diretório de dados do app, visto no capítulo de estrutura de aplicação. O bundle em `Bundle/Application/` contém o pacote instalado em si, enquanto os dados gerados pelo uso do app, como preferências, caches e arquivos do usuário, ficam em `Data/Application/`, cada um dentro do seu próprio container isolado.

Existem formas mais convenientes de localizar e navegar por esses diretórios usando o Objection, que serão vistas mais adiante no capítulo de análise dinâmica.
