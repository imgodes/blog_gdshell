---
title: Frameworks de Terceiros
slug: /cybersecurity/iosbasics/appstructure/frameworks
---

# Frameworks de Terceiros

O diretório `Frameworks/` dentro do `.app` bundle concentra todas as dependências dinâmicas empacotadas pelo desenvolvedor. Durante um pentest, esse inventário é relevante por dois motivos, dependências desatualizadas podem carregar CVEs conhecidas, e cada SDK presente expande a superfície de ataque com seus próprios endpoints, seu próprio armazenamento local e seu próprio comportamento de rede.

## Como usar esse inventário na análise

Durante um pentest, o inventário de frameworks funciona como um checklist. Para cada framework de terceiro encontrado, vale verificar a versão embarcada, geralmente disponível no `Info.plist` interno do próprio framework, consultar bancos de CVE ou os advisories do fornecedor para aquela versão específica, checar se o framework acessa rede, armazenamento local ou dados sensíveis, e, em testes com Frida, tratar os símbolos exportados pelo framework como alvos de hooking tão válidos quanto os do binário principal do app.

Para listar os símbolos exportados de um framework:

```bash
nm -gU Frameworks/Realm.framework/Realm | head -40
```

## Referências

- OWASP. Mobile Application Security Verification Standard (MASVS). Disponível em: https://mas.owasp.org/MASVS/
