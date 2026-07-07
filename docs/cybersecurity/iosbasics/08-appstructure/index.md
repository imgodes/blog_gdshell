---
title: Estrutura de um App iOS
---

# Estrutura de um App iOS

Depois de percorrer a arquitetura do sistema e seus mecanismos de segurança, vale fechar olhando para dentro de uma aplicação em si. Entender como um app iOS é empacotado e organizado é o que permite fazer triagem rápida durante um pentest, sabendo onde procurar cada tipo de informação antes mesmo de abrir um descompilador.

## O arquivo IPA

Quando um aplicativo iOS é distribuído, o que se está enviando é um arquivo `.ipa`, sigla para iOS App Store Package, o que é um arquivo ZIP renomeado. Descompactá-lo revela uma estrutura de diretórios bem definida, usada pelo sistema operacional para instalar e executar o app.

A estrutura principal de um `.ipa` é a seguinte:

```
MeuApp.ipa
└── Payload/
    └── MeuApp.app/          <- App Bundle
        ├── MeuApp           <- Executável Mach-O
        ├── Info.plist
        ├── Assets.car
        ├── Base.lproj/
        │   └── Main.storyboard (ou LaunchScreen.storyboard)
        ├── Frameworks/
        ├── PlugIns/
        └── embedded.mobileprovision
```

O diretório `Payload/` é obrigatório e contém o App Bundle, sendo que todo o resto do pacote fica organizado dentro dele. Fora do `Payload/`, o `.ipa` também pode conter um diretório `SwiftSupport/`, com as bibliotecas de runtime do Swift necessárias para versões mais antigas do iOS, além de metadados de distribuição como o `iTunesMetadata.plist`, quando o arquivo vem diretamente da App Store.

Os próximos tópicos detalham o que fica dentro do App Bundle, os diretórios do sandbox no dispositivo, as extensões de arquivo mais relevantes para pentest e o padrão arquitetural usado pela maioria dos apps iOS.

## Referências

- Apple Developer Documentation. About Information Property List Files. Disponível em: https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html
