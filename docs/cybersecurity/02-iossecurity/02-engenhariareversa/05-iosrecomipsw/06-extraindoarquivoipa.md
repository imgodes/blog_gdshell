---
title: Extraindo o Arquivo IPA
---

# Extraindo o Arquivo IPA

Vamos seguir usando o DVIA-v2 como exemplo. O primeiro passo é extrair o conteúdo do IPA:

```bash
unzip ./DVIA-v2.ipa
```

Isso extrai o conteúdo do IPA para o diretório atual. Entre os arquivos extraídos está a pasta `Payload`, que contém o diretório `.app` do aplicativo.

O binário da aplicação fica dentro de `Payload/DVIA-v2.app/`, geralmente com o mesmo nome do app, mas sem a extensão `.app`. O caminho completo até ele fica assim:

```
Payload/DVIA-v2.app/DVIA-v2
```

Com a ferramenta instalada e o binário em mãos, dá para seguir para os principais usos práticos do `ipsw`.
