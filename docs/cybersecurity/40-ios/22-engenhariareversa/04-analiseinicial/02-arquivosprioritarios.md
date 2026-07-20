---
title: Arquivos prioritários para pentest
slug: /cybersecurity/iossecurity/engenhariareversa/analiseinicial/arquivosprioritarios
---

# Arquivos prioritários para pentest

Depois de descompactar o `.ipa`, nem todo arquivo dentro do App Bundle merece o mesmo tempo de análise. Alguns concentram informação de segurança relevante logo de cara, enquanto outros só interessam em fases mais avançadas. Esta é a lista que costumo seguir como checklist inicial.

- `Info.plist`: revela ATS, URL schemes, permissões declaradas e configurações de inicialização. É o primeiro arquivo a abrir.
- `embedded.mobileprovision`: contém os entitlements reais do app e a lista de dispositivos autorizados a rodá-lo.
- `_CodeSignature/CodeResources`: é o manifesto de assinatura do bundle, útil para verificar a integridade dos arquivos e detectar modificações feitas depois da assinatura.
- `*.momd`: expõe o schema do banco Core Data sem que seja preciso rodar o app.
- `*.der`: indica pinning de certificado por arquivo embutido, quando presente no bundle.
- `Frameworks/`: concentra os SDKs de terceiros, com possíveis CVEs conhecidas e comportamento de rede próprio de cada dependência.

