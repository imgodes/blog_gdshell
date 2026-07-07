---
title: App Bundle
---

# App Bundle

O App Bundle é o diretório `.app` dentro do `Payload/`, e é o coração do pacote, contendo tudo que o sistema operacional precisa para carregar e executar a aplicação.

## Elementos centrais

- Executável Mach-O: o binário compilado do app, com o mesmo nome do bundle. É o ponto de entrada da aplicação.
- Info.plist: arquivo XML com metadados essenciais, como o identificador do bundle, a versão, as permissões de privacidade declaradas e as configurações de inicialização. O iOS consulta esse arquivo antes mesmo de executar o app.
- Assets.car: arquivo compilado gerado a partir do `Assets.xcassets`, contendo imagens, cores e outros recursos organizados para entrega otimizada por resolução e tamanho de tela.
- Main Storyboard ou arquivos SwiftUI: definem a interface do usuário, seja por arquivos `.storyboard` no modelo UIKit, seja por arquivos Swift com declarações de View no SwiftUI.
- Frameworks: dependências dinâmicas empacotadas junto ao app, incluindo bibliotecas de terceiros que não fazem parte do sistema operacional.
- PlugIns: contém as Application Extensions empacotadas como bundles `.appex` independentes, como widgets, extensões de teclado ou ações de compartilhamento.
- embedded.mobileprovision: perfil de provisionamento que autoriza o app a rodar em dispositivos específicos e a usar determinadas capacidades do sistema.

## Referências

- Apple Developer Documentation. About Information Property List Files. Disponível em: https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html
- Apple Developer Documentation. File System Programming Guide. Disponível em: https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html
