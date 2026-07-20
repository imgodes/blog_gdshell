---
title: Arquivo Info.plist

---

# Arquivo Info.plist

O `Info.plist` é o primeiro arquivo que um analista deve abrir ao receber um `.ipa`. Ele concentra metadados declarativos do app, lidos pelo iOS antes mesmo de executar o binário.

## Identificação do app

A chave `CFBundleIdentifier` contém o Bundle ID, o identificador único do app dentro do ecossistema Apple. Ele é usado como referência em comunicação entre processos, em perfis de provisionamento e no Keychain.

A chave `CFBundleExecutable` informa o nome exato do binário Mach-O dentro do bundle, que é o alvo tanto da análise estática quanto do hooking dinâmico feito mais à frente.

## App Transport Security

A seção `NSAppTransportSecurity` controla as políticas de TLS do app. A chave `NSAllowsArbitraryLoads` com valor `true` desativa completamente o ATS, permitindo conexões HTTP não cifradas para qualquer host. O DVIA-v2 usa exatamente essa configuração, já que foi construído para demonstrar vulnerabilidades de propósito, mas esse mesmo padrão aparece com frequência em apps de produção também.

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```

Além de checar `NSAllowsArbitraryLoads`, vale olhar exceções por domínio dentro de `NSExceptionDomains`, que podem revelar endpoints de backend rodando com TLS degradado mesmo quando o ATS está nominalmente ativo.

## URL Schemes

A chave `CFBundleURLTypes` lista os URL schemes registrados pelo app. Esses schemes funcionam como deep links, o que significa que qualquer outro app instalado no dispositivo pode invocar o app alvo através deles, abrindo superfície para ataques de injeção de input e para comportamentos parecidos com CSRF via URL.

No DVIA-v2, os schemes registrados são `dvia` e `dviaswift`. Um atacante com acesso ao dispositivo consegue acionar funcionalidades internas do app através desses endpoints, sem qualquer autenticação prévia.

## Permissões de privacidade

As chaves no formato `NS*UsageDescription` declaram as permissões que o app solicita ao sistema. Além de revelar quais recursos o app efetivamente acessa, elas permitem comparar o que foi declarado com o que o app realmente faz em runtime, uma discrepância comum em apps mal desenvolvidos ou que carregam SDKs de terceiros abusivos.

No DVIA-v2, apenas `NSCameraUsageDescription` está presente, o que é intencionalmente restrito para o contexto de laboratório.

## Versão mínima de iOS e SDK

As chaves `MinimumOSVersion` e `DTPlatformVersion` indicam, respectivamente, a versão mínima de iOS suportada pelo app e a versão do SDK usada na compilação. Uma versão antiga de SDK pode significar ausência de proteções introduzidas em versões mais recentes do sistema.

## PkgInfo

O arquivo `PkgInfo`, que fica ao lado do `Info.plist`, contém apenas 8 bytes, o tipo do bundle (`APPL`) e um creator code herdado do macOS. 

## Leitura prática

O `Info.plist` pode estar em formato XML ou binário dentro do bundle. Para ler no terminal:

```bash
plutil -p Info.plist
```

Para converter de binário para XML e poder editar o conteúdo diretamente:

```bash
plutil -convert xml1 Info.plist -o Info_readable.plist
```

## Referências

- Apple Developer Documentation. About Information Property List Files. Disponível em: https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html
