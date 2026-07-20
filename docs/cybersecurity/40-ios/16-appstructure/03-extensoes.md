---
title: Extensões de Arquivo do IPA
slug: /cybersecurity/iosbasics/appstructure/extensoes
---

# Extensões de Arquivo do IPA

Cada extensão de arquivo encontrada dentro de um `.ipa` reflete uma decisão de compilação ou de empacotamento, e cada uma delas tem uma relevância diferente para uma análise de pentest. Conhecer o que cada formato contém acelera bastante a triagem dos artefatos mais interessantes assim que o pacote é descompactado.

## .plist

Property List é o formato de serialização da Apple, disponível tanto em XML quanto em binário. Todo app tem pelo menos o `Info.plist` com seus metadados, mas plists aparecem em outros contextos importantes também.

Os mais relevantes costumam ser o `Info.plist` do bundle principal, os `Info.plist` encontrados dentro dos `.storyboardc`, que identificam os view controllers da aplicação, e o `VersionInfo.plist` dentro dos `.momd`, que revela o histórico do schema do banco de dados.

Para leitura, o comando `plutil -p arquivo.plist` converte o conteúdo para um formato legível.

## .storyboardc

Um `.storyboardc` é um diretório, não um arquivo único, gerado pela compilação de um `.storyboard`. Ele contém um `Info.plist` que mapeia os identificadores de cada *scene* para os arquivos `.nib` individuais correspondentes.

O valor para pentest está em revelar a estrutura de navegação da aplicação, os nomes dos *view controllers* e as classes Swift ou Objective-C associadas a cada tela, sem que seja preciso descompilar o binário para isso. O DVIA-v2, por exemplo, expõe diretórios como `InsecureDataStorage.storyboardc`, `JailbreakDetection.storyboardc` e `BrokenCryptography.storyboardc`, que já funcionam como um índice das vulnerabilidades implementadas naquele app de teste.

## .nib

Arquivo compilado de interface, gerado a partir de um `.xib` ou de uma scene individual de um `.storyboard`. Contém a hierarquia de objetos de UI já serializada.

Pode ser lido com `ibtool --convert` para recuperar o XML original. Em casos raros, strings hardcoded, como labels, placeholders ou URLs, aparecem diretamente no `.nib` antes mesmo de chegar ao binário compilado.

## .car

Gerado a partir do `Assets.xcassets`, o Compiled Asset Catalog empacota imagens, cores e outros recursos em um formato proprietário otimizado. Por si só não costuma ter grande relevância de segurança, mas pode conter imagens que revelam estados internos do app, como telas de erro, banners de ambiente indicando staging ou produção, ou até capturas de tela usadas durante o desenvolvimento e esquecidas no build final.

Ferramentas como o Asset Catalog Tinkerer ou o acextract permitem extrair esse conteúdo para inspeção.

## .momd e .mom

O `.momd` é um diretório que contém o modelo compilado de um banco de dados Core Data. O `.mom` dentro dele é o modelo em si, e o `.omo` é uma versão otimizada para leitura.

O modelo revela o schema completo do banco, incluindo entidades, atributos e relacionamentos, antes mesmo de qualquer análise do banco de dados em si. A leitura pode ser feita com `momdec`, ou simplesmente rodando `strings` sobre o arquivo `.mom`.

## .dylib

Dynamic Library, o equivalente iOS de um `.so` no Linux. As bibliotecas `libswift*.dylib` dentro de `Frameworks/` são as bibliotecas de runtime do Swift, empacotadas junto ao app para garantir compatibilidade com versões mais antigas do iOS.

O interesse principal está nas bibliotecas que não são da Apple, como SDKs de terceiros distribuídos como `.dylib`.

## .framework

Um `.framework` é um bundle que empacota uma biblioteca, dinâmica ou estática, junto com seus headers e recursos. Frameworks de terceiros ficam em `Frameworks/` e são carregados dinamicamente pelo app.

O inventário de frameworks presentes revela as dependências do app e suas versões. Frameworks desatualizados podem carregar CVEs conhecidas, e o comportamento de cada SDK presente amplia a superfície de ataque, já que seus dados em trânsito, seu armazenamento local e sua comunicação com servidores próprios também entram no escopo de uma avaliação.

## .mobileprovision

O perfil de provisionamento vincula o app a um certificado de desenvolvedor, a uma lista de UDIDs autorizados e a um conjunto de entitlements. Ele está em formato CMS, também conhecido como PKCS#7, e é assinado digitalmente.

Para extrair o conteúdo em texto:

```bash
security cms -D -i embedded.mobileprovision
```

O campo `Entitlements` dentro do perfil lista as capacidades realmente concedidas ao app, como acesso ao Keychain compartilhado, push notifications ou iCloud. Discrepâncias entre os entitlements declarados aqui e o comportamento observado do app podem indicar configurações mal gerenciadas.

## .der

Arquivo de certificado no formato DER, sigla para Distinguished Encoding Rules, que é a codificação binária de um certificado X.509.

No contexto de pentest iOS, a presença de um `.der` dentro do bundle quase sempre indica que o app implementa SSL pinning por certificado, comparando o certificado apresentado pelo servidor com uma cópia guardada localmente. Para inspecionar:

```bash
openssl x509 -in example.der -inform DER -text -noout
```

## _CodeSignature/CodeResources

É um diretório gerado pelo processo de assinatura do app. O arquivo `CodeResources` dentro dele é um plist que lista todos os arquivos do bundle junto com seus hashes e as regras de verificação aplicadas a cada um.

O `CodeResources` serve como um inventário completo do bundle assinado, já que qualquer arquivo listado ali e modificado depois da assinatura invalidaria a verificação. Ele também permite checar se algum arquivo foi adicionado ou removido do bundle original, bastando comparar a lista com o que está de fato em disco.

## Referências

- Apple Developer Documentation. Code Signing Guide. Disponível em: https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html
