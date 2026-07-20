---
title: App Sandbox e Entitlements
slug: /cybersecurity/iosbasics/software/sandbox
---

# App Sandbox e Entitlements

O App Sandbox é um mecanismo oficial da Apple e parte do modelo de segurança do iOS. Ele garante que cada aplicação rode em um ambiente isolado, com acesso restrito a recursos do sistema e a dados de outros apps. Essa garantia vem da integração entre três componentes, o kernel XNU, que impõe o isolamento em nível de sistema, os perfis de sandbox conhecidos como Seatbelt, que definem regras específicas de acesso para cada aplicação, e o code signing com entitlements, que determina explicitamente quais recursos e capacidades o app está autorizado a usar.

## App Container

Cada aplicação roda dentro de um container isolado, o que impede o acesso direto a dados de outros aplicativos, restringe a interação com o sistema de arquivos global e bloqueia a comunicação direta com processos de outros apps. Na prática, isso garante um forte isolamento entre aplicações no mesmo sistema.

Cada app recebe um diretório próprio dentro do dispositivo:

```bash
$ ls -l /var/mobile/Containers/Data/Application/<UUID>/
Documents/
Library/
tmp/
```

Cada pasta dentro de `/var/mobile/Containers/Data/Application/` representa um desses containers isolados, um por aplicação instalada.

## Entitlements

Aplicações no iOS não acessam recursos livremente. Para usar funcionalidades sensíveis, é preciso obter permissões explícitas, e esse controle é feito através de dois mecanismos combinados, os Entitlements, definidos durante o processo de assinatura do app, e o sistema TCC, sigla para Transparency, Consent and Control, responsável por gerenciar o consentimento do usuário em tempo de execução. Ambos são mecanismos oficiais da Apple e fundamentais para o controle de acesso a recursos no sistema.

Alguns exemplos de recursos controlados por esse modelo são câmera, microfone, localização, contatos, fotos e bluetooth.

## Por que isso importa para pentest

Durante uma análise de app, os entitlements declarados no `embedded.mobileprovision` são um dos primeiros lugares a checar, já que revelam exatamente quais capacidades o app está autorizado a usar, como acesso ao Keychain compartilhado, push notifications ou iCloud. Discrepâncias entre os entitlements declarados e o comportamento observado do app costumam indicar configurações mal gerenciadas, ou até capacidades concedidas além do que o app realmente precisa.

## Referências

- Apple Developer Documentation. App Sandbox. Disponível em: https://developer.apple.com/documentation/security/app-sandbox
