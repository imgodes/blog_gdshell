---
title: Instalando ipsw e Swift
slug: /cybersecurity/iossecurity/engenhariareversa/iosrecomipsw/instalarferramentas
---

# Instalando ipsw e Swift

## Instalando o ipsw

No macOS:

```bash
brew install blacktop/tap/ipsw
```

No Ubuntu:

```bash
sudo snap install ipsw
```

No Windows:

```bash
scoop bucket add blacktop https://github.com/blacktop/scoop-bucket.git
scoop install blacktop/ipsw
```

Esse processo instala o kit de ferramentas completo, incluindo o próprio `ipsw`, além do `class-dump` e do `swift-dump`. Depois da instalação, confira se está tudo certo rodando `ipsw --help`.

## Instalando o Swift

No macOS, o Swift já vem junto do Xcode, então se você seguiu a ordem dos conteúdos deste blog, provavelmente já o tem instalado.

No Ubuntu, instale com os comandos abaixo:

```bash
sudo apt install -y curl
curl -L https://swiftlygo.xyz/install.sh | bash
sudo swiftlygo install latest
```

Depois, confirme que está funcionando com `swift --help`.

Com o `ipsw` e o `swift` instalados, o próximo passo é extrair o IPA que vamos usar como exemplo nos tópicos seguintes.
